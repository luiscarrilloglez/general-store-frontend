import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import { Link, NavLink } from "react-router-dom";

import { categories } from "constants.js";
import "layouts/MainLayout.css";

const MainLayout = (WrappedComponent, props) => {
  const { shoppingCartContext, isAdmin } = props;

  return () => {
    const location = useLocation();

    const collectionLink = (category) => {
      const linkPath = `/${isAdmin ? "admin/" : ""}collections`;
      const linkSearch = `?category=${category.key}`;

      return (
        <NavLink
          key={category.key}
          className={({ isActive }) =>
            `nav-link${isActive && location.search === linkSearch ? " active" : ""}`
          }
          to={`${linkPath}${linkSearch}`}
          end
        >
          {category.label}
        </NavLink>
      );
    };

    return (
      <>
        <Navbar bg="white" expand="lg" sticky="top">
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
                  <NavLink className="nav-link" to="/checkout" end>
                    <Image src="/assets/shopping_cart.png" alt="Rancho el 17" />
                    <Badge bg="danger">
                      {shoppingCartContext?.length ?? 0}
                    </Badge>
                  </NavLink>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container fluid className="p-0">
          <WrappedComponent />
        </Container>

        <footer className="text-center py-1 ">
          <Image src="/assets/rancho17.webp" alt="Rancho el 17" />
          <span className="text-white">
            &copy; Rancho El 17, {new Date().getFullYear()}
          </span>
          <Link className="text-white m-4" to={isAdmin ? "/" : "/admin"}>
            {isAdmin ? "Customer" : "Go to Admin"}
          </Link>
        </footer>
      </>
    );
  };
};

export default MainLayout;
