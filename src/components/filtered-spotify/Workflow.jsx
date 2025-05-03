import React from "react";

const Workflow = () => {
  return (
    <section
      id="workflow"
      className="h-screen px-16 pt-24 flex justify-between items-center pb-8"
    >
      <div className="grid grid-cols-2 gap-8 justify-between items-center">
        <div className="text-7xl leading-24 font-medium p-4">
          How Filtered Spotify Works — Tailor Your Tunes
        </div>
        <div className="text-xl text-text-200 p-4">
          Filtered Spotify is a chrome extension that brings precision to your
          playlists. Here's how it makes your listening better:
          <br />
          <br />
          <span className="font-bold text-text-100">Pick Your Artists</span> —
          Search and select your favorite artists effortlessly.
          <br />
          <br />
          <span className="font-bold text-text-100">Set Your Date Range</span> —
          Choose the era you vibe with — from classic hits to today’s drops.
          <br />
          <br />
          <span className="font-bold text-text-100">Instantly Curate</span> —
          Get a clean playlist that matches exactly what you want — no random
          skips, no noise.
          <br />
          <br />
          Whether you’re deep diving into nostalgia or chasing fresh beats,
          Filtered Spotify gives you full control over what you listen to, all
          in a few clicks.
        </div>
      </div>
    </section>
  );
};

export default Workflow;
