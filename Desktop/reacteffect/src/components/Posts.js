import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../stateSlices/postsSlice";

const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const { status, error, posts } = useSelector((state) => state.posts);

  return (
    <div>
      {status === "loading" ? "loading" : ""}
      {posts ? posts.map((post) => <h2 key={post.title}>{post.title}</h2>) : ""}
    </div>
  );
};

export default Posts;
