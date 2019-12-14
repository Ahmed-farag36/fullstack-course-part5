export const login = () => {
	if (!localStorage.getItem("USER_TOKEN")) return Promise.resolve(null);
	return Promise.resolve({ username: "John Doe" });
};
