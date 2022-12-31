import React from "react";
import { Link } from "react-router-dom";
import useAppState from "../hooks/useAppState";

const Home = () => {
  const { posts } = useAppState();

  return (
    <div className="flex items-center flex-col ">
      {posts.length > 0 ? (
        <ul className="w-full p-10 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2">
          {posts.map((post) => (
            <li
              key={post.id}
              className="flex flex-col max-w-[400px] shadow rounded"
            >
              {post.image && <img src={post.image} alt="" />}
              <div className="flex p-4 flex-col gap-2">
                <h1>{post.title}</h1>
                <Link to={`/edit/${post.id}`} className="px-4 py-2 bg-blue-500 rounded text-center text-white">Edit</Link>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h1 className="text-center font-bold uppercase text-2xl">
          No posts available
        </h1>
      )}
    </div>
  );
};

export default Object.assign(Home, {});
