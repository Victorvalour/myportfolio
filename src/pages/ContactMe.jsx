
import React from "react";
import { Link } from "react-router-dom";

const ContactMe = () => {
  return (
    <div className="bg-yellow-100 h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <Link to="/" className="mt-4 text-yellow-500">
        Back to Home
      </Link>
    </div>
  );
};

export default ContactMe;

