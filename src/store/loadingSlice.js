import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error:false

}

const loadingSlice = createSlice({
    name: "loadingState",
    initialState,
    reducers: {
        changeLoadingState(state,action){
            state.loading = true
            state.error = false
        },
        changeCompletedState(state,action){
            state.loading = false
            state.error = false
        },
        changeErrorState(state,action){
            state.loading = false
            state.error = true
        },
    }
})


export const {changeLoadingState,  changeCompletedState,changeErrorState, changeToInitialState } = loadingSlice.actions

export default loadingSlice.reducer