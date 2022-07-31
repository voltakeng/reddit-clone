import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API_ROOT from "../api/redddit"

export const loadSubreddits = createAsyncThunk(
    'subreddits/loadSubreddits',
    async () => {
        const response = await fetch(`${API_ROOT}/subreddits.json`); 
        const json = await response.json(); 

        return json.data.children.map((subreddit) => subreddit.data);
    }
)

const options = {
    name: 'subreddits',
    initialState:{
        subreddits: [],
        selectedSubreddit: "/r/Home/",
        isLoadingSubreddits: false, 
        failedToLoadSubreddits: false
    },
    reducers: {
        handleSelected: (state,action) => {state.selectedSubreddit = action.payload}
    },
    extraReducers: {
        [loadSubreddits.pending]: (state,action) => {
            state.isLoadingSubreddits = true;
            state.failedToLoadSubreddits = false;
        },
        [loadSubreddits.fulfilled]: (state,action) => {
            state.subreddits = action.payload; 
            state.isLoadingSubreddits = false;
            state.failedToLoadSubreddits = false;
        },
        [loadSubreddits.rejected]: (state,action) => {
            state.isLoadingSubreddits = false;
            state.failedToLoadSubreddits = true;
        }
    }
}
const subredditsSlice = createSlice(options);   


export const { handleSelected } = subredditsSlice.actions;

export const selectSelectedSubreddits = state => state.subredditsSlice.selectedSubreddit;
export const selectSubreddits = state => state.subredditsSlice.subreddits;

export default subredditsSlice.reducer; 