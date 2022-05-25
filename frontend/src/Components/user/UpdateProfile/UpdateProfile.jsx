import "./UpdateProfile.css"
import { useAlert } from "react-alert";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bg from "../../../Images/bg2.jpg";
import { Avatar, Typography, Button, IconButton, Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import {loadUser, registerUser, updateProfileUser} from "../../../Actions/User"

export default function UpdateProfile() {

  const {loading, error, user} =useSelector((state) => state.user)
  const {loading: updateLoading,
     error: updateError,
     message
    } =useSelector((state) => state.like)


    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [avatar, setAvatar] = useState("");
    const [avatarPrev, setAvatarPrev] = useState(user.avatar.url);



  const dispatch = useDispatch()
  const alert = useAlert();




    const handleImageChange = (e) => {
        const file = e.target.files[0];

        const Reader = new FileReader();
        Reader.readAsDataURL(file);

        Reader.onload = () => {
            if (Reader.readyState === 2) {
                setAvatarPrev(Reader.result)

                setAvatar(Reader.result)
            }
        }
    }


    const submitHandler = async (e) => {
        e.preventDefault();
        await dispatch(updateProfileUser(name, email, avatar))
        dispatch(loadUser())
    }

    useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch({ type: "clearErrors" });
        }
    
        if (updateError) {
          alert.error(updateError);
          dispatch({ type: "clearErrors" });
        }
    
        if (message) {
          alert.success(message);
          dispatch({ type: "clearMessage" });
        }
      }, [dispatch, error, alert, updateError, message]);


    return (
        <div className='update' style={{ backgroundImage: `url(${bg})` }}>
            <div className="update-container">
                <h6 className="update-subheader">Update Profile</h6>
                <form onSubmit={submitHandler} >
                    <div className='update-dataform'>

                        <Avatar className="update-avatar"
                            src={avatarPrev}
                            alt="User"
                            sx={{ height: "5vmax", width: "5vmax" }}
                        />

                        <input className="update-image-button" 
                        type="file" accept="image/*"
                        onChange={handleImageChange}
                        
                        />

                        <input
                            className='update-dataform-email'
                            type="text"
                            placeholder="Name"
                            required
                        value={name}
                          onChange={(e) => setName(e.target.value)}


                        />
                        <input
                            className='update-dataform-email'
                            type="email"
                            placeholder="Email"
                            required
                        value={email}
                          onChange={(e) => setEmail(e.target.value)}


                        />

                       




                        <button disabled={updateLoading} className='update-dataform-button' type='submit'>Update</button>


                    </div>
                </form>

            </div>
        </div>
    );
}
