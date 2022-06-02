import React, { useEffect } from 'react'
import "./FollowersStories.css"
import { Avatar } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux"
import { Typography } from "@mui/material";
import { getAllUsers, getFollowingStories } from '../../../../Actions/User';
function FollowersStories() {

    const dispatch = useDispatch()
    const { loading, stories, error } = useSelector(
        (state) => state.storyOfFollowing
      );
      const { users, loading: usersLoading } = useSelector(
        (state) => state.allUsers
      )
    useEffect(() => {
        dispatch(getFollowingStories());
    dispatch(getAllUsers())

    }, [dispatch]);

console.log(stories,'--------------');
    
    return (
        <>
            {
            stories && stories.length > 0 ? (
                stories.map((story) => (
        <div className="story-list ">
           
           
                    <div
                style={{ backgroundImage: `url(${story.image.url})` }}
                className="followers-all-stories"
            >
                <div className="avatar-img">
                <Avatar
                    size="lg"
                    className="story-follower-avatar"
                    src={story.owner.avatar.url}
                    color="gradient"
                    bordered
                />
                </div>
                <h4 className="story-follower-name">{story.owner.name}</h4>
            </div>

        </div>

            ))
        ) : (
          <Typography variant='h6'>No stories yet</Typography>
        )
      }

    </>
    )
}

export default FollowersStories