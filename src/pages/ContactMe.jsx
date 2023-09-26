
import React from "react";
import { Link } from "react-router-dom";

const ContactMe = () => {
  return (
    <div className="pt-10 px-3">
        <div className="flex justify-between">
      <h1 className="text-4xl font-bold">Contact Me</h1>

      <Link to="/" className="mt-4 text-yellow-500">
        Back to Home
      </Link>
      </div>


    </div>
  );
};

export default ContactMe;

