import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
	name: "authentication",
	initialState: {
		isAuthenticated: false,
	},
	reducers: {
		login(state, action) {
			state.isAuthenticated = true;
			return state;
		},
		logout(state, action) {
			state.isAuthenticated = false;
			localStorage.removeItem("token");
			return state;
		},
	},
});

export const { login, logout } = authenticationSlice.actions;

export const selectAuthentication = (state) => state.authentication;

export default authenticationSlice.reducer;
