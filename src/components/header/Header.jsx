import React from 'react'
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { Routes, Route } from "react-router-dom";
import Artikel from '../../pages/Artikel/Artikel';
import Home from '../../pages/Home/Home';
import Detail from '../../pages/Detail/Detail';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';

const Header = () => {
    return (
        <>
            <Navbar id='navbar' sticky="top" expand="lg">
                <Container id='nav-container'>
                    <Navbar.Brand href="#home">
                        <img
                            src="https://iili.io/HH3HIHB.png"
                            width="100"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" >
                            <LinkContainer to="/">
                                <Nav.Link className="navLink">Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/articles">
                                <Nav.Link className="navLink">Artikel</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link className="navLink">About Us</Nav.Link>
                            </LinkContainer >
                            <LinkContainer to="/contact">
                                <Nav.Link className="navLink">Contact</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<Artikel />} />
                <Route path="articles/detail/:id" element={<Detail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    )
}

export default Header