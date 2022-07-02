import React from 'react';
import { Link } from 'react-router-dom';

import { Typography } from "@mui/material"
import "./all-users-list.css"
function User({ userId, name, avatar }) {
    return (
        <>
            <div className="row d-flex ">
                <div className="col-8">
                    <Link to={`/user/${userId}`} className="users-home-list">
                        <img src={avatar} alt={name} />
                        <Typography className="user-name-text">{name}</Typography>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default User