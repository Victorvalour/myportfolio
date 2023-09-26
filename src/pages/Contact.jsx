// components/ProjectPage.js
import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-green-100 h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Contact</h1>
      <Link to="/" className="mt-4 text-green-500">
        Back to Home
      </Link>
    </div>
  );
};

export default Contact;
