import React from "react";
import { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../Image/logo.png";
import "./NavBarSection.css";

const NavBarSection = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleLogOUt = () => {
    window.location.reload("Refresh");
  };
  return (
    <div className="container">
      <Navbar expand="lg">
        <Navbar.Brand className="w-50" to="/">
          <img className="w-50" src={logo} alt="site logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink className="modifyLink m-2 m-md-3" to="/home">
              <strong>Home</strong>
            </NavLink>

            <NavLink className="modifyLink m-2 m-md-3" to="/portfolio">
              <strong>Our Portfolio</strong>
            </NavLink>
            <NavLink className="modifyLink m-2 m-md-3" to="/team">
              <strong>Our Team</strong>
            </NavLink>
            {loggedInUser.email ? (
              <NavLink
                style={{ color: "green" }}
                className="modifyLink m-2 m-md-3"
                to="/orderList"
              >
                <strong>My Profile</strong>
              </NavLink>
            ) : (
              <NavLink className="modifyLink m-2 m-md-3" to="/contact">
                <strong>Contact Us</strong>
              </NavLink>
            )}
          </Nav>

          {loggedInUser.email ? (
            <Button onClick={handleLogOUt} to="/login" variant="dark">
              Log out
            </Button>
          ) : (
            <Link to="/login">
              <Button variant="dark">Log In</Button>
            </Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBarSection;
