import React from "react";
import logo from "../assests/logo.png";

const Loader = () => {
  return (
    <div className="loader">
      <img src={logo} alt="Loading..." />
    </div>
  );
};

export { Loader };
