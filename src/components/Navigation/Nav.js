import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";
import NavLogo from "../Images/safespacelogo1.png";
import "./Nav.scss";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" light expand="md" fixed={"top"}>
        <NavbarBrand href="/">
          <img
            src={NavLogo}
            width="50"
            height="50"
            class="d-inline-block align-top"
            alt=""
          />
          <div className="nav-title-wrapper">
            <div className="nav-title">Safespace</div>
            <div className="nav-undertitle">
              building healthy minds and hearts
            </div>
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://safespace-frontend.netlify.com/">
                Sign in
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://safespace-frontend.netlify.com/">
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
