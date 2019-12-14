const blogs = [
	{
		id: "5a451df7571c224a31b5c8ce",
		title: "HTML is easy",
		author: "Test",
		likes: 10,
		url: "http://",
		user: {
			_id: "5a437a9e514ab7f168ddf138",
			username: "mluukkai",
			name: "Matti Luukkainen"
		}
	},
	{
		id: "5a451e21e0b8b04a45638211",
		title: "Browser can execute only javascript",
		author: "Test",
		likes: 10,
		url: "http://",
		user: {
			_id: "5a437a9e514ab7f168ddf138",
			username: "mluukkai",
			name: "Matti Luukkainen"
		}
	},
	{
		id: "5a451e30b5ffd44a58fa79ab",
		title: "The most important methods of HTTP are GET and POST",
		author: "Test",
		likes: 10,
		url: "http://",
		user: {
			_id: "5a437a9e514ab7f168ddf138",
			username: "mluukkai",
			name: "Matti Luukkainen"
		}
	}
];

export const getAllBlogs = () => {
	return Promise.resolve(blogs);
};
