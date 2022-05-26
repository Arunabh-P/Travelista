import "./UpdatePassword.css"
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux"
import bg from "../../../Images/bg2.jpg";
import { useAlert } from "react-alert"
import { updatePassword } from "../../../Actions/User";

function UpdatePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showNewpassword, setShowNewpassword] = useState(false);
  const [showOldpassword, setShowOldpassword] = useState(false);
  const dispatch = useDispatch();
  const alert = useAlert();
  const { error, loading, message } = useSelector((state) => state.like);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updatePassword(oldPassword, newPassword));

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
    <div className='update-password' style={{ backgroundImage: `url(${bg})` }}>
      <div className="update-password-container">
        <h3 className="update-password-header">Travelista</h3>

        <form className="update-passwordForm" onSubmit={submitHandler} >
          <div className='update-password-dataform'>

            <input
              className='update-password-dataform-password'
              name="password"
              value={oldPassword}
              type={showOldpassword ? "type" : "password"}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder='Old Password'
            />

            <small className='update-password-show-old-password' onClick={() => setShowOldpassword(!showOldpassword)}> {showOldpassword ? "Hide" : "Show"}</small>


            <input
              className='update-password-dataform-password'
              name="password"
              value={newPassword}
              type={showNewpassword ? "type" : "password"}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder='Old Password'
            />

            <small className='update-password-show-pass' onClick={() => setShowNewpassword(!showNewpassword)}> {showNewpassword ? "Hide" : "Show"}</small>

            <button className='update-password-dataform-button' disabled={loading} type='submit'>Change Pasword</button>

          </div>
        </form>

      </div>
    </div>
  )
}

export default UpdatePassword