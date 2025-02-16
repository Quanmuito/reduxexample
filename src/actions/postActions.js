import { FETCH_POSTS, NEW_POST } from "./type";

export const fetchPosts = () => (dispatch) => {
	console.log("fetching from actions");
	fetch("https://jsonplaceholder.typicode.com/posts")
		.then((res) => res.json())
		.then((data) =>
			dispatch({
				type: FETCH_POSTS,
				payload: data,
			})
		);
};

export const createPost = (postData) => (dispatch) => {
	console.log("call from actions");
	fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(postData),
	})
		.then((res) => res.json())
		.then((data) =>
			dispatch({
				type: NEW_POST,
				payload: data,
			})
		);
};
