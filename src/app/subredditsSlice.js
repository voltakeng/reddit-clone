import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'subreddits',
    initialState: false,
    reducers: {
        handleClick: state => state = !state
    }
}
const subredditsSlice = createSlice(options);   


export const { handleClick } = subredditsSlice.actions;

export const selectSubreddits = state => state.subredditsSlice;

export default subredditsSlice.reducer; 