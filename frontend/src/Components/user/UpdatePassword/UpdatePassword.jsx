import "./UpdatePassword.css"
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useAlert } from "react-alert"
import { updatePassword } from "../../../Actions/User";
import password from "../../../../src/Images/password.png"
import Header from "../Header/CommonHeader"

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

    <>
      <Header />
      <div className='update-password' >
        <div className="update-profile-headline p-5">
          <h3>Update Password</h3>
        </div>
        <div className="container mb-4 bg-white ">
          <div className='update-dataform'>
            <div className="row update-row p-4 rounded">
              <div className="col-md-6 update-img p-5">
                <img src={password} className="image-pass-update" alt="" />
              </div>
              <div className="col-md-6 p-5">
                <form className="update-passwordForm" onSubmit={submitHandler} >
                  <div className='update-password-dataform'>
                    <div className="bg-color row-up-pass w-100 row">
                      <div className="col-10 col-md-9 col-lg-10">
                        <input
                          className='update-password-dataform-password py-0'
                          name="password"
                          value={oldPassword}
                          type={showOldpassword ? "type" : "password"}
                          onChange={(e) => setOldPassword(e.target.value)}
                          placeholder='Old Password'
                        />
                      </div>
                      <div className="col-2 col-md-3 col-lg-2 d-flex align-items-center">
                        <small className='update-password-show-old-password' onClick={() => setShowOldpassword(!showOldpassword)}> {showOldpassword ? "Hide" : "Show"}</small>
                      </div>
                    </div>
                    <div className="bg-color row-up-pass w-100 row mt-1">
                      <div className="col-10 col-md-9 col-lg-10">
                        <input
                          className='update-password-dataform-password py-0'
                          name="password"
                          value={newPassword}
                          type={showNewpassword ? "type" : "password"}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder='New Password'
                        />
                      </div>
                      <div className="col-2 col-md-3 col-lg-2 d-flex align-items-center">
                        <small className='update-password-show-pass' onClick={() => setShowNewpassword(!showNewpassword)}> {showNewpassword ? "Hide" : "Show"}</small>
                      </div>
                    </div>
                    <div className="w-100">
                      <button className='update-password-dataform-button w-100' disabled={loading} type='submit'>Change Password</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div >
      </div >
    </>

  )
}

export default UpdatePassword