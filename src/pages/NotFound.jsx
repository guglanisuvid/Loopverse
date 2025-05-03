import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-8 justify-between items-center">
        <div>Page not found.</div>
        <Link to={"/#hero"}>Go Back To Home Page</Link>
      </div>
    </div>
  );
};

export default NotFound;
