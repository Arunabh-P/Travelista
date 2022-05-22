import React from 'react'
import "./Cover.css"
// import { Avatar } from '@mui/material'
import cover from "../../../../Images/cover.jpg"
import profilePic from "../../../../Images/profilePic.jpeg"
import { Avatar, AvatarsGroup,Button } from '@mantine/core';

function Cover() {
  return (
    <div>
        <>
     <div className='CoverPage '>
       <div className='CoverPage_top'>
         <img src={cover} alt="*here cover image" />
         <div className='coverTopSec'>
         <Avatar radius="xl" src={profilePic} className='CoverPage_avatar' style={{width:"130px",height:"130px"}}/>
         <Button variant="outline" color="dark" radius="xl" className='buttonCover'>
      Edit Profile
    </Button>
         </div>
         <h2>Arunabh</h2>
         <h4>Solo Traveler</h4>
        <div className='coverBottomItems'>
         <AvatarsGroup limit={2}>
      <Avatar src="avatar.png" component="a" />
      <Avatar src="avatar.png" />
      <Avatar src="avatar.png" />
      <Avatar src="avatar.png" />
      <Avatar src="avatar.png" />
      <Avatar src="avatar.png" />
      <Avatar src="avatar.png" />
      <Avatar src="avatar.png" />
      <Avatar src="avatar.png" />
    </AvatarsGroup>
<p className='connection'>Connections</p>
        </div>
       </div>
      
     </div>
     
     </>
    </div>
  )
}

export default Cover