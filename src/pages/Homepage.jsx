// components/HomePage.js
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
//import Carousel from "../components/carousel";
import code from "../images/code.png";

import dots from '../images/svgs/dots.svg'
import dots1 from '../images/svgs/dots1.svg'
import star from '../images/svgs/star.svg'

// Shad-cn
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"
//images
import cth from '../images/cth1.jpg'
import img from '../images/img.jpg'
import img3 from '../images/img3.webp'


const projects = [
  { key: 1,
    image: cth,
  title: "Project 1"},
  { key: 2,
    image: img,
  title: "Project 2"},
  { key: 3,
    image: img3,
  title: "Project 3"}
]

const HomePage = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="bg-[#350261]   flex flex-col relative items-center pb-8"
    >
        <Navbar />
        
<img src={dots} alt="" className="w-32 absolute top-14 opacity-60 hidden md:block"/>
      
<img src={dots} alt="" className="w-32 absolute top-[200px] opacity-50 "/>
<img src={dots} alt="" className="w-32 absolute top-14 left-16 opacity-50 "/>
<img src={dots1} alt="" className="w-64 absolute top-[400px] left-16 opacity-40 text-white "/>
<img src={dots1} alt="" className="w-52 absolute top-[150px] right-[10%] opacity-20 text-white "/>
<img src={star} alt="" className="w-32 absolute top-[300px] left-[40%] opacity-10 text-white "/>

       {/*  <motion.div
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
          </motion.div> */}
    
      <div className="flex flex-col  items-center md:flex-row md:text-[1.5rem] z-20">
        <div className="md:w-1/2 ml-10 self-start pt-[20px] md:pt-[100px]">
        <h1 className="text-4xl ml-3 font-bold  self-start text-orange-500 md:self-center md:text-6xl">Eweh Victor E. </h1>

      <p className="self-start ml-3 text-xl md:text-2xl font-bold text-white ">Fullstack Web Developer</p>
      <p className="self-start ml-3 text-lg md:text-xl font-semibold mt-5 text-slate-200 ">Hi there! <br /> I build professional, dynamic and user-friendly Full-stack web applications.<br />I have a keen eye for design and I love finding new ways of making digital experiences on the web functional and enjoyable.</p>
      </div>
     
     <div className="flex flex-col text-center md:w-1/2 items-center justify-center"> 
     <Link to="/about" className="btn mt-10 text-white  p-2 rounded-lg border-orange-500 border-2 w-52  md:w-72">
       <div className="text-bg">
          About Me
          </div>
      </Link>

      <Link to="/contact" className="btn mt-10 text-white  p-2 w-52 rounded-lg border-orange-500 border-2  md:w-72">
         <div className="text-bg">
       Contact Me
       </div>
      </Link>

      <Link to="/projects" className="btn my-10 text-white  p-2 w-52 rounded-lg border-orange-500 border-2  md:w-72">
        <div className="text-bg">
        View full project archive
        </div>
      </Link>
<div className="w-full self-center flex justify-center">
    
   
      <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      
      <CarouselContent className="w-full">
        {Array.from({ length: projects.length }).map((_, index) => (
          
          <CarouselItem key={index}>
            <div className="p-2 overflow-hidden">
              <Card>
                
                <CardContent className="flex aspect-square items-center justify-center p-1 h-full">
                <span className="text-4xl font-semibold h-full">
                {
                  <div className="w-full h-full">
               <img src={projects[index].image} alt="" className="h-[200px] object-fill" />
               
               </div>
               }</span>
               
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
   
    </div>
      </div>

      </div>

      
    </motion.div>
  );
};

export default HomePage;
