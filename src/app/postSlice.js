import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API_ROOT from "../api/redddit"

export const loadComments = createAsyncThunk(
    'post/loadComments',
    async (permalink) => {
        const response = await fetch(`${API_ROOT}${permalink}.json`);
        const json = await response.json(); 

        //return json[1].data.children.map((subreddit) => subreddit.data);
        return json;
        //json[0].data.children[0].data.id = "wcr0hg";
    }
)

const options = {
    name: 'post', 
    initialState: {
        comments: {},
        isLoadingComments: false, 
        failedToLoadComments: false,
        whoCall: null
    }, 
    reducers: {
        handleWhoCall: (state, action) => {state.whoCall = action.payload}
    },
    extraReducers: {
        [loadComments.pending]: (state,action) => {
            state.isLoadingComments = true;
            state.failedToLoadComments = false;
        },
        [loadComments.fulfilled]: (state,action) => {
            //state.comments = action.payload
            state.comments[action.payload[0].data.children[0].data.id] = action.payload[1].data.children.map((subreddit) => subreddit.data); 
            state.isLoadingComments = false;
            state.failedToLoadComments = false;
        },
        [loadComments.rejected]: (state,action) => {
            state.isLoadingComments = false;
            state.failedToLoadComments = true;
        }
    }
}
const postSlice = createSlice(options); 

export const { handleWhoCall } = postSlice.actions;

export const selectComments = state => state.postSlice.comments; 
export const selectIsLoadingComments = state => state.postSlice.isLoadingComments;
export const selectFailedToLoadComments = state => state.postSlice.failedToLoadComments;
export const selectWhoCall = state => state.postSlice.whoCall; 

export default postSlice.reducer; 