import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loopverse from "./pages/Loopverse";
import Uploop from "./pages/Uploop";
import UploopDashboard from "./pages/UploopDashboard";
import FilteredSpotify from "./pages/FilteredSpotify";
import FilteredSpotifyDashboard from "./pages/FilteredSpotifyDashboard";
import SpotifyCallback from "./pages/SpotifyCallback";
import NotFound from "./pages/NotFound";
import { toast, ToastContainer } from "react-toastify";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        setUser({
          name: user?.displayName,
          email: user?.email,
          photo: user?.photoURL,
          uid: user?.uid,
        });
        toast.success("Signed in successfully. Let’s get started!", {
          icon: <FontAwesomeIcon icon={faSignIn} className="text-xl" />,
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="max-w-[2000px] min-h-screen font-primary bg-bg-100 text-text-100">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Loopverse user={user} />} />
        <Route path="/uploop" element={<Uploop user={user} />} />
        <Route path="/uploop/dashboard" element={<UploopDashboard />} />
        <Route
          path="/filtered-spotify"
          element={<FilteredSpotify user={user} />}
        />
        <Route
          path="/filtered-spotify/dashboard"
          element={<FilteredSpotifyDashboard />}
        />
        <Route
          path="/spotifyCallback"
          element={<SpotifyCallback user={user} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={true}
        rtl={false}
        limit={2}
        theme="dark"
      />
    </div>
  );
};

export default App;
