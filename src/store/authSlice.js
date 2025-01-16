import { createSlice } from "@reduxjs/toolkit";
import authService from "../appwrite/auth";

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const user = action.payload;
            const session = authService.loginUser(user);

            if (session) {
                state.status = true
                state.userData = user
            } else return;
        },

        logout: (state) => {
            const sessionTerminated = authService.logoutUser();

            if (sessionTerminated) {
                state.status = false,
                state.userData = null
            } else return;
        } 
    }
});


export const { login, logout } = authSlice.actions;

export default authSlice.reducer;