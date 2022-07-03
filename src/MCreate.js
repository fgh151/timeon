import React, {useState} from "react";
import {Button, Form, Row} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MCreate() {

    const nba  = localStorage.getItem('nba')
    let navigate = useNavigate();

    if (typeof nba != "string") {
        navigate('/ton/login/')
    }

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);


    const submit = (e) => {
        e.preventDefault();
        console.log(title, description, price)
        const str = btoa( JSON.stringify({
            "title": title,
            "description": description,
            "price":price,
            "author": nba,
        }))
        localStorage.setItem('event', str);
        navigate('/ton/mentor/wait/' + str)
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
