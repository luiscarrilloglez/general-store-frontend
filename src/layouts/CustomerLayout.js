import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link, NavLink } from "react-router-dom";

import "layouts/styles/Main.css";

const CustomerLayout = (WrappedComponent) => {
  return () => {
    return (
      <>
        <Navbar bg="white" expand="lg" className="sticky-top MainNavbar">
          <Container>
            <Link className="navbar-brand" to="/">
              <Image src="/assets/rancho17.webp" alt="Rancho el 17" />
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-center"
            >
              <Nav>
                <NavLink className="nav-link" to="/">
                  Best Sellers
                </NavLink>
                <NavLink className="nav-link" to="/steaks">
                  Steaks
                </NavLink>
                <NavLink className="nav-link" to="/black-brangus">
                  Black Brangus
                </NavLink>
                <NavLink className="nav-link" to="/dried-meat">
                  Dried Meat
                </NavLink>
                <NavLink className="nav-link" to="/accessories">
                  Accessories
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
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
                <Image src="/assets/rancho17.webp" alt="Rancho el 17" />
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

export default CustomerLayout;
