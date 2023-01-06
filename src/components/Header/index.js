import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Logo from "../../Assets/logo.png";
import "./index.css";

import React from "react";

export default function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={Logo} fluid/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#hab">Habilidades</Nav.Link>
              <Nav.Link href="#pro">Projetos</Nav.Link>
              <Nav.Link href="#cont">Contatos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
