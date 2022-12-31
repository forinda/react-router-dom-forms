import React from "react";
import Posts from "../service/PostService";

const useAppState = () => {
  const { addPost, deletePost, posts, updatePost, findPostById } = Posts;
  React.useEffect(() => {}, [posts]);
  return {
    addPost,
    deletePost,
    posts,
    updatePost,
    findPostById,
  };
};

export default useAppState;
