import { Avatar } from '@mui/material'
import React from 'react'
import './SideBar.css'
import cover from "../../../../Images/cover.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from "../../../../Images/profilePic.jpeg"


function SideBar() {
  return (
     <div className='sidebar  d-md-block'>
       <div className='Sidebar_top'>
         <img src={cover} alt="here cover image" />
         <Avatar src={profilePic} className='sidebar_avatar'/>
         <h2>Arunabh</h2>
         <h4>Solo Traveler</h4>
       </div>
       <div className="sidebar_bottom">
       <p>Find Travel Partner</p>
     </div>
     </div>
  )
}
 
export default SideBar