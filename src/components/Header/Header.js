import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";
import * as Icon from "react-bootstrap-icons";
import logo from "../../logo.svg";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="md">
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="../DashboardPackingList">
              <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to="../ListBarangIn">
              <Nav.Link>List Barang Masuk</Nav.Link>
            </LinkContainer>
            <LinkContainer to="../ListBarangOut">
              <Nav.Link>List Barang Keluar</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Master" id="basic-nav-dropdown">
              <LinkContainer to="../MstStock">
                <NavDropdown.Item>Stock</NavDropdown.Item>
              </LinkContainer>
              {/* <NavDropdown.Item href="../MstStock">Stock</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="Reports" id="basic-nav-dropdown">
              <LinkContainer to="../RptBarangMasuk">
                <NavDropdown.Item>Report Barang Masuk</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="../RptBarangKeluar">
                <NavDropdown.Item>Report Barang Keluar</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title="Admin" id="basic-nav-dropdown">
              <LinkContainer to="../AdmListUser">
                <NavDropdown.Item>List User</NavDropdown.Item>
              </LinkContainer>
              {/* <LinkContainer to="../AdmSettings">
                                <NavDropdown.Item>Settings</NavDropdown.Item>
                            </LinkContainer> */}
            </NavDropdown>
          </Nav>
          <Nav className="ml-auto">
            {/* <NavDropdown alignRight title={<Icon.PersonCircle />} id="dropdown-menu-align-right"> */}
            <NavDropdown
              alignRight
              title={
                <span>
                  Administrator <Icon.PersonCircle className="mb-1" />
                </span>
              }
              id="dropdown-menu-align-right"
            >
              <NavDropdown.Item href="#action/3.1">
                Change Password
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
