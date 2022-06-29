import React  from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Users from '../Users/Users'
import AdminHeader from "../Header/CommonHeader"


function Home() {



  return (
    <>
    <AdminHeader/>
    <div className=" w-100 home-page fullBodyHome" >
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-3 home-left">
            <Sidebar />
          </div>
          <div className="col-md-8 col-lg-9 home-center">
            <Users/>
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default Home