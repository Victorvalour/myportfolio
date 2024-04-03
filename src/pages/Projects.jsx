// components/ProjectPage.js
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Image1 from "../images/image1.jpg"
import Image2 from "../images/image2.jpg"
import Image3 from "../images/image3.jpg"
import chianhomepage from "../images/chianhomepage.jpg"


const projects = [

    {   
        name: "Movie App",
        details: "A personal movie website project that uses the movieDB api to fetch and display movies for users to view.",
        id: "Image1",
        src: Image1,
        languages: "React-js, Tailwindcss",
        link: "https://stage-two-task-victorvalour.vercel.app/"
    
    },
    {   name: "Chian Gas ltd",
    details: "Order for lpg cooking gas from gas vendors near you from the comfort of your home.",
    id: "chianhomepage",
    src: chianhomepage,
    languages: "Next.js, Node.js, MongoDB",
    link: "https://chiangas.com/"
},
    {   name: "Drag and Drop Image app",
        details: "This website use the react-dnd library to implement a drag and drop feature.",
        id: "Image2",
        src: Image2,
        languages: "React-js, Tailwindcss",
        link: "https://stagethree.vercel.app/"
    },
    {   name: "Virtual Credit Card Generator",
        details: "Generate a physical/virtual Dollar or naira credit card for your transactions.",
        id: "Image3",
        src: Image3,
        languages: "React-js, Tailwindcss",
        link: "https://knscardsolution.vercel.app/"
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
                 

                    

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={project.src} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.details}</p>
        <a href={project.link} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            See project
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

                    ))   }
                    </div>
                
                   

        <p className="text-center text-white bg-black">&copy; Victor-V </p>
 </motion.div>
    )
}