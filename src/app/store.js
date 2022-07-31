import { configureStore } from "@reduxjs/toolkit";
import subredditsSlice from "./subredditsSlice";
import headerSlice from "./headerSlice";
import homeSlice from "./homeSlice";
import postSlice from "./postSlice";

const store = configureStore({
    reducer: {
        subredditsSlice: subredditsSlice,
        headerSlice: headerSlice,
        homeSlice: homeSlice,
        postSlice: postSlice
    }
});

export default store; 