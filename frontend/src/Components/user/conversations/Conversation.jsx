import React, { useState, useEffect } from 'react'
import "./Conversation.css"
import profilePic from "../../../Images/profilePic.jpeg"
import axios from 'axios'
function Conversation({conversation, currentUser}) {
  const [user,setUser] = useState(null)

  useEffect(()=>{
    const friendId = conversation.members.find(m=>m !== currentUser._id)
   
    const getUser = async () => {
      try {
        
        const {data} = await axios(`/api/v1/user/${friendId}`)
        setUser(data.user)
      } catch (err) {
        console.log(err);
      }
    }
    getUser()
  },[currentUser, conversation])
  return (
    <div className="conversation">
        <img className="conversationImg" src={user && user.avatar.url}  alt="" />
        <span className="conversationName">{user && user.name}</span>
    </div>
  )
}

export default Conversation