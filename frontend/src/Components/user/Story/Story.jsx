import React, { useState } from 'react'
import "./Story.css"
import AddStory from './StoryComponents/AddStory';
import FollowersStories from './StoryComponents/FollowersStories';
import { useDispatch, useSelector } from "react-redux"
import { useAlert } from 'react-alert';

function Story() {
   
    return (
        <div className="row mb-2 all-stories-in-the-home-page mx-1"  style={{overflowX:"scroll"}}>

            <div className="col-2 me-3 add-story-home p-0">
               
                <AddStory  />
            </div>

            <div className="col-9   stories-in-home d-flex ">
            <FollowersStories/>
            </div>

        </div>
    )
}

export default Story