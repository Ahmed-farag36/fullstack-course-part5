import React, { useState, useEffect } from "react";

import { useField } from "./hooks";

import { signup, login, logout } from "./services/users";
import { getAllBlogs, addBlog, likeBlog, deleteBlog } from "./services/blogs";

import NewBlogForm from "./components/NewBlogForm";
import Alert from "./components/Alert";
import Togglable from "./components/Togglable";
import Blog from "./components/Blog";

function App() {
	const username = useField("text");
	const password = useField("password");
	const [user, setUser] = useState(null);
	const [blogs, setBlogs] = useState([]);
	const [alert, setAlert] = useState({ view: false, data: "", type: false });

	useEffect(() => {
		(async () => {
			try {
				const user = await login();
				setUser(user || null);
				if (!user) return;
				setBlogs(await getAllBlogs());
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	const handleSubmit = async e => {
		try {
			e.preventDefault();

			const response = await signup({ username, password });
			if (response.status !== 201) {
				setAlert({ view: true, data: response.data.message, type: false });
				return;
			}

			const blogs = await getAllBlogs();
			setBlogs(blogs);
			setUser(response.data);
			setAlert({ view: true, data: "Signed up successfully", type: true });
			window.localStorage.setItem("USER_TOKEN", response.data.token);
		} catch (error) {
			console.log(error);
		}
	};

	const handleAddBlog = async (e, title, author, url) => {
		try {
			e.preventDefault();
			const response = await addBlog(title, author, url);
			if (response.status !== 201) {
				setAlert({ view: true, data: response.data.message, type: false });
				return;
			}

			setBlogs([...blogs, response.data]);
			setAlert({ view: true, data: "Blog added successfully", type: true });
		} catch (error) {
			console.log(error);
		}
	};

	const handleLikeBlog = async id => {
		try {
			const response = await likeBlog(id);
			const updatedBlogs = blogs.map(blog => {
				if (blog.id === response.data.id) {
					return response.data;
				}
				return blog;
			});
			updatedBlogs.sort((objA, objB) => objB.likes - objA.likes);
			setBlogs(updatedBlogs);
		} catch (error) {
			console.log(error);
		}
	};

	const handleDeleteBlog = async id => {
		try {
			const response = await deleteBlog(id);
			if (response.status !== 204) {
				setAlert({ view: true, data: "Blog didn't delete", type: false });
				return;
			}
			const filteredBlogs = blogs.filter(blog => blog.id !== id);
			setBlogs(filteredBlogs);
			setAlert({ view: true, data: "Blog deleted successfully", type: true });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="App">
			{user === null ? (
				<div>
					<h1>Login to application</h1>
					<form onSubmit={handleSubmit}>
						<label>
							username
							<input {...username} />
						</label>
						<label>
							password
							<input {...password} />
						</label>
						<button>login</button>
					</form>
				</div>
			) : (
				<div>
					<h1>Blogs</h1>
					<h2>{user.username} is logged in</h2>
					<button onClick={logout}>Logout</button>
					<Togglable>
						<NewBlogForm handleAddBlog={handleAddBlog} />
					</Togglable>
					<ul>
						{blogs.map(blog => (
							<Blog
								key={blog.id}
								blog={blog}
								user={user}
								handleLikeBlog={handleLikeBlog}
								handleDeleteBlog={handleDeleteBlog}
							/>
						))}
					</ul>
				</div>
			)}
			{alert.view ? (
				<Alert setAlert={setAlert} data={alert.data} type={alert.type} />
			) : null}
		</div>
	);
}

export default App;
