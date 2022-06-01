import { configureStore } from "@reduxjs/toolkit";
import { likeReducer, myPostsReducer, userPostsReducer } from "./Reducers/Post";
import { addStoryReducer, storyOfFollowingReducer } from "./Reducers/Story";
import { allUsersReducer, postOfFollowingReducer, userProfileReducer, userReducer } from "./Reducers/User"

const store = configureStore({
    reducer: {
        user: userReducer,
        postOfFollowing : postOfFollowingReducer,
        allUsers : allUsersReducer,
        like : likeReducer,
        myPosts : myPostsReducer,
        userProfile : userProfileReducer,
        userPosts : userPostsReducer,
        addStory : addStoryReducer,
        storyOfFollowing :storyOfFollowingReducer
    } 
});

export default store;