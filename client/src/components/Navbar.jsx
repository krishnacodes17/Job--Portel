import React from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/react";
import { Link } from "react-router-dom";

function Navbar() {
  const { user, isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="shadow py-4">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <img src={assets.logo} alt="Logo" />

        {isSignedIn ? (
          <div className="flex gap-4 items-center max-sm:text-xs">
            <Link
              to="/applications"
              className="text-gray-600 hover:text-gray-900"
            >
              Applied Jobs
            </Link>
            <span className="text-gray-400 font-bold">|</span>
            <span className="text-gray-700 max-sm:hidden">
              Hi, {user?.firstName} {user?.lastName}
            </span>
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-xs items-center">
            <button className="text-gray-600 hover:text-gray-900">
              Recruiter Login
            </button>
            <button
              onClick={() => openSignIn()}
              className="bg-blue-600 text-white px-6 py-2 sm:px-9 rounded-full hover:bg-blue-700 transition"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
