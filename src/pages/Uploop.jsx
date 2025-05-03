import React from "react";
import Hero from "../components/uploop/Hero";
import Workflow from "../components/uploop/Workflow";
import SeeBefore from "../components/uploop/SeeBefore";

const Uploop = ({ user }) => {
  return (
    <div className="min-h-screen">
      <Hero user={user} />
      <Workflow />
      <SeeBefore />
    </div>
  );
};

export default Uploop;
