import axios from "axios";

const baseURL = "/api/blogs";
const extractedToken = window.localStorage.getItem("USER_TOKEN");

const getAllBlogs = async () => {
	try {
		const response = await axios.get(baseURL);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

const addBlog = async (title, author, url) => {
	try {
		const response = await axios.post(
			baseURL,
			{
				title,
				author,
				url
			},
			{
				headers: {
					Authorization: `Bearer ${extractedToken}`
				}
			}
		);
		console.log(response);
		return response;
	} catch (error) {
		console.log(error.response);
		return error.response;
	}
};

const likeBlog = async id => {
	try {
		const response = await axios.put(
			`${baseURL}/${id}`,
			{},
			{
				headers: {
					Authorization: `Bearer ${extractedToken}`
				}
			}
		);
		return response;
	} catch (error) {
		console.log(error);
		return error.response;
	}
};

const deleteBlog = async id => {
	try {
		const response = await axios.delete(`${baseURL}/${id}`, {
			headers: {
				Authorization: `Bearer ${extractedToken}`
			}
		});
		console.log(response);
		return response;
	} catch (error) {
		console.log(error.response);
		return error.response;
	}
};

export { getAllBlogs, addBlog, likeBlog, deleteBlog };
