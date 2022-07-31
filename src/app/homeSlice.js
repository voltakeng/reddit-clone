import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import API_ROOT from "../api/redddit"

export const loadSubredditPosts = createAsyncThunk(
    'home/loadSubredditPosts',
    async (currentSubreddit) => {
        const response = await fetch(`${API_ROOT}${currentSubreddit}.json`);
        const json = await response.json(); 

        return json.data.children.map((post) => post.data);
    }
)

const options = {
    name: "home", 
    initialState: {
        posts: [],
        isLoadingPosts: false, 
        failedToLoadPosts: false
    },
    extraReducers: {
        [loadSubredditPosts.pending]: (state,action) => {
            state.isLoadingPosts = true;
            state.failedToLoadPosts = false;
        },
        [loadSubredditPosts.fulfilled]: (state,action) => {
            state.posts = action.payload; 
            state.isLoadingPosts = false;
            state.failedToLoadPosts = false;
        },
        [loadSubredditPosts.rejected]: (state,action) => {
            state.isLoadingPosts = false;
            state.failedToLoadPosts = true;
        }
    }
}
const homeSlice = createSlice(options); 

export const selectPosts = state => state.homeSlice.posts;

export default homeSlice.reducer; 