import React from 'react'
import UsersList from './HomeComponents/RightSideComponents/UsersList'
import CenterComponent from './HomeComponents/CenterComponents/CenterComponent'
import UserCard from './HomeComponents/LeftSideComponents/UserCard'
import "./Home.css"

function Home() {
  return (

    <div className=" w-100 home-page fullBodyHome" >
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-3 home-left">
            <UserCard />
          </div>
          <div className="col-md-8 col-lg-6 home-center">
            <CenterComponent />
          </div>
          <div className="col-lg-3 home-right d-none d-lg-block">
            <UsersList />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home