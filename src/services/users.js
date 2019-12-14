import axios from "axios";

export const setToken = token => {
	return `Bearer ${token}`;
};

export const signup = async credentials => {
	try {
		const response = await axios.post(
			"http://localhost:3003/api/users/",
			credentials
		);
		console.log(response);
		return response;
	} catch (error) {
		console.log(error.response);
		return error.response;
	}
};

export const login = async () => {
	try {
		const response = await axios.post(
			"http://localhost:3003/api/users/login",
			{},
			{
				headers: {
					Authorization: `Bearer ${window.localStorage.getItem("USER_TOKEN")}`
				}
			}
		);
		console.log(response);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const logout = async () => {
	try {
		window.localStorage.removeItem("USER_TOKEN");
	} catch (error) {
		console.log(error);
	}
};
