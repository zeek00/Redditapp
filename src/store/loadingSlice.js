import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
    pending: false,
    loading: false,
    completed: false,
    error:false

}

const loadingSlice = createSlice({
    name: "loadingState",
    initialState,
    reducers: {
        changePendingState(state,action){
            state.pending = true
            state.loading = false
            state.completed = false
            state.error = false
        },
        changeLoadingState(state,action){
            state.pending = false
            state.loading = true
            state.completed = false
            state.error = false
        },
        changeCompletedState(state,action){
            state.pending = false
            state.loading = false
            state.completed = true
            state.error = false
        },
        changeErrorState(state,action){
            state.pending = false
            state.loading = false
            state.completed = false
            state.error = true
        },
        changeToInitialState(state,action){
            state.pending = false
            state.loading = false
            state.completed = false
            state.error = false
        },
    }
})


export const {changePendingState,changeLoadingState,  changeCompletedState,changeErrorState, changeToInitialState } = loadingSlice.actions

export default loadingSlice.reducer