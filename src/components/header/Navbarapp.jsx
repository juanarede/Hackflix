import "./navbar.css";
import image from "../../assets/img/hackflix.png";

import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Navbarapp() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="mb-1 navbar navbar-expand-lg navbar-dark info-color fixed-top p-md-3 scrolling-navbar"
      >
        <Container>
          <Navbar.Brand href="/">
            {" "}
            <img className="img-navbar" src={image} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="link colorlink" href="/search">
                <i class="bi bi-search"></i>SEARCH MOVIE
              </Nav.Link>
              <Nav.Link className="link colorlink" href="/About">
                ABOUT US
              </Nav.Link>
              <Nav.Link className="link colorlink" href="/contact">
                CONTACT
              </Nav.Link>
            </Nav>
            <Nav >
              <Nav.Link >
                <i  class="bi bi-bell-fill"></i>
              </Nav.Link>
              <Nav.Link  eventKey={2} href="#memes"><i class="bi bi-person-circle"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    </div>
  );
}
