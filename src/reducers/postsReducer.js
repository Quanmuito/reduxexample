import { FETCH_POSTS, NEW_POST } from "../actions/type";

const initialState = {
	items: [],
	item: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_POSTS:
			console.log("reducer working");
			return {
				...state,
				items: action.payload,
			};
		case NEW_POST:
			console.log("reducer 2 working");
			return {
				...state,
				item: action.payload,
			};
		default:
			return state;
	}
}
