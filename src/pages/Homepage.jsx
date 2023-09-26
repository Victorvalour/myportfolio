// components/HomePage.js
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Carousel from "../components/carousel";
import code from "../images/code.png";


const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="bg-blue-100   flex flex-col  items-center pb-8"
    >
        <Navbar />
        <motion.div
            id="card-spin"
            className="w-32 h-32  p-4"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <img
              src={code}
              alt="code"
              className="w-full h-full"
            />
          </motion.div>
    
      <h1 className="text-4xl ml-3 font-bold  self-start text-orange-500">Eweh Victor E.</h1>

      <p className="self-start ml-3 text-xl font-bold ">Front-end Web Developer</p>
      <p className="self-start ml-3 text-lg font-semibold mt-5">Hi there! I build a dynamic and user-friendly web applications. I have a keen eye for design and I love finding new ways of making digital experiences on the web fun and enjoyable.</p>

    <Carousel />

      <Link to="/projects" className="mt-4 text-blue-500 p-2 rounded-lg border-white border-4">
        View full project archive
      </Link>

      <Link to="/about" className="mt-4 text-blue-500">
        About Me
      </Link>

      <Link to="/contact" className="mt-4 text-blue-500">
       Contact Me
      </Link>

    </motion.div>
  );
};

export default HomePage;
