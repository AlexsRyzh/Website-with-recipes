import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios'

export const fetchRecipes = createAsyncThunk('/recipes/fetchRecipes', async () => {
  const { data } = await axios.get('/recipes')
  await new Promise((res) => setTimeout(res, 4000))
  return data
})

const initialState = {
  recipes: {
    items: [],
    status: 'loading'
  }
}


const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchRecipes.pending]: (state) => {
      state.recipes.items = []
      state.recipes.status = 'loading'
    },
    [fetchRecipes.fulfilled]: (state, action) => {

      state.recipes.items = action.payload
      state.recipes.status = 'loaded'
    },
    [fetchRecipes.rejected]: (state, action) => {
      state.recipes.items = []
      state.recipes.status = 'error'
    },

  }
})


export const recipesReducer = recipesSlice.reducer