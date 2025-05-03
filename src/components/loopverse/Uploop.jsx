import React from "react";
import { Link } from "react-router-dom";

const Uploop = () => {
  return (
    <section
      id="uploop"
      className="flex flex-col gap-8 justify-around items-start"
    >
      <div className="flex flex-col gap-4 justify-center">
        <h1 className="text-7xl leading-24 font-medium">
          Approve. Upload. Uploop.
        </h1>
        <h3 className="text-xl text-text-200">
          From editing to approval to publishing — Uploop makes video
          collaboration seamless and smart. Create once, loop it everywhere.
        </h3>
      </div>
      <Link
        to={"/uploop#hero"}
        className="text-xl font-medium px-4 py-2 border-2 rounded-lg hover:cursor-pointer"
      >
        Discover Uploop
      </Link>
    </section>
  );
};

export default Uploop;
