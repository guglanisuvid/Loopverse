import React from "react";

const Workflow = () => {
  return (
    <section
      id="workflow"
      className="h-screen px-16 pt-24 flex justify-between items-center pb-8"
    >
      <div className="grid grid-cols-2 gap-8 justify-between items-center">
        <div className="text-7xl leading-24 font-medium p-4">
          How Uploop Works — Simplifying Video Collaboration
        </div>
        <div className="text-xl text-text-200 p-4">
          Uploop makes teamwork between YouTubers and editors faster, cleaner,
          and smarter. Here's how:
          <br />
          <br />
          <span className="font-bold text-text-100">Upload Drafts</span> —
          Editors can easily upload draft versions of videos for review.
          <br />
          <br />
          <span className="font-bold text-text-100">Instant Feedback</span> —
          YouTubers can leave comments, suggestions, and approvals right inside
          Uploop — no endless back-and-forth emails.
          <br />
          <br />
          <span className="font-bold text-text-100">Finalize & Publish</span> —
          Once approved, videos are ready to be directly published on the
          YouTuber’s channel — all from a single dashboard.
          <br />
          <br />
          Whether you're an editor juggling multiple projects or a YouTuber
          focused on growing your channel, Uploop keeps you both in sync — so
          you can focus more on creating, not coordinating.
        </div>
      </div>
    </section>
  );
};

export default Workflow;
