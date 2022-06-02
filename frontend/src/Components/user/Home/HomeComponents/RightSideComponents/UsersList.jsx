import React from 'react'
import { Typography } from "@mui/material"
import "./UsersList.css"
import User from '../../../User/User'
import { useSelector } from "react-redux"

function UsersList() {
  const { user, loading: userLoading } = useSelector((state) => state.user);

  const { users, loading: usersLoading } = useSelector(
    (state) => state.allUsers
  )
  return (

    <div className='users-list-to-show'>
<h4>Connect with travelista family</h4>
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

    </div>

  )
}

export default UsersList