import { configureStore } from "@reduxjs/toolkit";
import subredditsSlice from "./subredditsSlice";
import headerSlice from "./headerSlice";
import postSlice from "./postSlice";

const store = configureStore({
    reducer: {
        subredditsSlice: subredditsSlice,
        headerSlice: headerSlice,
        postSlice: postSlice
    }
});

export default store; 