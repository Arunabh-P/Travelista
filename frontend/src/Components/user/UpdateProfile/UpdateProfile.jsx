import "./UpdateProfile.css"
import { useAlert } from "react-alert";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import bg from "../../../Images/bg2.jpg";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import { FormControl } from "react-bootstrap";
import CropImage from "../../user/ProfilePicCropper/CropImage"

import {
  loadUser,
  updateProfileUser
} from "../../../Actions/User"

export default function UpdateProfile() {

  const { loading, error, user } = useSelector((state) => state.user)
  const { loading: updateLoading,
    error: updateError,
    message
  } = useSelector((state) => state.like)


  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio);


  const [avatar, setAvatar] = useState("");
  const [avatarPrev, setAvatarPrev] = useState(user.avatar.url);
  const [showCropper, setShowCropper] = useState(false);
  const [cropImage, setCropImage] = useState(false);
  const [image, setImage] = useState(null);
console.log(image);

  const dispatch = useDispatch()
  const alert = useAlert();
 const navigate = useNavigate()



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
    await dispatch(updateProfileUser(name, email, avatar, bio))
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
            <FormControl
              className="crop_image d-none"
              id="upload_image"
              type="file"
              name="crop_image"
              required
              onChange={(e) => {
                setCropImage(e.target.files[0]);
                setShowCropper(true);
              }}
              accept=".jpg,.jpeg,.png,"
            />
            <label for="upload_image">
              <span class="profilepic__icon">
              <Avatar className="update-avatar"
                src={avatar ? avatar :avatarPrev }
                value={avatarPrev}
                alt="User"
                sx={{ height: "5vmax", width: "5vmax" }}
              />
            </span>

          </label>

          {/* <input className="update-image-button"
              type="file" accept="image/*"
              onChange={handleImageChange}

            /> */}
          {showCropper && (
            <CropImage
              src={cropImage}
              imageCallback={(avatar) => {
                setAvatar(avatar);
                setShowCropper(false);
              }}
              closeHander={() => {
                setShowCropper(false);
              }}
            />
          )}

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
            type="text"
            placeholder="Bio"
            required
            value={bio}
            onChange={(e) => setBio(e.target.value)}


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

      </div >
    </div >
  );
}
