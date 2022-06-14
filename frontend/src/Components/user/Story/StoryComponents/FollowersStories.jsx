import React, { useEffect, useState } from 'react'
import "./FollowersStories.css"
import { Avatar } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux"
import { Button, Dialog, Typography } from "@mui/material";
import { getAllUsers, getFollowingStories } from '../../../../Actions/User';
function FollowersStories() {

    const dispatch = useDispatch()
    const { loading, stories, error } = useSelector(
        (state) => state.storyOfFollowing
    );
    const { users, loading: usersLoading } = useSelector(
        (state) => state.allUsers
    )

    const [storyToggle, setStoryToggle] = useState(false)

    useEffect(() => {
        dispatch(getFollowingStories());
        dispatch(getAllUsers())

    }, [dispatch]);

    const [singleStory,setSingleStory] = useState({});

    const showSingleImage=(index)=>{
        const temp = stories[index];
        setSingleStory(temp);
        setStoryToggle(!storyToggle)
    }

    return (
        <>
            {
                stories && stories.length > 0 ? (
                    stories.map((story,index) => (
                        <div key={story._id} className="story-list ">


                            <div onClick={() =>showSingleImage(index) }
                                style={{ backgroundImage: `url(${story.image.url})` }}
                                className="followers-all-stories"
                            >
                                <div className="avatar-img">
                                    <Avatar
                                        size="lg"
                                        className="story-follower-avatar"
                                        src={story.owner.avatar.url}
                                        color="gradient"
                                        bordered
                                    />

                                </div>
                                <h4 className="story-follower-name">{story.owner.name}</h4>




                            </div>



                        </div>

                    ))
                ) : (
                    <Typography variant='h6'>No stories yet</Typography>
                )


            }

            <Dialog open={storyToggle} onClose={() => setStoryToggle(!storyToggle)}>
                <div className="DialogBox">
                    {
                        Object.keys(singleStory).length > 0 ? 
                             (<>
                              <div
                                style={{ backgroundImage: `url(${singleStory.image.url})` }}
                                className="single-story-img"
                            >
                                 <div className="avatar-img">
                                    <Avatar
                                        size="lg"
                                        className="story-follower-avatar"
                                        src={singleStory.owner.avatar.url}
                                        color="gradient"
                                        bordered
                                    />

                                </div>
                                <h4 className="single-story-follower-name">{singleStory.owner.name}</h4>
                             {/* <h4 className="single-story-user-name" >{singleStory.owner.name}</h4> */}
                             {/* <img src={singleStory.image.url} alt=""   /> */}
                             </div>
                         </> )
                         :
                         ''   
                    }
                </div>
            </Dialog>

        </>
    )
}

export default FollowersStories