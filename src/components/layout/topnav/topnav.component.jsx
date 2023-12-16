import reactlogo from "../../../assets/react.svg";
/* import tclogo from "../../../assets/TCLogoOnly.png"; */
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function TopNav (){

    return(
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="/">
      <img
        alt=""
        src={reactlogo}
        height="40"
        className="d-inline-block align-top"
      />{" "}
      Learning React
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/films">
          Films
        </NavLink>
      </Nav>
      <Navbar.Brand className="justify-content-end">
        {/* <img src={tclogo} height="40" alt="TrueCoders" /> */}
      </Navbar.Brand>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
};
