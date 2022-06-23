import React from 'react'
import "./ChatOnline.css"
import axios from "axios"
import { useSelector } from "react-redux"
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {

  const { user } = useSelector((state) => state.user);
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
        <p className="text-on-online">Online Users</p>
        {
          onlineUsers && onlineUsers.length > 0 ? (
            onlineUsers?.map((o) => (
              <div className="chatOnlineFriend" key={o._id} onClick={() => handleClick(o)}>
                <div className="chatOnlineImgContainer">
                  <img
                    className="chatOnlineImg"
                    src={o?.avatar.url}
                    alt="online friend avatar"
                  />
                  <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">{o?.name}</span>
              </div>
            ))
          ) : (
            <p style={{ color: "rgb(118, 118, 124)" }}><SentimentDissatisfiedIcon /> <span className='no-one-online'>Oops.. everyone is having a break time!</span> </p>
          )
        }
      </div>
      <div>
        <div className="chatOnline">
          <p className="text-on-online mt-2">Friends list</p>
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