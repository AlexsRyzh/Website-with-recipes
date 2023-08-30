import { configureStore } from "@reduxjs/toolkit";
import { recipesReducer } from "./slices/recipes";
import { authReducer } from "./slices/auth";

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    auth: authReducer
  }
})


export default store
