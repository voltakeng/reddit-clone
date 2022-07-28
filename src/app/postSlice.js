import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'post', 
    initialState: { up: false , down: false, showcomments: false }, 
    reducers: {
        voteUp: (state) => {
            state.up = !state.up; 
        },
        voteDown: (state) => {
            state.down = !state.down; 
        },
        showComments: (state) => {
            state.showcomments = !state.showcomments; 
        }
    }
}
const postSlice = createSlice(options); 


export const { voteUp, voteDown, showComments } = postSlice.actions; 

export const selectVoteUp = state => state.postSlice.up; 
export const selectVoteDown = state => state.postSlice.down;
export const selectShowComments = state => state.postSlice.showcomments; 

export default postSlice.reducer; 