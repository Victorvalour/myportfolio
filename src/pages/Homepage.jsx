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
      className="bg-violet-950   flex flex-col  items-center pb-8"
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
    
      <div className="flex flex-col  items-center md:flex-row md:text-[1.5rem]">
        <div className="md:w-1/2 ml-10">
        <h1 className="text-4xl ml-3 font-bold  self-start text-orange-500 md:self-center md:text-6xl">Eweh Victor E. <span className="text-xl"> (CEO Valvitek)</span></h1>

      <p className="self-start ml-3 text-xl md:text-2xl font-bold text-white ">Fullstack Web Developer</p>
      <p className="self-start ml-3 text-lg md:text-xl font-semibold mt-5 text-slate-300 ">Hi there! I build professional, dynamic and user-friendly web applications for Businesses and companies all over the world. I have a keen eye for design and I love finding new ways of making digital experiences on the web fun and enjoyable.</p>
      </div>
     
     <div className="flex flex-col text-center md:w-1/2 items-center justify-center"> 
     <Link to="/about" className="mt-10 text-white p-2 rounded-lg border-orange-500 border-2 w-52 hover:bg-purple-600 md:w-72">
        About Me
      </Link>

      <Link to="/contact" className="mt-10 text-white p-2 w-52 rounded-lg border-orange-500 border-2 hover:bg-purple-600 md:w-72">
       Contact Me
      </Link>

      <Link to="/projects" className="my-10 text-white p-2 w-52 rounded-lg border-orange-500 border-2 hover:bg-purple-600 md:w-72">
        View full project archive
      </Link>
      </div>

      </div>

      
    

    <Carousel />

     

    </motion.div>
  );
};

export default HomePage;
