// import TonWeb from "tonweb";
import * as tonMnemonic from "tonweb-mnemonic";
// import TonWeb from "tonweb";

export async function testTon() {
    const words = await tonMnemonic.generateMnemonic();

    console.log(words)

    const seed = await tonMnemonic.mnemonicToSeed(words);

    console.log(seed)

    // const tonweb = new TonWeb();
    // const keyPair = tonweb.utils.nacl.sign.keyPair.fromSeed(seed);
    // console.log(keyPair)
}