import { createReducer } from "@reduxjs/toolkit";
const initialState = {}

export const addStoryReducer = createReducer(initialState, {
    newStoryRequest: (state) => {
        state.loading = true
    },
    newStorySuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    newStoryFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
})

export const storyOfFollowingReducer = createReducer(initialState, {
    storyOfFollowingRequest: (state) => {
        state.loading = true;
    },
    storyOfFollowingSuccess: (state, action) => {
        state.loading = false;
        state.stories = action.payload;
    },
    storyOfFollowingFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.error = null;
    }
})
