import React, { useState } from "react";

const SimpleBlog = ({ blog, onClick }) => {
	const [DetailsShown, setDetailsShown] = useState(false);

	return (
		<div>
			<div
				className="blog-title"
				onClick={() => setDetailsShown(!DetailsShown)}
			>
				{blog.title} {blog.author}
			</div>
			<div
				className="blog-likes"
				style={{ display: DetailsShown ? "block" : "none" }}
			>
				blog has {blog.likes} likes
				<button onClick={onClick}>like</button>
			</div>
		</div>
	);
};

export default SimpleBlog;
