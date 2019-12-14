import { useState } from "react";

export const useField = type => {
	const [value, setValue] = useState("");

	const onChange = e => {
		setValue(e.target.value);
	};

	const clearfield = () => {
		setValue("");
	};

	return {
		value,
		onChange,
		type,
		onDoubleClick: clearfield
	};
};
