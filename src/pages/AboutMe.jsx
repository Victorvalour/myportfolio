// components/AboutUsPage.js
import React from "react";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">About Us</h1>
      <Link to="/" className="mt-4 text-yellow-500">
        Back to Home
      </Link>
    </div>
  );
};

export default AboutMe;
