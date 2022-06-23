import NewPost from '../../../NewPost/NewPost'
import Post from '../../../Post/Post'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers, getFollowingPosts } from '../../../../../Actions/User'
import { Typography } from "@mui/material";
import Story from '../../../Story/Story'
import nopostyet from "../../../../../Images/nopostyet.jpg"
import "./CenterComponent.css"

function CenterComponent() {

  const dispatch = useDispatch();
  const { posts } = useSelector(
    (state) => state.postOfFollowing
  );

  useEffect(() => {
    dispatch(getFollowingPosts())
    dispatch(getAllUsers())
  }, [dispatch])


  return (
    <>
      <Story />
      <NewPost />
      {
        posts && posts.length > 0 ? (
          posts.map((post) => (
            <Post
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
          ))
        ) : (
          <div className='col-12'>
          <img src={nopostyet} alt="" className="no-post-yet" />
          </div>
          
        )
      }
    </>
  )
}

export default CenterComponent