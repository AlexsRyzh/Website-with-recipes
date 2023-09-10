import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService";
import UserService from "../../services/UserService";

export const fetchLogin = createAsyncThunk('auth/fetchLogin', async ({ login, password }) => {
    const response = await AuthService.login(login, password)
    return response.data
})

export const fetchRegistration = createAsyncThunk('auth/fetchRegisteration', async ({ login, name, surename, password }) => {
    const response = await AuthService.registration(login, name, surename, password)
    return response.data
})

export const fetchLogout = createAsyncThunk('auth/fetchLogout', async () => {
    const response = await AuthService.logout()
    return response.data
})

export const fetchMe = createAsyncThunk('auth/fetchMe', async () => {
    const response = await UserService.getMe()
    return response.data
})


const initialState = {
    user: null,
    status: 'loading'
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {

        ///fetchLogin
        builder.addCase(fetchLogin.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            console.log(action.payload);
            state.user = action.payload.user

            localStorage.setItem('token', action.payload.access_token)

            state.status = 'loaded'
        })
        builder.addCase(fetchLogin.rejected, (state) => {
            state.data = null
            state.status = 'error'
        })
        /////////////


        ///fetchLogin
        builder.addCase(fetchRegistration.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchRegistration.fulfilled, (state, action) => {
            state.user = action.payload
            localStorage.setItem('token', action.payload.access_token)
            state.status = 'loaded'
        })
        builder.addCase(fetchRegistration.rejected, (state) => {
            state.user = null
            state.status = 'error'
        })
        ///////

        ///fetchLogout
        builder.addCase(fetchLogout.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchLogout.fulfilled, (state, action) => {
            state.user = null
            localStorage.removeItem('token')
            state.status = 'loaded'
        })
        builder.addCase(fetchLogout.rejected, (state) => {
            state.status = 'error'
        })
        ///////

        ///fetchLogout
        builder.addCase(fetchMe.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchMe.fulfilled, (state, action) => {
            state.user = action.payload
            state.status = 'loaded'
        })
        builder.addCase(fetchMe.rejected, (state) => {
            state.status = 'error'
        })
        ///////

    }
})

export const isAuthSelector = (state) => Boolean(state.auth.user)

export const getUser = (state) => state.auth.user

export const authReducer = authSlice.reducer
