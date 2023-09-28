import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    completed: false,
    error:false

}

const loadingSlice = createSlice({ 
    name: "loadingState",
    initialState,
    reducers: {
        changeLoadingState(state,action){
            state.loading = true
            state.completed = false
            state.error = false
        },
        changeCompletedState(state,action){
            state.loading = false
            state.completed = true
            state.error = false
        },
        changeErrorState(state,action){
            state.loading = false
            state.completed = false
            state.error = true
        },
        changeToInitialState(state,action){
            state.loading = false
            state.completed = false
            state.error = false
        },
    }
})


export const {changeLoadingState,  changeCompletedState,changeErrorState, changeToInitialState } = loadingSlice.actions

export default loadingSlice.reducer