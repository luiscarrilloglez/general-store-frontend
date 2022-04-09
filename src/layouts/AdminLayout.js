import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "layouts/styles/Main.css";

const AdminLayout = (WrappedComponent) => {
  return () => {
    const menuOptions = () => {
      const options = (
        <Nav>
          <NavLink className="nav-link" to="/admin/">
            Principal
          </NavLink>
          <NavLink className="nav-link" to="/admin/1">
            Categoria 1
          </NavLink>
          <NavLink className="nav-link" to="/admin/2">
            Categoria 2
          </NavLink>
          <NavLink className="nav-link" to="/admin/3">
            Categoria 3
          </NavLink>
          <NavLink className="nav-link" to="/admin/4">
            Categoria 4
          </NavLink>
        </Nav>
      );

      return options;
    };

    return (
      <>
        <Navbar bg="white" expand="lg" className="sticky-top MainNavbar">
          <Link className="navbar-brand" to="/">
            <Image src="/assets/rancho17.webp" alt="Rancho el 17" />
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            {menuOptions()}
          </Navbar.Collapse>
        </Navbar>

        <Container className="MainContainer" fluid={true}>
          <Row>
            <Col>
              <WrappedComponent />
            </Col>
          </Row>
        </Container>

        <hr />

        <footer className="text-center py-3">
          <Container>
            <Row>
              <Col>
                <Image src="/assets/rancho17.png" alt="Rancho el 17" />
                <span className="text-muted">
                  &copy; All rights reserved. Copyright{" "}
                  {new Date().getFullYear()}. Powered by @luiscarrilloglez
                </span>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  };
};

export default AdminLayout;
