import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux"
import bg from "../../../Images/bg2.jpg";
import { useAlert } from "react-alert"
import "./Login.css"
import { loginUser } from "../../../Actions/User";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showpass, setShowpass] = useState(false);
    const dispatch = useDispatch();
  const alert = useAlert();

  const { error } = useSelector((state) => state.user);
  const { message } = useSelector((state) => state.like);

    const loginHandler = (e) => {
        e.preventDefault();
    dispatch(loginUser(email, password));

    };
    useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch({ type: "clearErrors" });
        }
        if (message) {
          alert.success(message);
          dispatch({ type: "clearMessage" });
        }
      }, [alert, error, dispatch, message]);

    return (
        <div className='login' style={{ backgroundImage: `url(${bg})` }}>
            <div className="login-container">
                <h3 className="login-header">Travelista</h3>
                <h6 className="login-subheader">Login</h6>
                <form className="loginForm" onSubmit={loginHandler}>
                    <div className='login-dataform'>
                        <input
                            className='login-dataform-email'
                            type="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            className='login-dataform-password'
                            name="password"
                            value={password}
                            type={showpass ? "type" : "password"}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password' />
                        <small className='login-show-pass' onClick={() => setShowpass(!showpass)}> {showpass ? "Hide" : "Show"}</small>
                        <Link to="/forgot/password">
                            <Typography>Forgot Password?</Typography>
                        </Link>

                        <button className='login-dataform-button' type='submit'>Log In</button>


                        <small className='dont-have-acc'>Do not have account <Link to="/register">Create HERE</Link></small>
                    </div>
                </form>

            </div>
        </div>
    );
}
