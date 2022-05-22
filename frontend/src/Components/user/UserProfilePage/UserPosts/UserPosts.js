import React from 'react'
import {Avatar} from "@material-ui/core"
import "./UserPosts.css"
import InputOptions from './InputOptions/InputOptions'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function Post({name,description,message,photoUrl}) {
  return (
    <div className='UserPost'>
        <div className="Userpost_header">
                <div className="Userpost_info">
                    <Avatar />
                    <h2 className='postUSerName'>{name}</h2>
                </div>
                <div className='editDeleteButton me-0'>
            <InputOptions Icon={EditOutlinedIcon }  color='gray' />
            <InputOptions Icon={CloseOutlinedIcon }  color='gray' />

                </div>

        </div>
        <div className="Userpost_body">
            <p className='postUSerMessage'>{message}</p>
        </div>
        <div className="Userpost_buttons">
            <InputOptions Icon={FavoriteBorderIcon }  color='gray' />
            <InputOptions Icon={ChatOutlinedIcon }  color='gray' />
        </div>
        
    </div>
  )
}

export default Post