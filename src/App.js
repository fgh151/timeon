import React from "react";
import {HashRouter as Router, Routes, Route} from "react-router-dom";
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
import Login from "./Login";

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

                        <Route path="/visitor/translation/:id" element={<VTranslation />} />
                        <Route path="/visitor/result/:id" element={<VResult/>}/>
                        <Route path="/visitor/info/:id" element={<VInfo />} />

                        <Route path="/login" element={<Login />} />
                    </Routes>
                </Container>
            </Router>
        </>
    );
}