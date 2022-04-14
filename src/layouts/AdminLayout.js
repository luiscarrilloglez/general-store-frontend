import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import { Link, NavLink } from "react-router-dom";

import { categories } from "constants.js";
import "layouts/styles.css";

const CustomerLayout = (WrappedComponent) => {
  return () => {
    const pathIsActive = (match, location, categoryKey) => {
      if (!match || location.search !== `?category=${categoryKey}`) {
        return false;
      }

      return true;
    };

    const collectionLink = (category) => {
      return (
        <NavLink
          className="nav-link"
          to={`/admin/collections?category=${category.key}`}
          isActive={(match, location) =>
            pathIsActive(match, location, category.key)
          }
        >
          {category.label}
        </NavLink>
      );
    };

    return (
      <>
        <Navbar bg="white" expand="lg" className="sticky-top MainNavbar">
          <Container>
            <Link className="navbar-brand" to="/admin">
              <Image src="/assets/rancho17.webp" alt="Rancho el 17" />
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-center"
            >
              <Nav>
                {collectionLink(categories.STEAKS)}
                {collectionLink(categories.BLACK_BRANGUS)}
                {collectionLink(categories.DRIED_MEAT)}
                {collectionLink(categories.ACCESSORIES)}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container
          fluid
          className="m-0 p-0 bg-warning"
          style={{ height: "100%" }}
        >
          <WrappedComponent />
        </Container>

        <footer className="text-center py-3">
          <Image src="/assets/rancho17.webp" alt="Rancho el 17" />
          <span className="text-muted">
            &copy; Rancho El 17, {new Date().getFullYear()}
          </span>
          <Link className="text-primary m-4" to="/">
            Customer
          </Link>
        </footer>
      </>
    );
  };
};

export default CustomerLayout;
