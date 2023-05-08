import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slices/counter-slice";
import AuthenticationReducer from "./slices/authentication-slice";
import ModalReducer from "./slices/modal-slice";

const store = configureStore({
	reducer: {
		counter: CounterReducer,
		authentication: AuthenticationReducer,
		modal: ModalReducer,
	},
});

export default store;
