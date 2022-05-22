import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./signupAndLogin.css";

import { MDBNavbar, MDBContainer, MDBBtn } from "mdb-react-ui-kit";

function SignInHeader() {
  return (
    <MDBNavbar light style={{ boxShadow: "none" }}>
      <MDBContainer className="pt-2">
        <h1 className="logo">Travelista</h1>
        <form className="d-flex input-group w-auto">
          <p className="navbar-brand">Don't have an account?</p>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <MDBBtn className="loginsignInbtn" outline color="dark">
              Signup
            </MDBBtn>
          </Link>
        </form>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default SignInHeader;
