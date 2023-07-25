import { configureStore } from "@reduxjs/toolkit";
import postsSliceReducer from "./postsSlice"

const store = configureStore({
    reducer: {
        postsReducer : postsSliceReducer
    },
});

export default store