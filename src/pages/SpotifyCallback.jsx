import React, { useEffect } from "react";
import { getSpotifyToken } from "../spotify/SpotifyAuth";
import { useNavigate } from "react-router-dom";
import { setSpotifyData } from "../firebase/Firestore";

const SpotifyCallback = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const getToken = async () => {
        const res = await getSpotifyToken();
        if (res && user) {
          await setSpotifyData(user?.uid, res);
        }
        navigate("/filtered-spotify");
      };

      getToken();
    }
  }, [user]);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-2xl">
        Authorizing your spotify account and accessing the required data...
      </div>
    </div>
  );
};

export default SpotifyCallback;
