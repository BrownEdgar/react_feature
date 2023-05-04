import { configureStore } from "@reduxjs/toolkit"
import countReducer from "./features/countSlice";
import dataReducer from "./features/dataSlice";
import postsReducer from "./features/postsSlice";
import personReducer from "./features/personSlice";

export default configureStore({
	reducer: {
		count: countReducer,
		data: dataReducer,
		posts: postsReducer,
		person: personReducer
	}
})

