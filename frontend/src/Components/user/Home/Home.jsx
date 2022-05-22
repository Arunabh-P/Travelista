import React from 'react'
import User from '../User/User'
import Post from '../Post/Post'
import "./Home.css"
import profilePic from "../../../Images/profilePic.jpeg"
function Home() {
  return (
    <div className='home'>
        <div className="homeleft">
          <Post />
         
            
        </div>
        <div className="homeright">
        <User 
          userId={"user._id"}
          name={"Arunabh"}
          avatar={profilePic}
          />
          
        </div>
    </div>
  )
}

export default Home