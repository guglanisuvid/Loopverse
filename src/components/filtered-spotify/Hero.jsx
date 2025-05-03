import React, { useEffect, useState } from "react";
import { Link as LINK } from "react-router-dom";
import { Link } from "react-scroll";
import { getData } from "../../firebase/Firestore";
import { getSpotifyAuthUrl } from "../../spotify/SpotifyAuth";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

const Hero = ({ user }) => {
  const [spotifyAuth, setSpotifyAuth] = useState(false);

  useEffect(() => {
    if (user) {
      const isSpotifyAuthorized = async () => {
        const res = await getData(user?.uid);
        if (res?.spotify?.accessToken && res?.spotify?.refreshToken) {
          setSpotifyAuth(true);
        }
      };

      isSpotifyAuthorized();
    }
  }, [user]);

  return (
    <section
      id="hero"
      className="h-screen px-16 pt-24 pb-8 flex justify-between items-center"
    >
      <div className="text-center px-32 flex flex-col gap-8 justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-8xl leading-28 font-medium">
            Filter Your Spotify. Find Your Flow.
          </h1>
          <h3 className="text-xl text-text-200">
            Discover the music you actually want to hear. Filtered Spotify lets
            you narrow down your favorites by artist and era — making your
            playlists smarter, sharper, and way more you.
          </h3>
        </div>
        <div className="flex gap-8 justify-between items-center">
          <Link
            smooth={true}
            duration={500}
            to={"workflow"}
            className="text-xl font-semibold px-4 py-2 border-2 rounded-lg hover:cursor-pointer"
          >
            See How Filtered Spotify Works
          </Link>
          {spotifyAuth ? (
            <LINK
              to={"/uploop/dashboard"}
              className="text-xl font-medium px-4 py-2 border-2 rounded-lg hover:cursor-pointer"
            >
              Go to Filtered Spotify Dashboard
            </LINK>
          ) : (
            <button
              onClick={() => {
                user
                  ? getSpotifyAuthUrl()
                  : toast.warning("Please sign in to authorize spotify.", {
                      icon: (
                        <FontAwesomeIcon icon={faWarning} className="text-xl" />
                      ),
                    });
              }}
              className={`text-xl font-semibold px-4 py-2 border-2 rounded-lg ${
                user
                  ? "hover:cursor-pointer"
                  : "opacity-24 hover:cursor-not-allowed"
              }`}
            >
              Authorize Spotify
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
