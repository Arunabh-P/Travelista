import { Avatar, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from "react-redux"
import User from "../../../User/User"
import cover from "../../../../../Images/cover.jpg"
import "./UserCard.css"
function UserCard() {
    const { user, loading: userLoading } = useSelector((state) => state.user);

    return (
        <div className='user-card-for-side '>
            <div className='user-card'>
                <div className='user-card-top'>
                    <img src={cover} alt="here cover image" />
                    <Avatar src={user.avatar.url} className='user-card-avatar' />
                    <h2>{user.name}</h2>
                    <h4>{user.bio}</h4>
                </div>
            </div>
            <div className='user-followers-list d-none d-md-block'>
                {
                    user && user.followers.length > 0 ? user.followers.map((follower) => ((
                        <User
                            key={follower._id}
                            userId={follower._id}
                            name={follower.name}
                            avatar={follower.avatar.url}
                        />
                    ))
                    ) : (
                        <Typography style={{ margin: "2vmax" }}> You have no followers</Typography>
                    )}
            </div>
        </div>
    )
}

export default UserCard