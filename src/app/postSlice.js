import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API_ROOT from "../api/redddit"

export const loadComments = createAsyncThunk(
    'post/loadComments',
    async (permalink) => {
        const response = await fetch(`${API_ROOT}${permalink}.json`);
        const json = await response.json(); 

        return json[1].data.children.map((subreddit) => subreddit.data);
    }
)

const options = {
    name: 'post', 
    initialState: {
        comments: [],
        isLoadingComments: false, 
        failedToLoadComments: false
    }, 
    reducers: {

    },
    extraReducers: {
        [loadComments.pending]: (state,action) => {
            state.isLoadingComments = true;
            state.failedToLoadComments = false;
        },
        [loadComments.fulfilled]: (state,action) => {
            state.comments = action.payload; 
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

export const selectComments = state => state.postSlice.comments; 
export const selectIsLoadingComments = state => state.postSlice.isLoadingComments;
export const selectFailedToLoadComments = state => state.postSlice.failedToLoadComments;

export default postSlice.reducer; 