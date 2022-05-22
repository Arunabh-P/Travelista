import React from "react";
import CommonHeader from "../Header/CommonHeader";
import Secret from "../Secret";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar/SideBar" 
import Feed from "./Feed/Feed"
import "./Home.css"
import {Col, Container, Row} from "react-bootstrap"

import Widgets from "./Widgets/Widgets"

function Home() {
  const [name, setName] = useState("user");
  const [date, setDate] = useState("");
  let navigate = useNavigate();
  function getDate() {
    let date = new Date();
    let hours = date.getHours();
    if (hours > 0 && hours < 12) {
      setDate("Good Morning");
    } else if (hours >= 12 && hours < 18) {
      setDate("Good Afternoon");
    } else if (hours >= 18 && hours < 24) {
      setDate("Good Night");
    }
  }

  useEffect(() => {
    getDate();
    const userInfo = localStorage.getItem("userInfo");
    const info = JSON.parse(userInfo);
    console.log(userInfo);
    setName(info ? info.data.name : "user");
    if (userInfo) {
      navigate("/");
    } else {
      navigate("/");
    }
  }, [navigate]);
  return (
    
      <div className=" w-100 home-container-full" style={{width:"100%"}}>
      <Container style={{width:"90%"}} className="mx-auto " fluid>
        <Row className="mx-auto ">
          <Col lg={2}  className="d-md-none d-lg-block">
          <SideBar className="HomeSideBar" />

          </Col>
          <Col lg={7} className="mx-auto">
          <Feed className="HomeFeed" />

          </Col>
          <Col lg={2}  className="d-md-none d-lg-block mx-auto">
          <Widgets className="HomeWidgets" />

          </Col>
        </Row>
      {/* <div className="app">
      <div className="app_body">
        
      </div>
      </div> */}
      </Container>
      </div>
  );
}

export default Home;
