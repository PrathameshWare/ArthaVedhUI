import React from "react";

const LogoutButton = ({ onLogout }) => {
  return (
    <button
      onClick={onLogout}
      className="absolute top-4 right-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transform hover:scale-105 transition duration-300"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
