import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import {  getUserPosts, getUserProfile } from '../../../Actions/User';
import Loader from '../Loader/Loader';
import Post from '../Post/Post';
import User from "../User/User"
import { Avatar } from '@mantine/core';
import { Button, Dialog, Typography } from "@mui/material";
import { Link, useParams } from 'react-router-dom';
import { Container } from "react-bootstrap"
import cover from "../../../Images/cover.jpg"
import { useAlert } from 'react-alert';
import './UserProfile.css'

function UserProfile() {


    const dispatch = useDispatch()
    const alert = useAlert()
    const { user, loading: userLoading } = useSelector((state) => state.userProfile);
    const { user : me} = useSelector((state)=>state.user)
    const { loading, error, posts } = useSelector((state) => state.userPosts);
    const {
        error: likeError,
        message,
        loading: deleteLoading,
    } = useSelector((state) => state.like);
    const params = useParams();

    const [followersToggle, setFollowersToggle] = useState(false)
    const [followingToggle, setFollowingToggle] = useState(false)
    const [following, setFollowing] = useState(false);
    const [myProfile, setMyProfile] = useState(false);

    const followHandler = () => {
        setFollowing(!following)
    }

    useEffect(() => {
        dispatch(getUserPosts(params.id));
        dispatch(getUserProfile(params.id));
        if(me._id === params.id){
            setMyProfile(true)
        }
    }, [dispatch, params.id, me._id]);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch({ type: "clearErrors" });
        }

        if (likeError) {
            alert.error(likeError);
            dispatch({ type: "clearErrors" });
        }
        if (message) {
            alert.success(message);
            dispatch({ type: "clearMessage" });
        }
    }, [alert, error, message, likeError, dispatch]);

    return (
        <div className="fullBodyProfileuser">
            <Container>
                <div className='user-profile-page  '>
                   
                    <div className='user-profile-page_top'>
                    { user &&(
                        <>
                      
                        <img src={cover} alt="*here cover image" />
                        <div className='user-profile-pageTopSec'>
                            <Avatar radius="xl" src={user.avatar.url} className='Cuser-profile-page_avatar' style={{ width: "130px", height: "130px" }} />
                        </div>
                        <div className='d-md-flex justify-content-between'>
                            <div>
                                <h2 className='user-profile-page-profile-name'>{user.name}</h2>
                                <h4 className='user-profile-page-profile-cat'>Solo Traveler</h4>
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
                                    style={{background:following ? "red" : "green"}}
                                    onClick={followHandler}
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
                                        postId={post._id}
                                        caption={post.caption}
                                        postImage={post.image.url}
                                        likes={post.likes}
                                        comments={post.comments}
                                        ownerImage={post.owner.avatar.url}
                                        ownerName={post.owner.name}
                                        ownerId={post.owner._id}
                                        width={'100%'}
                                        isAccount={true}
                                        isDelete={true}
                                    />
                                </div>
                            ))
                        ) : (
                            <Typography variant="h6">User has not made any post</Typography>
                        )}

                    </div>
                </div>
            </Container>
        </div >
    )
}

export default UserProfile