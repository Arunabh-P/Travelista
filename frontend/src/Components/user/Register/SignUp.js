import React, {useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useForm } from "react-hook-form";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import SignupHeader from "../Header/SignupHeader";
import sign from "../../../Images/sign.png";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import bg from "../../../Images/bg2.jpg";
import "./signup.css"
import { InputLabel, MenuItem, Select } from "@mui/material"


const theme = createTheme();

export default function SignUp() {
  const [showpass, setShowpass] = useState(false)
  const [showConfirmpass, setShowConfirmpass] = useState(false)
  const navigate = useNavigate();
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = React.useState({});

  const submitForm = (data) => {
    axios
      .post(`/users/signup`, data)
      .then((res) => {
        swal("Registered Successfully!", "success").then(() => {
          navigate("/login");
        });
      })
      .catch((err) => {
        setError({
          ...error,
          status: true,
          message: err.response.data.message,
        });
        setTimeout(() => {
          setError({ ...error, status: false });
        }, 2000);
      });
  };

  return (
    <div className='register' style={{ backgroundImage: `url(${bg})` }}>
      <div className="register-container">
      <h3 className="register-header">Travelista</h3>
        <h6 className="register-subheader">Sign up</h6>
        <div className='register-dataform'>


        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {error.status && (
                  <Alert severity="error" sx={{ mt: 2 }}>
                    {error.message ? error.message : "Email already Exists"}
                  </Alert>
                )}

                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit(submitForm)}
                >
    

        
        <TextField
        className=" mb-1"
                        autoComplete="given-name"
                        name="name"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        autoFocus
                        {...register("name", {
                          required: "This field cannot be blank",
                          validate: {
                            nospace: (value) => {
                              if (value[0] !== " ") return true;
                              else return "First letter should not be space";
                            },
                            nospecial: (value) => {
                              var hasNumber = /\d/;
                              if (hasNumber.test(value))
                                return "Should contain letters only";
                              else return true;
                            },
                          },
                        })}
                        error={!!errors?.name}
                        helperText={errors?.name ? errors?.name.message : ""}
                      />
                      

                      <TextField
        className=" mb-1"
                        autoComplete="given-name"
                        name="username"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        autoFocus
                        {...register("username", {
                          required: "This field cannot be blank",
                          validate: {
                            nospace: (value) => {
                              if (value[0] !== " ") return true;
                              else return "First letter should not be space";
                            },
                            nospecial: (value) => {
                              var hasNumber = /\d/;
                              if (hasNumber.test(value))
                                return "Should contain letters only";
                              else return true;
                            },
                          },
                        })}
                        error={!!errors?.username}
                        helperText={errors?.username ? errors?.username.message : ""}
                      />
                      <TextField
                       className=" mb-1"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        error={!!errors?.email}
                        helperText={errors?.email ? errors.email.message : ""}
                      />

                      <TextField
                      className=" mb-1"
                        required
                        fullWidth
                        id="phone"
                        label="Phone Number"
                        name="phone"
                        autoComplete="phone"
                        {...register("phone", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                            message: "Invalid phone number",
                          },
                        })}
                        error={!!errors?.phone}
                        helperText={errors?.phone ? errors.phone.message : ""}
                      />

                      <TextField
                      className=" mb-1"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type={showpass ? "type" : "password"}
                        id="password"
                        autoComplete="new-password"
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 8,
                            message: "Minimum 8 letter required",
                          },
                        })}
                        error={!!errors?.password}
                        helperText={
                          errors?.password ? errors.password.message : ""
                        }
                      />
                      <small className='register-show-pass' onClick={() => setShowpass(!showpass)}> {showpass ? "Hide" : "Show"}</small>
                      <TextField
                        required
                        fullWidth
                        name="cpassword"
                        label="Confirm password"
                        type={showConfirmpass ? "type" : "password"}
                        id="cpassword"
                        autoComplete="new-password"
                        {...register("cpassword", {
                          required: "Password is required",
                          validate: {
                            matchpass: (value) => {
                              if (getValues().password === value) return true;
                              else return "Password should match";
                            },
                          },
                        })}
                        error={!!errors?.cpassword}
                        helperText={
                          errors?.cpassword ? errors.cpassword.message : ""
                        }
                      />
                       <small className='register-confirm-show-pass' onClick={() => setShowConfirmpass(!showConfirmpass)}> {showConfirmpass ? "Hide" : "Show"}</small>


<button className='register-dataform-button' type='submit'>Sign Up</button>
<br/>
<small className='alredy-hav-acc'>Already have an account <Link to="/login">LogIn HERE</Link></small>
                  
                  </Box>
              </Box>
            </Container>
          </ThemeProvider>
      </div>
      </div>
      </div>
  );
}
