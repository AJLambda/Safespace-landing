import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";
import NavLogo from "../Images/safespacelogo1.png";
import "./Nav.scss";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="filler"></div>
      <Navbar className="navbar" light expand="md" fixed={"top"}>
        <NavbarBrand href="/">
          <img
            src={NavLogo}
            width="50"
            height="50"
            // className="d-inline-block align-top"
            alt=""
            className="nav-logo-bubble"
          />
          <div className="nav-title-wrapper">
            <div className="nav-title">Safespace</div>
            <div className="nav-undertitle">
              the safe way to increase positivity
            </div>
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="http://localhost:3001">Sign in</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://localhost:3001">
                <Button className="signup-btn" color="primary">
                  Sign up
                </Button>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
