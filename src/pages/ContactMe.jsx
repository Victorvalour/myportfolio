
import React from "react";
import { Link } from "react-router-dom";
import vic from "../images/vic.jpg"

const ContactMe = () => {
  return (
    <div className="pt-10 h-screen bg-violet-900 px-3 flex flex-col gap-10">
        <div className="flex justify-between">
      <h1 className="text-4xl font-bold">Contact Me</h1>

      <Link to="/" className="mt-4 text-lg text-yellow-500">
        Back to Home
      </Link>
      </div>

      <img src={vic} alt="" className="rounded-full h-40 w-40 self-center border-4 " />

      
      <div className="text-xl font-semibold text-white">
        <p>Bring in your projects, and I'll be more than happy to work with you to bring them to reality.</p>
        <p>You can me through the details below.</p>
      </div>

        <div className="font-bold ml-4 rounded-2xl border-black border-4 p-4">
           <p className="text-orange-500 text-2xl mb-8"> Email: <a href="mailto:ewehvictor7@gmail.com" className="underline text-white"><br />ewehvictor7@gmail.com</a> </p>
           <p className="text-orange-500 text-2xl mb-8">Phone: <span className="text-white"><br /> +234 806 067 8108 </span></p>

           <p  className="text-orange-500 text-2xl mb-8">
            Twitter: <a href="https://twitter.com/victor_valour" className="text-white underline">
                <br />Eweh Victor E.</a>
           </p>
        </div>

    </div>
  );
};

export default ContactMe;

