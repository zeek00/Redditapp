import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    popularPosts: [],
    bestPosts: [],
    currSearchValue: "",
    currSearchPosts: [],
    currPostId: "",
    currPostById: [],
    homePagePosts:[]

   
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
        addCurrSearchValue(state,action){
            state.currSearchValue = action.payload
        },
        addCurrSearchPosts(state,action){
            state.currSearchPosts = action.payload
        },
        addCurrPostId(state,action){
            state.currPostId = action.payload
        },
        addCurrPostById(state,action){
            state.currPostById = action.payload
        }
    }
}

const postsSlice = createSlice(options)

export const { addPopularPosts, addBestPosts,addCurrSearchValue, addCurrSearchPosts,addCurrPostId, addCurrPostById } = postsSlice.actions
export default postsSlice.reducer