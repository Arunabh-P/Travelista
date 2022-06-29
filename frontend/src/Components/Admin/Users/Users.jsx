import React, { useEffect ,useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from '../../../Actions/Admin';
import User from "../User/User"
import "./Users.css"

function Users() {
  const [refresh,setRefresh] =useState(false)
  const dispatch = useDispatch()
  const { admin } = useSelector(
    (state) => state.admin
  )
  const { adminAllUsers } = useSelector(
    (state) => state.adminAllUsers
  )
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch,refresh])
  return (
    <div className='' >
    
      {adminAllUsers && adminAllUsers.length > 0 ? adminAllUsers.map((user) => (
            <User
              key={user._id}
              userId={user._id}
              name={user.name}
              avatar={user.avatar.url}
              isBlock={user.blockStatus}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          )) : (<h2 >No Users yet</h2>
      )}


    </div>
  )
}

export default Users