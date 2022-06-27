import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { followAndUnFollowUser, getUserPosts, getUserProfile } from '../../../Actions/User';
import Post from '../Post/Post';
import User from "../User/User"
import { Avatar } from '@mantine/core';
import { Button, Dialog, Typography } from "@mui/material";
import { useParams } from 'react-router-dom';
import { Container } from "react-bootstrap"
import cover from "../../../Images/cover.jpg"
import { useAlert } from 'react-alert';
import './UserProfile.css'

function UserProfile() {
    const dispatch = useDispatch()
    const alert = useAlert()
    const { user, error: userError } = useSelector((state) => state.userProfile);
    const { user: me } = useSelector((state) => state.user)
    const { error, posts } = useSelector((state) => state.userPosts);
    const {
        error: followError,
        message,
        loading: followLoading,
    } = useSelector((state) => state.like);
    const params = useParams();
    const [followersToggle, setFollowersToggle] = useState(false)
    const [followingToggle, setFollowingToggle] = useState(false)
    const [following, setFollowing] = useState(false);
    const [myProfile, setMyProfile] = useState(false);

    const followHandler = async () => {
        setFollowing(!following)
        await dispatch(followAndUnFollowUser(user._id))
        dispatch(getUserProfile(params.id));
    }

    useEffect(() => {
        dispatch(getUserPosts(params.id));
        dispatch(getUserProfile(params.id));
    }, [dispatch, params.id]);

    useEffect(() => {
        if (me._id === params.id) {
            setMyProfile(true)
        }
        if (user) {
            user.followers.forEach((item) => {
                if (item._id === me._id) {
                    setFollowing(true)
                } else {
                    setFollowing(false);
                }
            })
        }
    }, [user, me._id, params.id,])

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch({ type: "clearErrors" });
        }
        if (followError) {
            alert.error(followError);
            dispatch({ type: "clearErrors" });
        }
        if (userError) {
            alert.error(userError);
            dispatch({ type: "clearErrors" });
        }
        if (message) {
            alert.success(message);
            dispatch({ type: "clearMessage" });
        }
    }, [alert, error, message, followError, userError, dispatch]);

    return (
        <div className="user-profile-full-body">
            <Container>
                <div className='user-profile-page-inside'>
                    <div className='user-profile-page-top-section'>
                        {user && (
                            <>
                                <img src={cover} alt="*here cover image" />
                                <div className='user-profile-pageTopSec'>
                                    <Avatar radius="xl" src={user.avatar.url} className='user-page-top-avatar' style={{ width: "130px", height: "130px" }} />
                                </div>
                                <div className='d-md-flex justify-content-between'>
                                    <div>
                                        <h2 className='user-profile-page-profile-name'>{user.name}</h2>
                                        <h4 className='user-profile-page-profile-cat'>{user.bio}</h4>
                                    </div>
                                    <div  >
                                        <Button onClick={() => setFollowersToggle(!followersToggle)}>
                                            <Typography>Followers</Typography>
                                        </Button>
                                        <Typography className='text-center' >{user.followers.length}</Typography>
                                    </div>
                                    <div>
                                        <Button onClick={() => setFollowingToggle(!followingToggle)}>
                                            <Typography>Following</Typography>
                                        </Button>
                                        <Typography className='text-center'>{user.following.length}</Typography>
                                    </div>
                                    <div>
                                        <Button>
                                            <Typography>Posts</Typography>
                                        </Button>
                                        <Typography className='text-center'>{user.posts.length}</Typography>
                                    </div>
                                    {
                                        myProfile ? null : (
                                            <Button variant="contained"
                                                style={{ background: following ? "red" : "green", marginRight: " 25px" }}
                                                onClick={followHandler}
                                                disabled={followLoading}
                                                className="follow-button-in-user-profile"
                                            >
                                                {
                                                    following ? "Unfollow" : "Follow"
                                                }
                                            </Button>
                                        )
                                    }
                                    <Dialog open={followersToggle} onClose={() => setFollowersToggle(!followersToggle)}>
                                        <div className="DialogBox">
                                            <Typography variant="h4">Followers</Typography>
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
                                    </Dialog>
                                    <Dialog open={followingToggle} onClose={() => setFollowingToggle(!followingToggle)}>
                                        <div className="DialogBox">
                                            <Typography variant="h4">Following</Typography>
                                            {
                                                user && user.following.length > 0 ? user.following.map((follow) => ((
                                                    <User
                                                        key={follow._id}
                                                        userId={follow._id}
                                                        name={follow.name}
                                                        avatar={follow.avatar.url}
                                                    />
                                                ))
                                                ) : (
                                                    <Typography style={{ margin: "2vmax" }}> You're not following anyone</Typography>
                                                )}
                                        </div>
                                    </Dialog>
                                </div>
                            </>
                        )}
                    </div>
                    <div className='row'>
                        {posts && posts.length > 0 ? (
                            posts.map((post) => (
                                <div className='col-12 col-md-6' >
                                    <Post
                                        className="samplepost"
                                        key={post._id}
                                        host={post.host}
                                        buddy={post.buddy}
                                        postId={post._id}
                                        caption={post.caption}
                                        postImage={post.image.url}
                                        tripDate={post.tripDate}
                                        createdAt={post.createdAt}
                                        likes={post.likes}
                                        comments={post.comments}
                                        ownerImage={post.owner.avatar.url}
                                        ownerName={post.owner.name}
                                        ownerId={post.owner._id}
                                        width={'100%'}
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="no-post-profile bg-white col ">

                                <p className='text-center '>User has not made any post.</p>
                            </div>
                        )}

                    </div>
                    <div className="bg-white ">

                        <p className='text-center p-2'>Copyright ©2022 travalista.online All Rights Reserved.</p>
                    </div>
                </div>
            </Container>
        </div >
    )
}

export default UserProfile