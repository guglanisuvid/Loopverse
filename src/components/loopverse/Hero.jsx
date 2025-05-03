import React from "react";
import { signInWithGoogle } from "../../firebase/GoogleAuth";

const Hero = ({ user }) => {
  return (
    <section
      id="hero"
      className="h-screen px-16 pt-24 pb-8 flex justify-between items-center"
    >
      <div className="text-center px-32 flex flex-col gap-8 justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-8xl leading-28 font-medium">
            Connect. Create. Filter. Approve. Upload. Welcome to Loopverse.
          </h1>
          <h3 className="text-xl text-text-200">
            Streamline your Spotify listening and upload videos to YouTube
            effortlessly — all from one platform designed for creators and
            listeners alike.
          </h3>
        </div>
        <button
          onClick={signInWithGoogle}
          disabled={user}
          className={`text-xl font-semibold px-4 py-2 ${
            user
              ? "opacity-24 hover:cursor-not-allowed"
              : "hover:cursor-pointer"
          } border-2 rounded-lg`}
        >
          Join the Loop
        </button>
      </div>
    </section>
  );
};

export default Hero;
