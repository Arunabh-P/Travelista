import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import User from '../User/User'
import Post from '../Post/Post'
import "./Home.css"
import profilePic from "../../../Images/profilePic.jpeg"
import { getAllUsers, getFollowingPosts } from '../../../Actions/User'
import { Typography } from "@mui/material";
import { useAlert } from "react-alert"
import cover from "../../../Images/cover.jpg"
import { Avatar } from '@mui/material'
import NewPost from "../NewPost/NewPost"

function Home() {
  const dispatch = useDispatch();
  const alert = useAlert();


  const { posts, error } = useSelector(state => state.postOfFollowing)

  const { users, loading: usersLoading } = useSelector(
    (state) => state.allUsers
  )

  const { error: likeError, message } = useSelector((state) => state.like);


  useEffect(() => {
    dispatch(getFollowingPosts())
    dispatch(getAllUsers())
  }, [dispatch])

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch({ type: "clearErrors" })
    }
    if (likeError) {
      alert.error(likeError);
      dispatch({ type: "clearErrors" })
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" })
    }
  }, [alert, error, message, likeError, dispatch]);

  return (
  
    <div className='home container'>
      <div className="firstOne">
      <div className='sidebar  d-md-block'>
       <div className='Sidebar_top'>
         <img src={cover} alt="here cover image" />
         <Avatar src={profilePic} className='sidebar_avatar'/>
         <h2>Arunabh</h2>
         <h4>Solo Traveler</h4>
       </div>
       
     </div>

      </div>
      <div className="homeleft">
        <NewPost />

        {
          posts && posts.length > 0 ? posts.map((post) => (
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
              width={'100%'}
            />
          )) : (
            <Typography variant='h6'>No posts yet</Typography>
          )
        }
        <Post
          postImage="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          ownerName={"Arunabh"}
          caption={"This is my sample post"}
        />



      </div>
      <div className="homeright">
        {users && users.length > 0 ? (
          users.map((user) => (
            <User
              key={user._id}
              userId={user._id}
              name={user.name}
              avatar={user.avatar.url}
            />
          ))
        ) : (<Typography variant='h6' >No Users yet</Typography>
        )}
        <User
          userId={"user._id"}
          name={"Arunabh"}
          avatar={profilePic}
        />

      </div>
    </div>
  )
}

export default Home