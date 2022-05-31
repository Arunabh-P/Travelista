import React from 'react'
import "./FollowersStories.css"
import { Avatar } from "@nextui-org/react";

function FollowersStories({ image, profilePic, title }) {
    return (
        <div className="story-list">
            <div
                style={{ backgroundImage: `url(${image})` }}
                className="followers-all-stories"
            >
                <Avatar
                    size="lg"
                    className="story-follower-avatar"
                    src={profilePic}
                    color="gradient"
                    bordered
                />
                <h4 className="story-follower-name">{title}</h4>
            </div>
        </div>
    )
}

export default FollowersStories