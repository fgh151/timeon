import React, {useState} from "react";
import {Button, Form, Row} from "react-bootstrap";
import * as tonMnemonic from "tonweb-mnemonic";
import TonWeb from "tonweb";

const Login = () => {

    const [words, setWords] = useState([]);

    const change = (index, word) => {
        let w = words;
        w[index] = word;
        setWords(w)
    }

    const submit = (e) => {

        e.preventDefault();
        tonMnemonic.mnemonicToSeed(words)
            .then(seed => {
                const tonweb = new TonWeb();
                const keyPair = tonweb.utils.nacl.sign.keyPair.fromSeed(seed);
                localStorage.setItem('cr', JSON.stringify(keyPair))
                navigate('/ton/')
            })
    }

    return (
        <div className='row'>
            <Form>
                <Row>
                    <div className='col-12 text-center'>
                        <b>24 secret words</b>
                        <div className="screen-text mb-10">
                            Please restore access to your <b>non-hardware</b> wallet by<br/>
                            entering the 24 secret words you wrote<br/>
                            down when creating the wallet.
                        </div>
                    </div>
                    {[...Array(24)].map((x, i) =>
                        <div className='col-xs-12 col-sm-6 text-center' key={'i' + i}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>{i + 1}</Form.Label>
                                <Form.Control type="text" placeholder={i + 1}
                                              onChange={e => change(i, e.target.value)} value={words[i]}/>
                            </Form.Group>
                        </div>
                    )}
                    <div className='col-12 text-center'>

                        <Button variant="primary" type="submit" onClick={submit}>
                            Login
                        </Button>
                    </div>
                </Row>
            </Form>
        </div>
    )
}

export default Login;