import React from 'react'
import { Typography } from "@mui/material"
import "./UsersList.css"
import User from '../../../User/User'
import { useSelector } from "react-redux"

function UsersList() {

  const { users } = useSelector(
    (state) => state.allUsers
  )
  const {user} = useSelector(
    (state) => state.user
  )

let others 
  if(users !== undefined){
     others = users.filter((usr)=>{
  if(!usr.followers.includes(user._id) && usr._id !== user._id){
    return usr
  }
})
  }




  return (

    <div className='users-list-to-show'>
      <h4>Connect with travelista family</h4>
      {others && others.length > 0 ? (
        
        others
        .sort(() => Math.random() - 0.5)
        .slice(0, 7)
        .map((user) => (
          <User
            key={user._id}
            userId={user._id}
            name={user.name}
            avatar={user.avatar.url}
          />
        ))
      ) : (<Typography variant='h6' >No Users yet</Typography>
      )}

    </div>

  )
}

export default UsersList