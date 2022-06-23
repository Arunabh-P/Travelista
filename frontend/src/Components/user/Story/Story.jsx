import React, { useEffect } from 'react'
import "./Story.css"
import AddStory from './StoryComponents/AddStory';
import FollowersStories from './StoryComponents/FollowersStories';
import { useDispatch, useSelector } from "react-redux"
import { useAlert } from 'react-alert';

function Story() {
  const dispatch = useDispatch()
  const { error, message } = useSelector((state) => state.addStory)
  const alert = useAlert();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" })
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "clearErrors" })
    }
  }, [dispatch, error, message, alert])

  return (
    <div className="row mb-2 all-stories-in-the-home-page mx-1" style={{ overflowX: "scroll" }}>
      {/* <div className="col-4 col-sm-3 add-story-home p-0">
        <AddStory />
      </div>
      <div className="col-8 col-sm-9 stories-in-home d-flex ps-3">
        <FollowersStories />
      </div> */}
      <div className="col-12 add-story-home stories-in-home p-0 d-flex">
        <AddStory />
        <FollowersStories />
      </div>
    </div>
  )
}

export default Story