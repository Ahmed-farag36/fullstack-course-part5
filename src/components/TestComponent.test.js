import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";

import TestComponent from "./TestComponent";

let blog;
beforeAll(() => {
	blog = {
		title: "First blog",
		author: "Ahmed Farag",
		likes: 0
	};
});

test("should render content", () => {
	const { container } = render(<TestComponent blog={blog} />);
	const titleAndAuthor = container.querySelector(".blog-title");
	const likes = container.querySelector(".blog-likes");

	expect(titleAndAuthor).toHaveTextContent("First blog Ahmed Farag");
	expect(likes).toHaveTextContent("blog has 0 likeslike");
});

test("should call click handler twice", () => {
	const clickHandlerMock = jest.fn();
	const { container } = render(
		<TestComponent blog={blog} onClick={clickHandlerMock} />
	);
	const likeBtn = container.querySelector(".blog-likes button");

	fireEvent.click(likeBtn);
	fireEvent.click(likeBtn);

	expect(clickHandlerMock).toHaveBeenCalledTimes(2);
});

test("should hide likes section by default", () => {
	const { container } = render(<TestComponent blog={blog} />);
	const likesSection = container.querySelector(".blog-likes");
	const blogTitle = container.querySelector(".blog-title");

	expect(likesSection.style.display).toBe("none");

	fireEvent.click(blogTitle);

	expect(likesSection.style.display).toBe("block");
});
