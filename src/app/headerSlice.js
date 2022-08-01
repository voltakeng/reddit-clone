import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'header', 
    initialState: "",
    reducers: {
        setSearchTerm: (state, action) => state = action.payload
    }
};
const headerSlice = createSlice(options);

export const { setSearchTerm } = headerSlice.actions; 

export const selectSearchTerm = state => state.headerSlice; 

export default headerSlice.reducer; 