import React, { useState, useEffect } from 'react'
import "./ChatOnline.css"
import profilePic from "../../../Images/profilePic.jpeg"
import axios from "axios"
import { useSelector } from "react-redux"


function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const { user, loading: userLoading } = useSelector((state) => state.user);


  useEffect(() => {
    const getFriends = async () => {
      const { data } = await axios.get(`/api/v1/user/${currentId}`)
      setFriends(data.user.following);

    }
    getFriends()
  }, [currentId])

  const handleClick = async (user) => {
    try {
      const { data } = await axios.get(`/api/v1/conversation/find/${currentId}/${user._id}`)
      setCurrentChat(data)
    } catch (err) {
      console.log(err);

    }
  }
  return (
    <>
      <div className="chatOnline">
<p>Online Users</p>
        {
        onlineUsers&&onlineUsers.length>0?(
          
        onlineUsers?.map((o) => (
          <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
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
        ))
        ):(
          <p>Oops..everyone is having a break time!</p>
        )
        }
      </div>
      <div>
        <div className="chatOnline">
          <p>Connections</p>
          {
            user && user.following.length > 0 ? user.following.map((follow) => ((
              <div className="chatOnlineFriend" onClick={() => handleClick(follow)}>
                
                <div className="chatOnlineImgContainer">
                  <img
                    className="chatOnlineImg"
                    src={follow.avatar.url}
                    alt=""
                  />
                </div>
                <span className="chatOnlineName">{follow.name}</span>
              </div>
            ))
            ) : (
              <p style={{ margin: "2vmax" }}> You're not following anyone</p>
            )}
        </div>

      </div>
    </>

  )
}


export default ChatOnline