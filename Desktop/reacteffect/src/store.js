import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./stateSlices/postsSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});
