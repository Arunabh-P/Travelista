import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getMyPosts } from '../../../Actions/User';
import "./Account.css"
import Loader from '../Loader/Loader';
import Post from '../Post/Post';
import User from "../User/User"
import { Avatar } from '@mantine/core';
import { Button, Dialog, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap"
import cover from "../../../Images/cover.jpg"
import profilePic from "../../../Images/profilePic.jpeg"
import { SimpleGrid } from '@mantine/core';





function Account() {

  const dispatch = useDispatch()
  const { user, loading: userLoading } = useSelector((state) => state.user);
  const { loading, error, posts } = useSelector((state) => state.myPosts);
  const {
    error: likeError,
    message,
    loading: deleteLoading,
  } = useSelector((state) => state.like);

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


  return loading === true || userLoading === true ? (
    <Loader />
  ) : (
    <>
      <div className="fullBodyProfile">
        <Container>
          <div className='CoverPage  '>
            <div className='CoverPage_top'>
              <img src={cover} alt="*here cover image" />
              <div className='coverTopSec'>
                <Avatar radius="xl" src={user.avatar.url} className='CoverPage_avatar' style={{ width: "130px", height: "130px" }} />
              </div>
              <div className='d-flex justify-content-between'>
                <div>
                  <h2 className='cover-profile-name'>{user.name}</h2>
                  <h4 className='cover-profile-cat'>Solo Traveler</h4>
                </div>
                <div  >
                  <Button>
                    <Typography>Followers</Typography>
                  </Button>

                  <Typography className='text-center' >{user.followers.length}</Typography>

                </div>

                <div>
                  <Button>
                    <Typography>Following</Typography>
                  </Button>
                  <Typography  className='text-center'>{user.following.length}</Typography>
                </div>

                <div>
                  <Button>
                    <Typography>Posts</Typography>
                  </Button>
                  <Typography  className='text-center'>{user.posts.length}</Typography>
                </div>
                {/* <Button variant="contained">Logout</Button> */}

                <Link to="/update/profile">Edit Profile</Link>

                <Link to="/update/password">Change Profile</Link>
                <Button
                  variant="text"
                  style={{ color: "red", margin: "2vmax" }}
                >
                  Delete My Profile
                </Button>
              </div>

            </div>


            <div className='d-flex' cols={2} spacing="xs">
              <div className='d-flex' >

                {posts && posts.length > 0 ? (
                  posts.map((post) => (
                    <Post
                      key={post._id}
                      postId={post._id}
                      caption={post.caption}
                      postImage={post.image.url}
                      likes={post.likes}
                      comments={post.comments}
                      ownerImage={post.owner.avatar.url}
                      ownerName={post.owner.name}
                      ownerId={post.owner._id}
                    />
                  ))
                ) : (
                  <Typography variant="h6">You have not made any post</Typography>
                )}
              </div>
            </div>

          </div>



        </Container>
      </div >





      <div className="account">

        <div className="accountright">
          <div>
            <Button>
              <Typography>Followers</Typography>
            </Button>
            <Typography>{user.followers.length}</Typography>
          </div>

          <div>
            <Button>
              <Typography>Following</Typography>
            </Button>
            <Typography>{user.following.length}</Typography>
          </div>

          <div>
            <Button>
              <Typography>Posts</Typography>
            </Button>
            <Typography>{user.posts.length}</Typography>
          </div>
          <Button variant="contained">Logout</Button>

          <Link to="/update/profile">Edit Profile</Link>
          <Link to="/update/password">Change Profile</Link>
          <Button
            variant="text"
            style={{ color: "red", margin: "2vmax" }}
          >
            Delete My Profile
          </Button>


        </div>
      </div>
    </>
  )
}

export default Account