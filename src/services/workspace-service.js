import { ENDPOINTS } from "../constants/api";

const getWorkspaces = async () => {
	const token = localStorage.getItem("token");

	const response = await fetch(ENDPOINTS.WORKSPACE.USER_WORKSPACE, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if (response.status === 200) {
		const data = await response.json();
		return data;
	}

	return [];
};

const postWorkspaces = async (workspaceData) => {
	const token = localStorage.getItem("token");
    const response = await fetch(ENDPOINTS.WORKSPACE.USER_WORKSPACE, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(workspaceData),
	});

	if (response.status !== 201) {
		return false;
	}
	return true;
};

const workspaceService = {
	getWorkspaces,
	postWorkspaces,
};

export default workspaceService;