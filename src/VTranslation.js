import React, {useState} from "react";
import {useNavigate, useParams,} from "react-router-dom";
import TonWeb from "tonweb";
import ReactPlayer from "react-player";

const tonweb = new TonWeb();
const BN = TonWeb.utils.BN;
const toNano = TonWeb.utils.toNano;

const process = async (sA, sB, amount) => {
    const seedA = TonWeb.utils.base64ToBytes(sA); // A's private (secret) key
    const keyPairA = tonweb.utils.keyPairFromSeed(seedA); // Obtain key pair (public key and private key)

    const seedB = TonWeb.utils.base64ToBytes(sB); // B's private (secret) key
    const keyPairB = tonweb.utils.keyPairFromSeed(seedB);

    const channelInitState = {
        balanceA: toNano('1'), // A's initial balance in Toncoins. Next A will need to make a top-up for this amount
        balanceB: toNano('2'), // B's initial balance in Toncoins. Next B will need to make a top-up for this amount
        seqnoA: new BN(0), // initially 0
        seqnoB: new BN(0)  // initially 0
    };

    const channelConfig = {
        channelId: new BN(124), // Channel ID, for each new channel there must be a new ID
        addressA: sA, // A's funds will be withdrawn to this wallet address after the channel is closed
        addressB: sB, // B's funds will be withdrawn to this wallet address after the channel is closed
        initBalanceA: channelInitState.balanceA,
        initBalanceB: channelInitState.balanceB
    }


    const channelA = tonweb.payments.createChannel({
        ...channelConfig,
        isA: true,
        myKeyPair: keyPairA,
        hisPublicKey: keyPairB.publicKey,
    });

    const walletA = tonweb.wallet.create({
        publicKey: keyPairA.publicKey
    });

    const fromWalletA = channelA.fromWallet({
        wallet: walletA,
        secretKey: keyPairA.secretKey
    });

    await fromWalletA.deploy().send(toNano(amount));
}

const VTranslation = () => {

    let params = useParams();
    let navigate = useNavigate();
    const [time, setTime] = useState(0);
    const [balance, setBalance] = useState(0);
    const event = JSON.parse(atob(params.id));
    const [timer, setTimer] = useState(0);

    const stop = () => {
        stopVideo()
        process(event.author, localStorage.getItem('nba'), balance)
        navigate('/ton/visitor/result/' + params.id);
    }

    let sec = 0;

    const playVideo = () => {
        setTimer(setInterval(tick, 1000))
    }

    const stopVideo = () => {
        clearInterval(timer)
        setTimer(0)
    }

    const tick = () => {
        sec++
        setTime(sec);
        setBalance(event.price * sec)
    }

    return (
        <div className='row'>
            <div className='col-xs-12 col-md-6'>
                Event id {params.id}
            </div>
            <div className='col-xs-12 col-md-6 text-end'>
                <span className='counter'>
                    Balance: {balance} TON
                </span>
                <span className='counter'>
                    Time: {time}
                </span>
                <button className='btn btn-stop' onClick={stop}></button>
            </div>
            <div className='col-12'>
                <div className='video mt-5'>
                    <ReactPlayer onPlay={playVideo} onPause={stopVideo} url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
                </div>
            </div>
        </div>
    )
}

export default VTranslation