import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import { Link, NavLink } from "react-router-dom";

import { categories } from "constants.js";
import "layouts/CategoriesLayout.css";

const CustomerLayout = (WrappedComponent, props) => {
  const { checkoutContext, isAdmin } = props;

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
          to={`/${isAdmin ? "admin/" : ""}collections?category=${category.key}`}
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
        <Navbar bg="white" expand="md" className="sticky-top MainNavbar">
          <Container>
            <Link className="navbar-brand" to={isAdmin ? "/admin" : "/"}>
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

                {!isAdmin && (
                  <NavLink className="nav-link text-rigth" to="/checkout">
                    <Image src="/assets/shopping_cart.png" alt="Rancho el 17" />
                    <Badge bg="danger">{checkoutContext?.length ?? 0}</Badge>
                  </NavLink>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container fluid className="p-0" style={{}}>
          <WrappedComponent />
        </Container>

        <footer className="text-center py-1 ">
          <Image src="/assets/rancho17.webp" alt="Rancho el 17" />
          <span className="text-muted">
            &copy; Rancho El 17, {new Date().getFullYear()}
          </span>
          <Link className="text-primary m-4" to={isAdmin ? "/" : "/admin"}>
            {isAdmin ? "Customer" : "Admin"}
          </Link>
        </footer>
      </>
    );
  };
};

export default CustomerLayout;
