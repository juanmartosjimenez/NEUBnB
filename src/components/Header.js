import React from 'react';
import {Container, Navbar} from "react-bootstrap";
import logo from '../logo.svg';
import {Link} from "react-router-dom";

function Header() {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        color="white"
                        className="d-inline-block align-top"
                    />{' '}
                    NEUBnB
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;