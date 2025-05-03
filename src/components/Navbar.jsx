import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithGoogle, userSignOut } from "../firebase/GoogleAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const Navbar = ({ user }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed max-w-[2000px] w-full h-20 -translate-x-1/2 top-0 left-[50%] bg-bg-100 text-text-100 flex gap-8 justify-between items-center px-16 z-50">
      <Link
        to={"/#hero"}
        className="text-3xl font-secondary hover:cursor-pointer"
      >
        Loopverse
      </Link>
      <div>
        {user ? (
          <div>
            <button
              onClick={() => setToggleMenu(!toggleMenu)}
              className="text-xl font-semibold flex gap-2 justify-between items-baseline outline-none z-10 hover:cursor-pointer"
            >
              <span>{user?.name}</span>
              <span className="text-lg">
                <FontAwesomeIcon icon={faArrowDown} />
              </span>
            </button>
            <div
              className={`absolute aspect-video bg-bg-200 p-4 origin-top-right transition duration-400 top-20 right-16 ease-in-out ${
                toggleMenu ? "scale-100 opacity-100" : "scale-0 opacity-0"
              } rounded-2xl`}
            >
              <div className="flex flex-col gap-8 justify-between items-center">
                <Link
                  to={"/uploop#hero"}
                  onClick={() => setToggleMenu(false)}
                  className="hover:cursor-pointer"
                >
                  Uploop
                </Link>
                <Link
                  to={"/filtered-spotify#hero"}
                  onClick={() => setToggleMenu(false)}
                  className="hover:cursor-pointer"
                >
                  Filtered Spotify
                </Link>
                <button
                  onClick={() => {
                    setToggleMenu(false);
                    userSignOut();
                    navigate("/#hero");
                    toast.success(
                      "Signed out successfully. See you again soon!",
                      {
                        icon: (
                          <FontAwesomeIcon
                            icon={faSignOut}
                            className="text-xl"
                          />
                        ),
                      }
                    );
                  }}
                  className="px-4 py-2 border-2 rounded-lg hover:cursor-pointer"
                >
                  Signout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={signInWithGoogle}
            className="px-4 py-2 border-2 rounded-lg hover:cursor-pointer"
          >
            SignIn Loopverse
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
