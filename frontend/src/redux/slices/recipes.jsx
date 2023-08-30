import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios'

export const fetchRecipes = createAsyncThunk('/recipes/fetchRecipes', async () => {
    const { data } = await axios.get('/recipes')
    await new Promise((res) => setTimeout(res, 4000))
    return data
})

const initialState = {
    recipes: [],
    status: 'loading'
}


const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(fetchRecipes.pending, (state) => {
            state.status = 'loading'
        })

        builder.addCase(fetchRecipes.fulfilled, (state, action) => {
            state.recipes = action.payload
            state.status = 'loaded'
        })

        builder.addCase(fetchRecipes.rejected, (state, action) => {
            state.recipes = []
            state.status = 'error'
        })

    }
})

export const recipesReducer = recipesSlice.reducer
