
import React from "react";
import { Link } from "react-router-dom";

const ContactMe = () => {
  return (
    <div className="pt-10 h-screen bg-violet-900 px-3 flex flex-col gap-10">
        <div className="flex justify-between">
      <h1 className="text-4xl font-bold">Contact Me</h1>

      <Link to="/" className="mt-4 text-yellow-500">
        Back to Home
      </Link>
      </div>

        <div className="font-bold ml-8">
           <p className="text-black text-2xl mb-8"> Email: <a href="mailto:ewehvictor7@gmail.com" className="underline text-white">ewehvictor7@gmail.com</a> </p>
           <p className="text-black text-2xl mb-8">Phone: <span className="text-white"> +234 806 067 8108 </span></p>

           <p  className="text-black text-2xl mb-8">
            Twitter: <a href="https://twitter.com/victor_valour" className="text-white underline">Eweh Victor E.</a>
           </p>
        </div>

    </div>
  );
};

export default ContactMe;

