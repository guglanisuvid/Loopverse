import React, { useEffect, useState } from "react";
import { Link as LINK } from "react-router-dom";
import { Link } from "react-scroll";
import { getYoutubeAuthorization } from "../../firebase/GoogleAuth";
import { getData } from "../../firebase/Firestore";
import { toast } from "react-toastify";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = ({ user }) => {
  const [ytAuth, setYtAuth] = useState(false);

  useEffect(() => {
    if (user) {
      const isYoutubeAuthorized = async () => {
        const res = await getData(user?.uid);
        if (res?.youtube?.accessToken && res?.youtube?.refreshToken) {
          setYtAuth(true);
        }
      };

      isYoutubeAuthorized();
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
            Create. Collaborate. Approve. Upload — Effortlessly Uploop.
          </h1>
          <h3 className="text-xl text-text-200">
            Uploop bridges the gap between YouTubers and editors, making the
            approve, change and publishing process smoother than ever. One flow.
            Zero headaches.
          </h3>
        </div>
        <div className="flex gap-8 justify-between items-center">
          <Link
            smooth={true}
            duration={500}
            to="workflow"
            className="text-xl font-semibold px-4 py-2 border-2 rounded-lg hover:cursor-pointer"
          >
            See How Uploop Works
          </Link>
          {ytAuth ? (
            <LINK
              to={"/uploop/dashboard"}
              className="text-xl font-medium px-4 py-2 border-2 rounded-lg hover:cursor-pointer"
            >
              Go to Uploop Dashboard
            </LINK>
          ) : (
            <button
              onClick={() => {
                user
                  ? getYoutubeAuthorization()
                  : toast.warning("Please sign in to authorize youtube.", {
                      icon: (
                        <FontAwesomeIcon icon={faWarning} className="text-xl" />
                      ),
                    });
              }}
              className={`text-xl font-semibold px-4 py-2 border-2 rounded-lg z-10 ${
                user
                  ? "hover:cursor-pointer"
                  : "opacity-24 hover:cursor-not-allowed"
              }`}
            >
              Authorize YouTube
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
