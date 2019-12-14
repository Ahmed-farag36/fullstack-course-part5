import React from "react";
import PropTypes from "prop-types";

import { useField } from "../hooks";

const NewBlogForm = ({ handleAddBlog }) => {
	const title = useField("text");
	const author = useField("text");
	const url = useField("text");

	return (
		<>
			<form
				onSubmit={e => handleAddBlog(e, title.value, author.value, url.value)}
			>
				<h1>Create new</h1>
				<label>
					title
					<input {...title} />
				</label>
				<label>
					author
					<input {...author} />
				</label>
				<label>
					url
					<input {...url} />
				</label>
				<button>create</button>
			</form>
		</>
	);
};

NewBlogForm.propTypes = {
	handleAddBlog: PropTypes.func.isRequired
};

export default NewBlogForm;
