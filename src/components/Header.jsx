import React, { useState } from "react";
import { Container, Button, NavDropdown, Navbar, Nav } from "react-bootstrap";
import headshot from "../assets/headshot_zoom.png";
import { Link } from "react-router-dom";

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
          <Link to="/">
            <img
              alt=""
              src={headshot}
              width="60"
              height="60"
              className="d-inline-block align-top border border border-light bg-light"
              style={{ borderRadius: "50%" }}
            />
          </Link>
          <span className="mx-2">Hello World. I'm Kevin.</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto header">
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
