import React from "react";
import Sidebar from "../components/filtered-spotify-dashboard/Sidebar";
import Dashboard from "../components/filtered-spotify-dashboard/Dashboard";
import GenAi from "../components/filtered-spotify-dashboard/GenAi";

const FilteredSpotifyDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl">This is the Filtered Spotify Route</h1>
      <Sidebar />
      <Dashboard />
      <GenAi />
    </div>
  );
};

export default FilteredSpotifyDashboard;
