import React from 'react'
import "./Message.css"
function Message({message,own}) {
  return (
    <div className={own ? "message own" : "message"}>
        <div className="messageTop">
            <img className="messageImg" src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <p className="messageText">hiii dear,React and Node.js Chat app using Socket.io and MongoDB. How to create MERN stack instant, private chat app. In this full tutorial, you will learn to use react</p>
        </div>
        <div className="messageBottom">One hour ago</div>
        </div>
  )
}

export default Message