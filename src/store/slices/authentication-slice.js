import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
	name: "authentication",
	initialState: {
		isAuthenticationInitialized: false,
		isAuthenticated: null,
	},
	reducers: {
		initializeAuth(state, _) {
			const token = localStorage.getItem("token");
			state.isAuthenticated = Boolean(token);
			state.isAuthenticationInitialized = true;
			return state;
		},
		login(state, _) {
			state.isAuthenticated = true;
			return state;
		},
		logout(state, _) {
			state.isAuthenticated = false;
			return state;
		},
	},
});

export const { login, logout, initializeAuth } = authenticationSlice.actions;

export const selectAuthentication = (state) => state.authentication;

export default authenticationSlice.reducer;
