import NewPost from '../../../NewPost/NewPost'
import "./CenterComponent.css"
import Post from '../../../Post/Post'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers, getFollowingPosts } from '../../../../../Actions/User'
import { Typography } from "@mui/material";
import { useAlert } from "react-alert"
import Story from '../../../Story/Story'
function CenterComponent() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { user, loading: userLoading } = useSelector((state) => state.user);
  const { loading, posts, error } = useSelector(
    (state) => state.postOfFollowing
  );

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
    <>

      {/* story */}

      <Story />


      {/* uploading new post */}
      <NewPost />


      {/* followers Posts */}
      {
        posts && posts.length > 0 ? (
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
              width={'100%'}
            />
          ))
        ) : (
          <Typography variant='h6'>No posts yet</Typography>
        )
      }
    </>
  )
}

export default CenterComponent