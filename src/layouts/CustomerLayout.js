import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link, NavLink } from "react-router-dom";

import { categories } from "constants.js";
import "layouts/styles/Main.css";

const CustomerLayout = (WrappedComponent, ToastContainer) => {
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
                <NavLink
                  className="nav-link"
                  to={`/collections?category=${categories.STEAKS.key}`}
                >
                  Steaks
                </NavLink>
                <NavLink
                  className="nav-link"
                  to={`/collections?category=${categories.BLACK_BRANGUS.key}`}
                >
                  Black Brangus
                </NavLink>
                <NavLink
                  className="nav-link"
                  to={`/collections?category=${categories.DRIED_MEAT.key}`}
                >
                  Dried Meat
                </NavLink>
                <NavLink
                  className="nav-link"
                  to={`/collections?category=${categories.ACCESSORIES.key}`}
                >
                  Accessories
                </NavLink>
              </Nav>
            </Navbar.Collapse>
            <Link className="navbar-brand text-primary" to="/admin">
              Admin
            </Link>
          </Container>
        </Navbar>

        <Container className="MainContainer">
          <Row>
            <Col>
              <WrappedComponent />
              <ToastContainer />
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
                  &copy; Rancho El 17, {new Date().getFullYear()}. Powered by
                  <a
                    href="https://github.com/luiscarrilloglez"
                    className="pl-3"
                  >
                    @luiscarrilloglez
                  </a>
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
