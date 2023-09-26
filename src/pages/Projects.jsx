// components/ProjectPage.js
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Image1 from "../images/image1.jpg"
import Image2 from "../images/image2.jpg"
import Image3 from "../images/image3.jpg"
import Image4 from "../images/image4.jpg"
import Image5 from "../images/image5.jpg"


const projects = [
    {   name: "Movie App",
        id: "Image1",
        src: Image1,
        languages: "React-js, Tailwindcss",
        link: "https://stage-two-task-victorvalour.vercel.app/"
    
    },
    {   name: "Drag and Drop Image app",
        id: "Image2",
        src: Image2,
        languages: "React-js, Tailwindcss",
        link: "https://stagethree.vercel.app/"
    },
    {   name: "Virtual Credit Card Generator",
        id: "Image3",
        src: Image3,
        languages: "React-js, Tailwindcss",
        link: "https://knscardsolution.vercel.app/"
    },
    {   name: "Pricing Card",
        id: "Image4",
        src: Image4,
        languages: "HTML/CSS/JS",
        link: "https://victorvalour.github.io/Pricing-Card-Challenge/"
    },
    {   name: "Food Delivery Web App",
        id: "Image5",
        src: Image5,
        languages: "HTML/CSS/JS",
        link: "https://victorvalour.github.io/Mias_kitchen/"
    },

]


export default function Projects() {



    return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }} className="bg-violet-950 pt-1">

        <div className="flex justify-between mx-4 my-8">
      <h1 className="text-4xl font-bold text-white border-b-black border-b-4 p-2">Projects</h1>
      <Link to="/" className="mt-4 text-black-500 text-xl text-orange-400">
        Back to Home
      </Link>
    </div>
    
            <div className="flex gap-10 flex-wrap md:mx-6 justify-center ">
            
            
                 {projects.map((project, index) => (
                    <div className="mb-5 rounded-lg border-white border-4 shadow-[10px_10px_10px_0px_rgba(0,0,0,0.8)]"> 

                    <a href={project.link} >
                    <img src={project.src} alt="" className="w-72  md:w-96 "/>

                  <div className="h-16 flex justify-center items-center bg-purple-950 ">  <p className="text-2xl text-center font-bold text-white">{project.name}</p>
                  </div>

                    <div className="text-xl h-12 flex  bg-purple-600 text-center">
                        <p className="ml-8 text-white"> <span className="font-bold">Languages: </span>  
                            {project.languages}
                        </p>
                    </div>
                    </a>
                    </div>    ))   }
                    </div>
                
                   

        <p className="text-center text-white bg-black">&copy; Victor-V </p>
 </motion.div>
    )
}