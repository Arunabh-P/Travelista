import React, { useState } from "react";
import { useDispatch } from "react-redux"
import {
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";
import { Link } from 'react-router-dom'
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ChatIcon from '@mui/icons-material/Chat';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import UserProfile from '@mui/icons-material/AccountCircleOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { logoutUser } from "../../../Actions/User"
import { useAlert } from "react-alert"
import { NavDropdown } from "react-bootstrap"
import "./CommonHeader.css"


function Header() {

  const dispatch = useDispatch();
  const alert = useAlert();
  const [tab, setTab] = useState(window.location.pathname);

  const logoutHandler = () => {
    dispatch(logoutUser());
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
              <Link to="/" style={{ color: "black", paddingLeft: "22.5px" }} onClick={() => setTab("/")}>
                {tab === "/" ? <HomeIcon /> : <HomeOutlinedIcon />}
              </Link>
              <Link to="/search" style={{ color: "black", paddingLeft: "22.5px" }} onClick={() => setTab("/search")} >
                {tab === "/search" ? <PersonSearchIcon /> : <PersonSearchOutlinedIcon />}
              </Link>
              <Link to="/messenger" style={{ color: "black", paddingLeft: "22.5px" }} onClick={() => setTab("/messenger")} >
                {tab === "/messenger" ? <ChatIcon /> : <ChatOutlinedIcon />}
              </Link>
              <NavDropdown style={{ color: "black", paddingLeft: "22.5px", marginTop: "-8px" }} title={<UserProfile style={{ color: "black" }} />} id="basic-nav-dropdown">
                <NavDropdown.Item >
                  <Link to="/account" className="account-text-header" >Account</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/update/password" className="account-text-header">Change Password</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/update/profile" className="account-text-header">Edit Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <p onClick={(logoutHandler)} style={{ marginBottom: "0" }}>
                    <LogoutIcon /> LogOut
                  </p>
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="d-lg-none d-flex justify-content-start row">
              <div className="home-md-icons row">
                <div className="each-list-icons dropdown-item" >
                  <Link to="/" style={{ color: "black", paddingLeft: "22.5px" }} className="icon-in-header" onClick={() => setTab("/")}>
                    {tab === "/" ? <HomeIcon /> : <HomeOutlinedIcon />} Home
                  </Link>
                </div>
                <div className="each-list-icons dropdown-item">
                  <Link to="/search" style={{ color: "black", paddingLeft: "22.5px" }} onClick={() => setTab("/search")} className="icon-in-header" >
                    {tab === "/search" ? <PersonSearchIcon /> : <PersonSearchOutlinedIcon />} Search
                  </Link>
                </div>
                <div className="each-list-icons dropdown-item">
                  <Link to="/messenger" style={{ color: "black", paddingLeft: "22.5px" }} onClick={() => setTab("/messenger")} className="icon-in-header" >
                    {tab === "/messenger" ? <ChatIcon /> : <ChatOutlinedIcon />} Chat
                  </Link>
                </div>
                <div className="each-list-icons">
                  <NavDropdown style={{ color: "black", paddingLeft: "22.5px", marginTop: "-8px" }} title="Account" id="basic-nav-dropdown">
                    <NavDropdown.Item >
                      <Link to="/account" className="account-text-header" >Account</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/proposals" className="account-text-header">Proposals</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/update/password" className="account-text-header">Change Password</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/update/profile" className="account-text-header">Edit Profile</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <p onClick={(logoutHandler)} style={{ marginBottom: "0" }}>
                        <LogoutIcon /> LogOut
                      </p>
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Header;
