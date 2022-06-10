import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

function HeaderNavBar() {
    return (<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">DIMUTHU WICKRAMANAYAKE</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">(Senior Software Engineer)</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Mail Me</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Call Me
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}


export default HeaderNavBar;