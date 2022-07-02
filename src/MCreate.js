import React, {useState} from "react";
import {Button, Form, Row} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {testTon} from "./utils/ton";


function MCreate() {



    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);

    let navigate = useNavigate();

    const submit = (e) => {

        testTon();

        e.preventDefault();
        console.log(title, description, price)

        navigate('/ton/mentor/wait/' + (new Date()).getTime())
    }

    return (
        <Form>
            <Row>
                <div className='col-xs-12 col-sm-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Event title</Form.Label>
                        <Form.Control type="text" placeholder="Event title" onChange={e => setTitle(e.target.value)}/>
                    </Form.Group>

                </div>
                <div className='col-xs-12 col-sm-6'>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Price per minutes</Form.Label>
                        <Form.Text className="text-muted">
                            12 TON/h
                        </Form.Text>
                        <Form.Control type="number" placeholder="Ton"
                                      onChange={e => setPrice(parseInt(e.target.value))}/>
                    </Form.Group>

                </div>

                <div className='col-12'>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="textarea" placeholder="Description"
                                      onChange={e => setDescription(e.target.value)}/>
                    </Form.Group>
                </div>

                <div className='col-12 text-center'>

                    <Button variant="primary" type="submit" onClick={submit}>
                        Crete event
                    </Button>
                </div>
            </Row>
        </Form>
    );
}

export default MCreate;
