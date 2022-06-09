import { useAlert } from "react-alert";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bg from "../../../Images/bg2.jpg";
import "./Register.css"
import { Avatar, Typography, Button, IconButton, Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from "../../../Actions/User"
import CropImage from "../ProfilePicCropper/CropImage";
import { FormControl } from "react-bootstrap";

export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState("");
    const [showCropper, setShowCropper] = useState(false);
    const [cropImage, setCropImage] = useState(false);

    const dispatch = useDispatch()
    const alert = useAlert();

    const { loading, error } = useSelector((state) => state.user)



    const handleImageChange = (e) => {
        const file = e.target.files[0];

        const Reader = new FileReader();
        Reader.readAsDataURL(file);

        Reader.onload = () => {
            if (Reader.readyState === 2) {
                setAvatar(Reader.result)
            }
        }
    }


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(registerUser(name, email, password, avatar))
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch({ type: "clearErrors" });
        }
    }, [dispatch, error, alert]);


    return (
        <div className='register' style={{ backgroundImage: `url(${bg})` }}>
            <div className="register-container">
                <h3 className="register-header">Travelista</h3>
                <h6 className="register-subheader">Register</h6>
                <form onSubmit={submitHandler} >
                    <div className='register-dataform'>

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
                        <Avatar className="reg-avatar"
                            src={avatar}
                            alt="User"
                            sx={{ height: "5vmax", width: "5vmax" }}
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

                        {/* <input className="register-image-button"
                            type="file" accept="image/*"
                            onChange={handleImageChange}

                        /> */}

                        <input
                            className='register-dataform-email'
                            type="text"
                            placeholder="Name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}


                        />
                        <input
                            className='register-dataform-email'
                            type="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}


                        />

                        <input
                            className='register-dataform-password'
                            type={"password"}
                            name="password"

                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                        />




                        <button disabled={loading} className='register-dataform-button' type='submit'>Register</button>


                        <small className='dont-have-acc'>Already have an account <Link to="/">Login HERE</Link></small>
                    </div>
                </form>

            </div>
        </div>
    );
}
