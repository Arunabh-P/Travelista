import "./UpdateProfile.css"
import { useAlert } from "react-alert";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import bg from "../../../Images/bg2.jpg";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import { FormControl } from "react-bootstrap";
import CropImage from "../../user/ProfilePicCropper/CropImage"
import update from "../../../../src/Images/update.png"
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

  const dispatch = useDispatch()
  const alert = useAlert();

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
    <div className='update' >
      <div className="update-profile-headline p-5">

<h3>Update Profile</h3>
</div>
      <div className="container mb-4 ">
        <form onSubmit={submitHandler} >
          <div className='update-dataform'>
            <div className="row update-row p-4 rounded">
              
              <div className="col-md-6 update-img p-5">

                <FormControl
                  className="crop_image d-none"
                  id="upload_image"
                  type="file"
                  name="crop_image"
                  onChange={(e) => {
                    setCropImage(e.target.files[0]);
                    setShowCropper(true);
                  }}
                  accept=".jpg,.jpeg,.png,"
                />
                <label for="upload_image">
                  <span class="profilepic__icon">
                    <Avatar className="update-avatar"
                      src={avatar ? avatar : avatarPrev}
                      value={avatarPrev}
                      alt="User"
                      sx={{ height: "12.5rem", width: "12.5rem" }}
                    />
                  </span>

                </label>
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
              </div>
              <div className="col-md-6 p-5">
                <div className="update-texts-pro">

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

                

              </div>

            </div>

          </div>
        </form>

      </div >

    </div >
  );
}
