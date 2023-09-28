import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postsSliceReducer from "./postsSlice"
import loadingSliceReducer from "./loadingSlice";


const rootReducer = combineReducers({
    postsReducer : postsSliceReducer,
    loadingReducer: loadingSliceReducer
  })

const store = configureStore({
    reducer:rootReducer
});

export default store