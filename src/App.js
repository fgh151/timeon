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
import VInfo from "./VInfo";
import VTranslation from "./VTranslation";
import VResult from "./VResult";

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
                        <Route path="/ton/" element={<Menu />} />
                        <Route path="/ton/mentor/" element={<MCreate/>}/>
                        <Route path="/ton/mentor/wait/:id" element={<MWait/>}/>
                        <Route path="/ton/mentor/translation/:id" element={<MTranslation/>}/>
                        <Route path="/ton/mentor/result/:id" element={<MResult/>}/>

                        <Route path="/ton/visitor/translation/:id" element={<VTranslation />} />
                        <Route path="/ton/visitor/result/:id" element={<VResult/>}/>
                        <Route path="/ton/visitor/:id" element={<VInfo />} />
                    </Routes>
                </Container>
            </Router>
        </>
    );
}