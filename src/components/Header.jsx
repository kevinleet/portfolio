import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import headshot from "../assets/headshot_zoom.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="md"
      className="bg-body-tertiary "
      data-bs-theme="dark"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          <img
            alt=""
            src={headshot}
            width="60"
            height="60"
            className="d-inline-block align-top border"
            style={{ borderRadius: "50%" }}
          />
          <span className="mx-2">Hi, I'm Kevin.</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto header">
            <Nav.Link as={Link} to="/" onClick={handleNavClick}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleNavClick}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={handleNavClick}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleNavClick}>
              Contact
            </Nav.Link>

            <Button
              className="btn-sm btn-success mx-2 my-1"
              href="https://drive.google.com/uc?id=1Z3VS7jWPz5cE74UtLrXOYe7ADAzr1lXx&export=download"
              download
            >
              Get Resume ↓
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
