import React from "react";
import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div className="sticky top-0 z-[1000] shadow-md px-10 py-4 font-bold text-lg">
        <nav className="flex items-center justify-between p-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/add"}>Add post</Link>
        </nav>
      </div>
      <Outlet />
    </>
  );    
};

export default Root;
