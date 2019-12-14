import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Alert = ({ data, type, setAlert }) => {
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setAlert({ view: false, data: "", type: false });
		}, 3000);
		return () => clearTimeout(timeoutId);
	}, [setAlert]);

	return (
		<div
			style={{
				position: "absolute",
				top: "10vh",
				left: 0,
				width: "100%",
				color: "white",
				backgroundColor: type ? "#4ad050" : "#ea3a3a"
			}}
		>
			<h1>{data}</h1>
		</div>
	);
};

Alert.propTypes = {
	data: PropTypes.string.isRequired,
	type: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired
};

export default Alert;
