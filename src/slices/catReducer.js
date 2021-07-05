import { createSlice } from "@reduxjs/toolkit";

export const catSlice = createSlice ({
    name: 'cat',
    initialState: {cat: [],loading: ''},
    reducers: {
        GET_CAT: () => {},
        GET_CAT_IMG: (state,action) =>{
            state.loading = ''
            state.cat.push(action.payload)
        },
        CAT_LOADING: (state,action) =>{
            state.loading = 'loading...'
        }
    }
})

export const {GET_CAT, GET_CAT_IMG,CAT_LOADING} = catSlice.actions
export default catSlice.reducer