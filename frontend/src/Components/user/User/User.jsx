import React from 'react'
import { Link } from "react-router-dom"
import { Typography } from "@mui/material"
import "./all-users-list.css"
function User({ userId, name, avatar }) {
    return (
        <Link to={`/user/${userId}`} className="users-home-list">
            <img src={avatar} alt={name} />
            <Typography>{name}</Typography>

        </Link>
    )
}

export default User