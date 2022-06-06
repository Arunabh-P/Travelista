import React from 'react'
import "./Conversation.css"
import profilePic from "../../../Images/profilePic.jpeg"
function Conversation() {
  return (
    <div className="conversation">
        <img className="conversationImg" src={profilePic} alt="" />
        <span className="conversationName">Arunabh</span>
    </div>
  )
}

export default Conversation