import React from "react";

const SeeBefore = () => {
  return (
    <section
      id="see-before"
      className="px-16 pt-24 pb-8 flex flex-col gap-2 justify-between items-center"
    >
      <div className="text-7xl leading-24 font-medium p-4">
        Behind the Scenes: Why Uploop Needs YouTube Access
      </div>
      <div className="text-xl text-text-200 p-4">
        To help you publish videos directly to your YouTube channel through
        Uploop, we request secure access to your account — with your permission.
        <br />
        <br />
        Here's what happens:
        <br />
        <span className="font-bold text-text-100">Safe and Secure</span> — We
        use YouTube’s official API and OAuth 2.0 — meaning you stay in full
        control and can revoke access anytime.
        <br />
        <br />
        <span className="font-bold text-text-100">No Password Sharing</span> —
        You never share your password with us. We only ask for permissions that
        allow uploading videos and managing drafts.
        <br />
        <br />
        <span className="font-bold text-text-100">
          Built for Your Convenience
        </span>{" "}
        — This access lets Uploop seamlessly upload finalized videos without you
        needing to download, upload manually, or waste time switching between
        apps.
        <br />
        <br />
        We believe in transparency — your trust is everything.
        <br />
        Uploop helps you work faster, without ever compromising your security.
      </div>
    </section>
  );
};

export default SeeBefore;
