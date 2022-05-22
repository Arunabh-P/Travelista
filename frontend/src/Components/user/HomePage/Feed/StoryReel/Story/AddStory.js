import React from 'react'
import "./AddStory.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import profilePic from "../../../../../../Images/profilePic.jpeg"
function AddStory({image}) {
    return (
      <div className='border add-story-main   me-3 p-0'>
          <div style={{backgroundImage:`url(${profilePic})`}} className='addstory m-0 p-0 sh col-12 mb-auto' >
          </div>
          <div className=' p-3 d-flex justify-content-center plusButton' ><AddCircleOutlineRoundedIcon 
          sx={{ fontSize: 50 }}
          className='bg-white rounded-circle p-2' /></div>
      </div>
    )
  }

export default AddStory