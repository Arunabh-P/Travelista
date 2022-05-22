import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import User from '../User/User'
import Post from '../Post/Post'
import "./Home.css"
import profilePic from "../../../Images/profilePic.jpeg"
import { getFollowingPosts } from '../../../Actions/User'
import Loader from '../Loader/Loader'
function Home() {
  const dispatch = useDispatch();

  const {loading,posts,error} = useSelector(state => state.postOfFollowing)

  useEffect(() => {
    dispatch(getFollowingPosts())
    
  }, [])
  
  return (
    loading ? <Loader /> : (

    <div className='home'>
        <div className="homeleft">
          <Post 
          postImage="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          ownerName={"Arunabh"}
          caption={"This is my sample post"}
          />
         
         
            
        </div>
        <div className="homeright">
        <User 
          userId={"user._id"}
          name={"Arunabh"}
          avatar={profilePic}
          />
          
        </div>
    </div>
    )
  )
}

export default Home