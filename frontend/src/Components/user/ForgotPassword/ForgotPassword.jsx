import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux"
import bg from "../../../Images/bg2.jpg";
import { useAlert } from "react-alert"
import { forgotPassword, loginUser } from "../../../Actions/User";

import "./ForgotPassword.css"

function ForgotPassword() {
    const [email, setEmail] = useState("");

    const dispatch = useDispatch()
    const alert = useAlert();
    const { error, loading, message } = useSelector((state) => state.like);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(forgotPassword(email))
    }
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
        <div className='forgot-password' style={{ backgroundImage: `url(${bg})` }}>
            <div className="forgot-password-container">
                <h3 className="forgot-password-header">Travelista</h3>
                <form className="forgot-passwordForm" onSubmit={submitHandler}>
                    <div className='forgot-password-dataform'>
                        <input
                            className='forgot-password-dataform-email'
                            type="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button disabled={loading} className='forgot-password-dataform-button' type='submit'>Send</button>


                        <small className='dont-have-acc'> Back to Login Page ? <Link to="/">Click HERE</Link></small>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default ForgotPassword