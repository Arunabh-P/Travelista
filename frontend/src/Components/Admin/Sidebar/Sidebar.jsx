import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import wave from "../../../Images/wave.gif"
import "./Sidebar.css"

function Sidebar() {
  const { admin } = useSelector((state) => state.admin);
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
        </div>
      </div>
      <div className='user-followers-list d-none d-md-block'>
        <h4>{date}!</h4>
        <img src={wave} className="pt-3  wave-card" alt="wave" />
      </div>
    </div>
  )
}

export default Sidebar