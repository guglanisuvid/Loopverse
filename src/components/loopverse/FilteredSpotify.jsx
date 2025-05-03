import React from "react";
import { Link } from "react-router-dom";

const FilteredSpotify = () => {
  return (
    <section
      id="filtered-spotify"
      className="flex flex-col gap-8 justify-around items-start"
    >
      <div className="flex flex-col gap-4 justify-center">
        <h1 className="text-7xl leading-24 font-medium">Play. Filter. Vibe.</h1>
        <h3 className="text-xl text-text-200">
          Dive into a smarter Spotify experience. Instantly filter songs by your
          favorite artists and time periods — and let the perfect playlist find
          you. Your music, your rules.
        </h3>
      </div>
      <Link
        to={"/filtered-spotify#hero"}
        className="text-xl font-medium px-4 py-2 border-2 rounded-lg hover:cursor-pointer"
      >
        Explore Filtered Spotify
      </Link>
    </section>
  );
};

export default FilteredSpotify;
