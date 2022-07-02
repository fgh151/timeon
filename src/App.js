import React from "react";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import MCreate from "./MCreate";
import MWait from "./MWait";
import MTranslation from "./MTranslation";
import MResult from "./MResult";
import {Container, Nav} from "react-bootstrap";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./menu";

export default function App() {
    return (
        <>
            <Nav>
                <Container className='mt-4'>
                    <img src={logo} className="App-logo" alt="logo"/>
                </Container>
            </Nav>

            <Router>
                <Container className='mt-4'>
                    <Routes>
                        <Route path="/" element={<Menu />} />
                        <Route path="/mentor/" element={<MCreate/>}/>
                        <Route path="/mentor/wait/:id" element={<MWait/>}/>
                        <Route path="/mentor/translation/:id" element={<MTranslation/>}/>
                        <Route path="/mentor/result/:id" element={<MResult/>}/>
                    </Routes>
                </Container>
            </Router>
        </>
    );
}