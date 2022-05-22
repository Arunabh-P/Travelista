import React from 'react'
import Cover from "./Cover/Cover"
import UserPosts from "./UserPosts/UserPosts"
import CommonHeader from "../Header/CommonHeader"
import "./UserProfilePage.css"
import {Container} from "react-bootstrap"
import { SimpleGrid } from '@mantine/core';
function UserProfilePage() {
  return (
    <div>
        <div className="fullBodyProfile">
        <Container >
        
        <div className='userProfile_main'>
          <div className='userProfile_body'>
          <Cover/>
          <SimpleGrid cols={2} className="gridOfUser" spacing="xs">
          <div>
        <UserPosts  name="Hrishi Vijayan" description='This is a test' message='Wow I love Kochi'/>
        </div>
        <div>
        <UserPosts  name="Hrishi Vijayan" description='This is a test' message='Wow I love Kochi'/>
        </div>
        <div>
        <UserPosts  name="Hrishi Vijayan" description='This is a test' message='Wow I love Kochi'/>
        </div>
        <div>
        <UserPosts  name="Hrishi Vijayan" description='This is a test' message='Wow I love Kochi'/>
        </div>
        <div>
        <UserPosts  name="Hrishi Vijayan" description='This is a test' message='Wow I love Kochi'/>
        </div>
        <div>
        <UserPosts  name="Hrishi Vijayan" description='This is a test' message='Wow I love Kochi'/>
        </div>

        </SimpleGrid>
          </div>
        </div>
        </Container>
        </div>
    </div>
  )
}

export default UserProfilePage