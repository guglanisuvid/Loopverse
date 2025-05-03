import React from "react";
import { Link } from "react-scroll";

const KnowLoopverse = () => {
  return (
    <section
      id="know-loopverse"
      className="h-screen px-16 pt-24 flex justify-between items-center pb-8"
    >
      <div className="grid grid-cols-2 gap-8 justify-between items-center">
        <div className="text-7xl leading-24 font-medium p-4">
          Loopverse — Where Creativity Finds Its Rhythm
        </div>
        <div className="text-xl text-text-200 p-4">
          Loopverse is your creative playground built for the modern world.
          <br />
          <br />
          Whether you're a content creator, a music lover, or someone who simply
          moves at the speed of ideas, we've got you covered.
          <br />
          <br />
          With{" "}
          <Link
            smooth={true}
            duration={500}
            to="products"
            className="font-bold text-text-100 hover:underline underline-offset-4 hover:cursor-pointer"
          >
            Uploop
          </Link>
          , we make video collaboration seamless — from editing to approval to
          publishing, all in one smart flow.
          <br />
          <br />
          And with{" "}
          <Link
            smooth={true}
            duration={500}
            to="products"
            className="font-bold text-text-100 hover:underline underline-offset-4 hover:cursor-pointer"
          >
            Spotify Filtered
          </Link>
          , we help you rediscover your perfect soundtracks — filter your
          favorite tracks by artist and era, and vibe to playlists that feel
          like they were made just for you.
          <br />
          <br />
          Create, collaborate, and vibe smarter — that's the Loopverse way.
        </div>
      </div>
    </section>
  );
};

export default KnowLoopverse;
