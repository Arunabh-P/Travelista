import React, { useState,useEffect } from 'react'
import "./ChatOnline.css"
import profilePic from "../../../Images/profilePic.jpeg"
import axios from "axios"


function ChatOnline({onlineUsers, currentId, setCurrentChat }) {
  const[friends, setFriends]=useState([]);
  const[onlineFriends, setOnlineFriends]=useState([]);
  console.log(currentId,"currrrentiddddddddddd");

  useEffect(()=>{
    const getFriends = async () => {
      const { data } = await axios.get(`/api/v1/user/${currentId}`)
      setFriends(data.user.following);

    }
    getFriends()
  },[currentId])

const handleClick = async (user) =>{
try {
  const {data} = await axios.get (`/api/v1/conversation/find/${currentId}/${user._id}`)
  setCurrentChat(data)
} catch (err) {
  console.log(err);
  
}
}
console.log(onlineUsers,"haiiiiiiiiiiiiiiiiiiiiiiiii");
  return (
    <div className="chatOnline">
      {onlineUsers?.map((o)=>(
        <div className="chatOnlineFriend" onClick={()=>handleClick(o)}>
        <div className="chatOnlineImgContainer">
        <img
              className="chatOnlineImg"
              src={o?.avatar.url}
              alt=""
            />
            <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">{o?.name}</span>
    </div>
    ))}
    </div>

  )
}






export default ChatOnline