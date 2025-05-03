import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const GoogleSignInButton = () => {
  return (
    <>
      <button className="flex items-center gap-4 px-4 py-2 bg-blue-500 text-white rounded">
        <span>
          <FontAwesomeIcon icon={faGoogle} />
        </span>
        <span>Sign In with Google</span>
      </button>
    </>
  );
};

export default GoogleSignInButton;
