import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

function Header() {
    return (
        <div>
            <Navbar expand="lg" className="navbarBackground">
                <Container>
                    <Navbar.Brand href="/"><i class="fab fa-pushed"></i> Rasp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/" className="mx-1">Home</Nav.Link>
                            <Nav.Link href="/" className="mx-1">Products</Nav.Link>
                            <Nav.Link href="/" className="mx-1">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header