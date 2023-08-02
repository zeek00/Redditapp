import { configureStore } from "@reduxjs/toolkit";
import postsSliceReducer from "./postsSlice"
import loadingSliceReducer from "./loadingSlice";

const store = configureStore({
    reducer: {
        postsReducer : postsSliceReducer,
        loadingReducer: loadingSliceReducer
    },
});

export default store