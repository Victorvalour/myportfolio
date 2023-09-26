// components/ProjectPage.js
import React from "react";
import { Link } from "react-router-dom";

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
    <div className="bg-indigo-900 pt-1">

        <div className="flex justify-between mx-4 my-8">
      <h1 className="text-4xl font-bold text-black border-b-orange-500 border-b-4 p-2">Projects</h1>
      <Link to="/" className="mt-4 text-black-500 text-xl text-orange-400">
        Back to Home
      </Link>
    </div>
    
            <div className="flex gap-10 flex-wrap md:mx-6 justify-center ">
            
            
                 {projects.map((project, index) => (
                    <div className="mb-5 rounded-lg border-white border-4 shadow-[10px_10px_10px_0px_rgba(0,0,0,0.8)]"> 

                    <a href={project.link} >
                    <img src={project.src} alt="" className="w-72 h-60 md:w-96 "/>

                  <div className="h-10 bg-gray-300 ">  <p className="text-lg text-center font-bold ">{project.name}</p>
                  </div>

                    <div className="text-lg bg-gray-400 text-center">
                        <p>
                            {project.languages}
                        </p>
                    </div>
                    </a>
                    </div>    ))   }
                    </div>
                
                   

        <p className="text-center text-white bg-black">&copy; Victor-V </p>
 </div>
    )
}