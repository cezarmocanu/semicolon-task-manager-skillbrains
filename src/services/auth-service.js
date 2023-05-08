import { ENDPOINTS } from "../constants/api";

const login = async (username, password) => {
	const credentials = btoa(`${username}:${password}`);

	const response = await fetch(ENDPOINTS.AUTH.LOGIN, {
		method: "POST",
		headers: {
			Authorization: `Basic ${credentials}`,
		},
	});

	if (response.status !== 200) {
		return false;
	}

	const data = await response.json();
	localStorage.setItem("token", data.token);
	return true;
};

const logout = async () => {
	const token = localStorage.getItem("token");
	await fetch(ENDPOINTS.AUTH.LOGOUT, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	localStorage.removeItem("token");
	return true;
};

const authService = {
	login,
	logout,
};

export default authService;
