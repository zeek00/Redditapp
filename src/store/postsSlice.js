import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    popularPosts: [],
    bestPosts: [],
    currSearchPosts: []

   
}

const options = {
    name: "postsData",
    initialState,
    reducers: {
        addPopularPosts(state,action){
            state.popularPosts = action.payload
        },
        addBestPosts(state,action){
            state.bestPosts = action.payload
        },
        addCurrSearchPosts(state,action){
            state.currSearchPosts = action.payload
        }
    }
}

const postsSlice = createSlice(options)

export const { addPopularPosts, addBestPosts } = postsSlice.actions
export default postsSlice.reducer