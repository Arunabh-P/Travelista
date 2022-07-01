import NewPost from '../../../NewPost/NewPost'
import Post from '../../../Post/Post'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers, getFollowingPosts } from '../../../../../Actions/User'
import Story from '../../../Story/Story'
import nopostyet from "../../../../../Images/nopostyet.jpg"
import "./CenterComponent.css"
import { Skeleton } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
function CenterComponent({width}) {

  const dispatch = useDispatch();
  const { posts,loading } = useSelector(
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
      {/* {loading && 
      [...Array(5)].map(()=>{

        return (
          <div className='pointer'>
          <Skeleton
            variant="rectangular"
            sx={{ bgcolor: "#FFFFFF" }}
            width={width}
            height={"198px"}
          />
          <div className='latest-title' style={{width}}>
            <Skeleton height={"35px"}/>
            <Skeleton width={"80%"} height={"35px"}/>
          </div>
          <div className='latest-cat mt-2 mb-4'><Skeleton width={"50%"}/></div>
          
          <div className='latest-line'></div>
        </div>
        )

      })
      } */}
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