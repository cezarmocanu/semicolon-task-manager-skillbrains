const HOST = "http://209.250.238.186:8081";
const API = `${HOST}/api`;
export const ENDPOINTS = {
	AUTH: {
		LOGIN: `${API}/v1/auth/login`,
		LOGOUT: `${API}/v1/auth/logout`,
	},
	ALL_TASKS: {
		GET_TASKS: (workspaceId) => `${API}/v1/workspaces/${workspaceId}/tasks`,
	},
	WORKSPACE: {
		USER_WORKSPACE: `${API}/v1/workspaces`,
	},
};
