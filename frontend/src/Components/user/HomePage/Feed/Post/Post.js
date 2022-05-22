import React from 'react'
import {Avatar} from "@material-ui/core"
import "./Post.css"
import InputOptions from '../InputOptions/InputOptions'
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined"
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendtOutlinedIcon from '@material-ui/icons/SendOutlined';


function Post({name,description,message,photoUrl}) {
  return (
      <>
    <div className='Post'>
        <div className="post_header">
            <Avatar />
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post_body">
            <p>{message}</p>
        </div>
        <div className="post_buttons">
            <InputOptions Icon={FavoriteBorderIcon }  color='gray' />
            <InputOptions Icon={ChatOutlinedIcon }  color='gray' />
            <InputOptions Icon={ShareOutlinedIcon }  color='gray' />

            <InputOptions Icon={SendtOutlinedIcon } color='gray' />
            <InputOptions Icon={PeopleOutlineIcon } title="Buddy Request" color='gray' />
            <InputOptions Icon={VolunteerActivismIcon } title="Host Request" color='gray' />
        </div>
        
    <div className="comments">
        <div className="comment">
        <div className="post_header">
            <Avatar />
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post_body">
            <p>{message}</p>
        </div>
        <div className="postg_buttons">
            <InputOptions Icon={FavoriteBorderIcon }  color='gray' />
            <InputOptions Icon={ChatOutlinedIcon }  color='gray' />

        </div>

        </div>

    </div>
    <button className='btn text-primary border-primary show-comments'>Show Comments</button>
    </div>
    
    </>
    
  )
}

export default Post