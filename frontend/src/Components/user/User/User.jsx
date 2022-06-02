import React, { useState } from 'react';
import { Button} from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import { followAndUnFollowUser, getUserProfile } from '../../../Actions/User';
import { Link, useParams } from 'react-router-dom';

import { Typography } from "@mui/material"
import "./all-users-list.css"
function User({ userId, name, avatar }) {
    return (
        <>
            <div className="row d-flex ">
                <div className="col-8">
                <Link to={`/user/${userId}`} className="users-home-list">
            <img src={avatar} alt={name} />
            <Typography>{name}</Typography>
            </Link>
                </div>
            </div>
            </>



    )
}

export default User