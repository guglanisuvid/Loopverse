import React from "react";
import Sidebar from "../components/uploop-dashboard/Sidebar";
import Dashboard from "../components/uploop-dashboard/Dashboard";
import GenAi from "../components/uploop-dashboard/GenAi";

const UploopDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl">This is the Uploop Dashboard Route</h1>
      <Sidebar />
      <Dashboard />
      <GenAi />
    </div>
  );
};

export default UploopDashboard;
