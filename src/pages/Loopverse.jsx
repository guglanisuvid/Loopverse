import React from "react";
import Hero from "../components/loopverse/Hero";
import KnowLoopverse from "../components/loopverse/KnowLoopverse";
import Products from "../components/loopverse/Products";

const Loopverse = ({ user }) => {
  return (
    <div className="min-h-screen">
      <Hero user={user} />
      <KnowLoopverse />
      <Products />
    </div>
  );
};

export default Loopverse;
