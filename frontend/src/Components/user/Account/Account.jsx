import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { deleteMyProfile, getMyPosts, logoutUser  } from '../../../Actions/User';
import "./Account.css"
import Loader from '../Loader/Loader';
import Post from '../Post/Post';
import User from "../User/User"
import { Avatar } from '@mantine/core';
import { Button, Dialog, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap"
import cover from "../../../Images/cover.jpg"
import { useAlert } from 'react-alert';

function Account() {

  const dispatch = useDispatch()
  const alert = useAlert()
  const { user, loading: userLoading } = useSelector((state) => state.user);
  const { loading, error, posts } = useSelector((state) => state.myPosts);
  const {
    error: likeError,
    message,
    loading: deleteLoading,
  } = useSelector((state) => state.like);

  const [followersToggle, setFollowersToggle] = useState(false)
  const [followingToggle, setFollowingToggle] = useState(false)

  const deleteProfileHandler = async () => {
    await dispatch(deleteMyProfile());
    dispatch(logoutUser())
  }


  useEffect(() => {
    dispatch(getMyPosts());
  }, [dispatch]);

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


  return  (
    <div className="fullBodyProfile">
      <Container>
        <div className='CoverPage  '>
          <div className='CoverPage_top'>
            <img src={cover} alt="*here cover image" />
            <div className='coverTopSec'>
              <Avatar radius="xl" src={user.avatar.url} className='CoverPage_avatar' style={{ width: "130px", height: "130px" }} />
            </div>
            <div className='d-md-flex justify-content-between'>
              <div>
                <h2 className='cover-profile-name'>{user.name}</h2>
                <h4 className='cover-profile-cat'>Solo Traveler</h4>
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
              {/* <Button variant="contained">Logout</Button> */}

              <Link to="/update/profile">Edit Profile</Link>

              <Link to="/update/password">Change Password</Link>
              <Button
                variant="text"
                style={{ color: "red", margin: "2vmax" }}
                onClick={deleteProfileHandler}
                disabled={deleteLoading}
              >
                Delete My Profile
              </Button>

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
              <Typography variant="h6">You have not made any post</Typography>
            )}

          </div>
        </div>
      </Container>
    </div >
  )
}

export default Account