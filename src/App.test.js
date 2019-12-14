import React from "react";
import App from "./App";
import { render, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

jest.mock("./services/users");
jest.mock("./services/blogs");

test("should render login form if user not logged in", async () => {
	const { container, rerender } = render(<App />);
	rerender(<App />);
	await waitForElement(() => container.querySelector("h1"));
	const h1 = container.querySelector("h1").textContent;
	const form = container.querySelector("form");
	const ul = container.querySelector("ul");

	expect(h1).toBe("Login to application");
	expect(form).not.toBeNull();
	expect(ul).toBeNull();
});

test("should render blog list if user is logged in", async () => {
	const user = {
		token: "abcdefgh",
		username: "John Doe"
	};
	window.localStorage.setItem("USER_TOKEN", user);
	const { container, rerender } = render(<App />);
	rerender(<App />);
	await waitForElement(() => container.querySelector("ul"));
	const h1 = container.querySelector("h1").textContent;
	const li = container.querySelectorAll("li");

	expect(h1).toBe("Blogs");
	expect(li.length).toBe(3);
	expect(li[0]).toHaveTextContent("HTML is easy");
});
