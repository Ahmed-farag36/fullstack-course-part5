import React, { useState } from "react";
import PropTypes from "prop-types";

const Blog = ({ blog, user, handleLikeBlog, handleDeleteBlog }) => {
	const [showAdditional, setShowAdditional] = useState(false);

	return (
		<li style={{ border: "1px solid", margin: "10px 0" }}>
			<h4 onClick={() => setShowAdditional(!showAdditional)}>
				{blog.title}{" "}
				<strong style={{ color: "white", backgroundColor: "black" }}>
					{blog.author}
				</strong>
			</h4>
			<div style={{ display: showAdditional ? "block" : "none" }}>
				<a href={blog.url}>{blog.url}</a>
				<p>
					{blog.likes} likes
					<button onClick={() => handleLikeBlog(blog.id)}>like</button>
				</p>
				<p>added by {user.username}</p>
				{blog.user.username === user.username ? (
					<button onClick={() => handleDeleteBlog(blog.id)}>remove</button>
				) : null}
			</div>
		</li>
	);
};

Blog.propTypes = {
	blog: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired,
	handleLikeBlog: PropTypes.func.isRequired,
	handleDeleteBlog: PropTypes.func.isRequired
};

export default Blog;
