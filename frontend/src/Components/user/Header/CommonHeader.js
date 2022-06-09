import React, { useState } from "react";
import { useDispatch } from "react-redux"
import {
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";
import { Link } from 'react-router-dom'
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ChatIcon from '@mui/icons-material/Chat';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import UserProfile from '@mui/icons-material/AccountCircleOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { logoutUser } from "../../../Actions/User"
import { useAlert } from "react-alert"
import "./CommonHeader.css"
import { NavDropdown } from "react-bootstrap"


function Header() {

  const dispatch = useDispatch()
  const alert = useAlert();

  const [tab, setTab] = useState(window.location.pathname)
  const logoutHandler = () => {
    dispatch(logoutUser());
    alert.success("Logged out successfully")
  }
  return (

    <Navbar expand="lg" className=" sticky-top  w-100 bg-white  ">
      <Container >
        <Navbar.Brand href="#" style={{ fontSize: "30px" }}>
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
            <Link to="/" style={{ color: "black", paddingLeft: "22.5px" }} onClick={() => setTab("/")}>
              {tab === "/" ? <HomeIcon /> : <HomeOutlinedIcon />}
            </Link>
            <Link to="/search" style={{ color: "black", paddingLeft: "22.5px" }} onClick={() => setTab("/search")} >
              {tab === "/search" ? <PersonSearchIcon /> : <PersonSearchOutlinedIcon />}
            </Link>
            <Link to="/messenger" style={{ color: "black", paddingLeft: "22.5px" }} onClick={() => setTab("/messenger")} >
              {tab === "/messenger" ? <ChatIcon /> : <ChatOutlinedIcon />}
            </Link>
            {/* <Link to="/notification" style={{ color: "black", paddingLeft: "22.5px" }} onClick={() => setTab("/notification")} >
              {tab === "/notification" ? <NotificationsIcon /> : <NotificationsNoneOutlinedIcon />}
            </Link> */}

            <NavDropdown style={{ color: "black", paddingLeft: "22.5px",marginTop: "-8px" }} title={<UserProfile style={{color: "black"}} />} id="basic-nav-dropdown">

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
                <p onClick={(logoutHandler)} style={{marginBottom:"0"}}>
                <LogoutIcon  /> LogOut
                </p>
              </NavDropdown.Item>

            </NavDropdown>
            {/* <Link to="/account" style={{ color: "black", paddingLeft: "22.5px" }} onClick={() => setTab("/account")} >
              {tab === "/account" ? <AccountCircleIcon /> : <UserProfile />}
            </Link> */}
            {/* <p style={{ paddingLeft: "22.5px", cursor: "pointer" }}>
              <LogoutIcon onClick={(logoutHandler)} />
            </p> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Header;
