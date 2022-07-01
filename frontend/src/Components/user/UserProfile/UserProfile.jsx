import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { followAndUnFollowUser, getUserPosts, getUserProfile } from '../../../Actions/User';
import Post from '../Post/Post';
import User from "../User/User"
import { Button, Dialog, Typography } from "@mui/material";
import { useParams } from 'react-router-dom';
import { Container } from "react-bootstrap"
import cover from "../../../Images/cover.jpg"
import { useAlert } from 'react-alert';
import { Skeleton } from "@mui/material";
import './UserProfile.css'
import Header from "../Header/CommonHeader"

function UserProfile({ width }) {
    const dispatch = useDispatch()
    const alert = useAlert()
    const { user, error: userError, loading: userLoading } = useSelector((state) => state.userProfile);
    const { user: me } = useSelector((state) => state.user)
    const { error, posts, loading: postLoading } = useSelector((state) => state.userPosts);
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
        <>
            <Header />
            <div className="user-profile-full-body">
                <Container>
                    <div className='user-profile-page-inside'>
                        <div className='user-profile-page-top-section'>

                            {user && (
                                <>
                                    <img src={cover} alt="*here cover image" />
                                    <div className='user-profile-pageTopSec'>
                                        <img radius="xl" src={user.avatar.url} className='CoverPage_avatar' alt="coverImage" style={{ width: "130px", height: "130px", borderRadius: "20%" }} />
                                    </div>
                                    <div className='d-md-flex justify-content-between texts-group-acc'>
                                        <div>
                                            <h2 className='user-profile-page-profile-name'>{user.name}</h2>
                                            <h4 className='user-profile-page-profile-cat'>{user.bio}</h4>
                                        </div>
                                        <div  >
                                            <Typography onClick={() => setFollowersToggle(!followersToggle)} className="account-texts" >{user.followers.length} Followers</Typography>
                                        </div>
                                        <div>
                                            <Typography onClick={() => setFollowingToggle(!followingToggle)} className="account-texts" >{user.following.length} Following</Typography>
                                        </div>
                                        <div>
                                            <Typography className="account-texts">{user.posts.length} Posts</Typography>
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
                                        <Dialog className="DialogBoxMain" open={followersToggle} onClose={() => setFollowersToggle(!followersToggle)}>
                                            <div className="DialogBoxAccount">
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
                                        <Dialog className="DialogBoxMain" open={followingToggle} onClose={() => setFollowingToggle(!followingToggle)}>
                                            <div className="DialogBoxAccount">
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
                            {/* {postLoading &&
                                [...Array(5)].map(() => {

                                    return (
                                        <div className='col-12 col-md-6' >
                                            <Skeleton
                                                variant="rectangular"
                                                sx={{ bgcolor: "#FFFFFF" }}
                                                width={width}
                                                height={"198px"}
                                                radius={"10px"}
                                            />
                                            <div className='latest-title' style={{ width }}>
                                                <Skeleton height={"35px"} />
                                                <Skeleton width={"80%"} height={"35px"} />
                                            </div>
                                            <div className='latest-cat mt-2 mb-4'><Skeleton width={"50%"} /></div>

                                            <div className='latest-line'></div>
                                        </div>
                                    )

                                })
                            } */}
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
        </>
    )
}

export default UserProfile