import React from 'react'
import { Typography } from "@mui/material"
import "./UsersList.css"
import User from '../../../User/User'
import { useSelector } from "react-redux"
import { Skeleton } from "@mui/material";

function UsersList() {

  const { users, loading } = useSelector(
    (state) => state.allUsers
  )
  const { user } = useSelector(
    (state) => state.user
  )

  let others
  if (users !== undefined) {
    others = users.filter((usr) => {
      if (!usr.followers.includes(user._id) && usr._id !== user._id) {
        return usr
      }
    })
  }




  return (

    <div className='users-list-to-show'>
      <h4>Connect with travelista family</h4>
      {loading &&
        [...Array(12)].map(() => {

          return (
            <div className="row d-flex ">
              <div className="col-8">
                <div className="users-home-list">
                  <Skeleton variant="circular" className="user-home-list-avatar" />
                  <Skeleton variant="text" width={280} />
                </div>
              </div>
            </div>

          )
        })}
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