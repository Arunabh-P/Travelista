import React, { useState } from "react";
import { useDispatch } from "react-redux"
import {
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";
import { Link } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import { useAlert } from "react-alert"
import "./CommonHeader.css"
import { logoutAdmin } from "../../../Actions/Admin";


function Header() {

  const dispatch = useDispatch();
  const alert = useAlert();

  const logoutHandler = () => {
    dispatch(logoutAdmin());
    alert.success("Logged out successfully")
  }

  return (

    <Navbar expand="lg" className=" sticky-top  w-100 bg-white  ">
      <Container >
        <Navbar.Brand style={{ fontSize: "30px" }}>
          <Link style={{ textDecoration: "none", color: "black" }} to={'/'}> Travelista</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Nav>
            <div className="d-none d-lg-flex">
              <p onClick={(logoutHandler)}>

              <LogoutIcon />
              </p>
              
            </div>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Header;
