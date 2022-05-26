import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux"
import bg from "../../../Images/bg2.jpg";
import { useAlert } from "react-alert"
import { resetPassword, updatePassword } from "../../../Actions/User";
import "./ResetPassword.css"

function ResetPassword() {
    const [newPassword, setNewPassword] = useState("");
    const [showNewpassword, setShowNewpassword] = useState(false);
    const dispatch = useDispatch();
    const alert = useAlert();
    const params = useParams();
    const { error, loading, message } = useSelector((state) => state.like);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(resetPassword(params.token, newPassword))

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
    }, [dispatch, error, alert, message]);
    return (
        <div className='reset-password' style={{ backgroundImage: `url(${bg})` }}>
            <div className="reset-password-container">
                <h3 className="reset-password-header">Travelista</h3>

                <form className="reset-passwordForm" onSubmit={submitHandler} >
                    <div className='reset-password-dataform'>





                        <input
                            className='reset-password-dataform-password'
                            name="password"
                            value={newPassword}
                            type={showNewpassword ? "type" : "password"}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder='New Password'
                        />

                        <small className='reset-password-show-pass' onClick={() => setShowNewpassword(!showNewpassword)}> {showNewpassword ? "Hide" : "Show"}</small>
                        <Link to="/forgot/password">
                            <Typography> Request another token</Typography>
                        </Link>
                        <Link to="/">
                            <Typography> Go back to Login Page</Typography>
                        </Link>
                        <button disabled={loading} className='reset-password-dataform-button' type='submit'>Resest Password</button>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default ResetPassword