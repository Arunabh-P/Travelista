import React, { useEffect, useState } from 'react'
import { Avatar } from '@mui/material'
import { useSelector } from "react-redux"
import cover from "../../../../../Images/cover.jpg"
import widget from "../../../../../Images/widget.gif"
import wave from "../../../../../Images/wave.gif"
import "./UserCard.css"

function UserCard() {
  const { user } = useSelector((state) => state.user);
  const [date, setDate] = useState('')

  function getDate() {
    let date = new Date()
    let hours = date.getHours()
    if (hours > 0 && hours < 12) {
      setDate('Good Morning')
    }
    else if (hours >= 12 && hours < 16) {
      setDate('Good Afternoon')
    } else if (hours >= 16 && hours < 21) {
      setDate('Good Evening')
    }
    else if (hours >= 21 && hours < 24) {
      setDate('Good Night')
    }
  }

  useEffect(() => {
    getDate()
  }, [])

  return (
    <div className='user-card-for-side '>
      <div className='user-card'>
        <div className='user-card-top'>
          <img src={user.coverImage ? user.coverImage.url : cover} alt="cover" />
          <Avatar src={user.avatar.url} className='user-card-avatar' />
          <h2 style={{ textTransform: "capitalize" }}>{user.name}</h2>
          <h4 style={{ textTransform: "capitalize" }}>{user.bio}</h4>
        </div>
      </div>
      <div className='user-followers-list d-none d-md-block'>
        <img src={widget} className="pt-3 widget-card" alt="widget" />
        <h3 className="pt-3">Hi <span style={{ textTransform: "capitalize" }}>{user.name},</span></h3>
        <h4>{date}!</h4>
        <img src={wave} className="pt-3  wave-card" alt="wave" />
      </div>
    </div>
  )
}

export default UserCard