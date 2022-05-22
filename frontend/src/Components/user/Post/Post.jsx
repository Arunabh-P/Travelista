import React, { useEffect } from "react";
import "./Post.css"
import { Avatar, Button, Typography, Dialog } from "@mui/material";
import {
    MoreVert,
    Favorite,
    FavoriteBorder,
    ChatBubbleOutline,
    DeleteOutline,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function Post({
    postId,
    caption,
    postImage,
    likes = [],
    commments = [],
    ownerImage,
    ownerName,
    ownerId,
    IsDelete = false,
    isAccount = false
}) {
    return (
        <div className="post">
            <div className="postHeader"></div>
            <img src={postImage} alt="Post" />

            <div className="postDetails">
                <Avatar src={ownerImage} alt="user"
                    sz={{
                        height: "3vmax",
                        width: "3vmax"
                    }}
                />

                <Link to={`/user/${ownerId}`}>
                    <Typography fontWeight={700}>{ownerName}</Typography>
                </Link>
                <Typography
                    fontWeight={100}
                    color="rgba(0, 0, 0, 0.582)"
                    style={{ alignSelf: "center" }}
                >
                    {caption}
                </Typography>

            </div>

        </div>
    )
}

export default Post