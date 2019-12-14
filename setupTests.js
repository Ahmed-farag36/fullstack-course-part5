let storage = {};

const localStorageMock = {
	getItem(key) {
		return storage[key];
	},
	setItem(key, value) {
		storage[key] = value;
	}
};

Object.defineProperty(window, "localStorage", { value: localStorageMock });
