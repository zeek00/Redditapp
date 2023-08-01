import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    popularPosts: [],
    bestPosts: [],
    currSearchPosts: []

   
}

const postsSlice = createSlice({
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
})

export const { addPopularPosts, addBestPosts } = postsSlice.actions
export default postsSlice.reducer