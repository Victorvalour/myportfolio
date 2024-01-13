
import React from "react";
import { Link } from "react-router-dom";
import vic from "../images/vic.jpg"
import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }} className="pt-10 pb-16 h-full bg-violet-900 px-3 flex flex-col gap-10 ">
        <div className="flex justify-between md:mx-48">
      <h1 className="text-4xl font-bold border-b-4 border-b-orange-500">Contact Me</h1>

      <Link to="/" className="mt-4 text-lg text-yellow-500">
        Back to Home
      </Link>
      </div>

      <img src={vic} alt="" className="rounded-xl h-52 w-40 self-center border-4 " />

      
      <div className="text-xl font-semibold text-white md:self-center">
        <p>Bring in your projects, and I'll be more than happy to work with you to bring them to reality.</p>
        <p>You can contact me through the details below.</p>
      </div>

        <div className="font-bold ml-4 rounded-2xl border-black border-4 p-4 md:self-center">
           <p className="text-orange-500 text-2xl mb-8"> Email: <a href="mailto:ewehvictor7@gmail.com" className="underline text-white"><br />ewehvictor7@gmail.com</a> </p>
           <p className="text-orange-500 text-2xl mb-8">Phone: <span className="text-white"><br /> +234 806 067 8108 </span></p>

           <p  className="text-orange-500 text-2xl mb-8">
            Twitter: <a href="https://twitter.com/victor_valour" className="text-white underline">
                <br />Eweh Victor E.</a>
           </p>
        </div>

    </motion.div>
  );
};

export default ContactMe;

