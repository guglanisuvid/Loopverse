import React from "react";
import Hero from "../components/filtered-spotify/Hero";
import Workflow from "../components/filtered-spotify/Workflow";
import SeeBefore from "../components/filtered-spotify/SeeBefore";

const FilteredSpotify = ({ user }) => {
  return (
    <div className="min-h-screen">
      <Hero user={user} />
      <Workflow />
      <SeeBefore />
    </div>
  );
};

export default FilteredSpotify;
