import React, { useState } from "react";
import PropTypes from "prop-types";

const Togglable = props => {
	const [viewForm, setViewForm] = useState(false);

	return (
		<>
			<div style={{ display: viewForm ? "none" : "block" }}>
				<button onClick={() => setViewForm(true)}>new note</button>
			</div>
			<div style={{ display: viewForm ? "block" : "none" }}>
				{props.children}
				<button onClick={() => setViewForm(false)}>cancel</button>
			</div>
		</>
	);
};

Togglable.propTypes = {
	children: PropTypes.object.isRequired
};

export default Togglable;
