import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import $api from '../../http'
import RecipeService from "../../services/RecipeService";

export const fetchRecipes = createAsyncThunk('/recipes/fetchRecipes', async () => {
    const response = await RecipeService.getAll()
    return response.data
})

export const fetchMyRecipes = createAsyncThunk('/recipes/fetchMyRecipes', async () => {
    const response = await RecipeService.getMy()
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
