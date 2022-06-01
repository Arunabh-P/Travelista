import React, { useState } from 'react';
import { Button} from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import { followAndUnFollowUser, getUserProfile } from '../../../Actions/User';
import { Link, useParams } from 'react-router-dom';

import { Typography } from "@mui/material"
import "./all-users-list.css"
function User({ userId, name, avatar }) {
    const [myProfile, setMyProfile] = useState(false);
    const [following, setFollowing] = useState(false);
    const { user, loading: userLoading, error: userError } = useSelector((state) => state.userProfile);
    const { user: me } = useSelector((state) => state.user)
    const {
        error: followError,
        message,
        loading: followLoading,
    } = useSelector((state) => state.like);
    const dispatch = useDispatch()
    const params = useParams();

    const followHandler = async () => {
        setFollowing(!following)
        await dispatch(followAndUnFollowUser(user._id))
        dispatch(getUserProfile(params.id));

    }

    return (
        <>
            <div className="row d-flex ">
                <div className="col-8">
                <Link to={`/user/${userId}`} className="users-home-list">
            <img src={avatar} alt={name} />
            <Typography>{name}</Typography>
            </Link>
                </div>
                <div className="col-4 my-auto">
                {
                myProfile ? null : (
                    <Button variant="contained"
                        style={{ background: following ? "red" : "green", height:"24px", width:"1rem" , fontSize: "small" ,textTransform:"capitalize" }}
                        onClick={followHandler}
                        disabled={followLoading}
                        className="follow-button-in-user-profile my-auto"
                    >
                        {
                            following ? "Unfollow" : "Follow"
                        }
                    </Button>
                )
            }
            </div>
            
       

           
            </div>
            </>



    )
}

export default User