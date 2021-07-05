import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchCat = createAsyncThunk (
    'cat/fetchCat',
    () => {
        return axios.get('https://api.thecatapi.com/v1/images/search')
            .then(res => res.data)
    }
)

export const catSlice = createSlice ({
    name: 'cat',
    initialState: {cat: [],loading: ''},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCat.fulfilled, (state, action) => {
            state.loading = ''
            state.cat.push(action.payload[0].url)
        })
        builder.addCase(fetchCat.pending,(state)=>{
            state.loading = 'loading...'
        })
    }
})

export default catSlice.reducer