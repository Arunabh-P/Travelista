import React ,{useState, useEffect} from 'react'
import "./NewPost.css"
import { Button, Dialog, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import { createNewPost } from '../../../Actions/Post';
import { useAlert } from "react-alert"
import {loadUser} from "../../../Actions/User"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function NewPost() {

  const [image, setImage] = useState(null);
  const [caption,  setCaption] = useState("")
  const [tripDate,  setTripDate] = useState("")


  
  const dispatch = useDispatch()
  const alert = useAlert();


  const {loading,error, message} = useSelector((state) => state.like)

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if(Reader.readyState === 2){
        setImage(Reader.result)
      }
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    await dispatch(createNewPost(caption,image,tripDate))
    dispatch(loadUser());


  }
  useEffect(() => {

    if(error) {
      alert.error(error);
      dispatch({ type : "clearErrors"})
    }

    if(message) {
      alert.success(message);
      dispatch({ type : "clearErrors"})
    }
   
  }, [dispatch, error, message, alert])
  

  return (
<div className="newPost">
  <form className="newPostForm" onSubmit={submitHandler}>
    <Typography varient="h3">New Post</Typography>
    {image && <img src={image} alt="postImage" />}
    <input type="file" accept="image/*" 
    onChange={handleImageChange}
     />
    <input
     type="text"
      placeholder='Caption...'
      value={caption}
      onChange={(e) => setCaption(e.target.value)}
       />
       <input type="date" value={tripDate} onChange={(e) => setTripDate(e.target.value)} />

    <Button disabled={loading} type="submit">Post</Button>
  </form>
</div>
    )
}

export default NewPost