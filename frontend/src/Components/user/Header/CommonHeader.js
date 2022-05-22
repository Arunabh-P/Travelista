import React, {useState} from "react";
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



function Header() {
  const [tab, setTab] = useState(window.location.pathname)
  return (

    <Navbar expand="lg" className="sticky-top  w-100 bg-white  ">
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
            <Link to="/" style={{ color: "black" }}  onClick={()=>setTab("/")}>
        {tab === "/" ? <HomeIcon  /> : <HomeOutlinedIcon />}

              
            </Link>
            <Link to="/Search" style={{ color: "black" }} onClick={()=>setTab("/search")} >
        {tab === "/search" ? <PersonSearchIcon /> : <PersonSearchOutlinedIcon />}

              
            </Link>
            <Link to="/messages" style={{ color: "black" }} onClick={()=>setTab("/messages")} >
        {tab === "/messages" ? <ChatIcon  /> : <ChatOutlinedIcon />}

              
            </Link>
            <Link to="/notification" style={{ color: "black" }} onClick={()=>setTab("/notification")} >
        {tab === "/notification" ? <NotificationsIcon /> : <NotificationsNoneOutlinedIcon />}

              
            </Link>
            <Link to="/userProfilePage" style={{ color: "black" }} onClick={()=>setTab("/userProfilePage")} >
            {tab === "/userProfilePage" ? <AccountCircleIcon /> : <UserProfile />}

            
              
            </Link>
            <Link to="/logout" style={{ color: "black" }} onClick={()=>setTab("/logout")} >
              <LogoutIcon />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Header;
