import React from "react";

const SeeBefore = () => {
  return (
    <section
      id="see-before"
      className="px-16 pt-24 pb-8 flex flex-col gap-2 justify-between items-center"
    >
      <div className="text-7xl leading-24 font-medium p-4">
        Behind the Scenes: Why We Ask for Spotify Access
      </div>
      <div className="text-xl text-text-200 p-4">
        To deliver a personalized experience where you can filter music by
        artist and time period, we request secure access to your Spotify
        account.
        <br />
        <br />
        Here’s how it works:
        <br />
        <span className="font-bold text-text-100">Permission First</span> — You
        approve the access. We never touch your credentials or private data.
        <br />
        <br />
        <span className="font-bold text-text-100">Safe and Limited</span> — We
        only ask for permissions needed to read your library and generate
        filtered playlists — nothing more.
        <br />
        <br />
        <span className="font-bold text-text-100">Made for You</span> — With
        access, we instantly fetch your data and let you customize your
        experience without hassle.
        <br />
        <br />
        Your privacy and trust mean everything to us. Filtered Spotify is built
        to enhance your listening — not complicate it.
      </div>
    </section>
  );
};

export default SeeBefore;
