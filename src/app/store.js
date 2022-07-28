import { configureStore } from "@reduxjs/toolkit";
import subredditsSlice from "./subredditsSlice";
import headerSlice from "./headerSlice";

const store = configureStore({
    reducer: {
        subredditsSlice: subredditsSlice,
        headerSlice: headerSlice
    }
});

export default store; 