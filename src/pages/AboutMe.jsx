// components/AboutUsPage.js
import React from "react";
import { Link } from "react-router-dom";
import vic2 from "../images/vic.jpg"

const AboutMe = () => {
  return (
    <div className="pt-10 h-full px-3 bg-indigo-950 flex flex-col gap-10 ">
        <div className="flex justify-between md:mx-44">
      <h1 className="text-4xl font-bold text-white border-b-4 border-orange-500">About Me</h1>

      <Link to="/" className="mt-4 text-yellow-500 text-xl">
        Back to Home
      </Link>
      </div>

      <img src={vic2} alt=""  className="rounded-xl h-52 w-40 self-center border-4"/>

        <div className="mt-3 text-xl self-center md:text-2xl">
            <p className="text-slate-200">
                Being a tech enthusiast, I have always had the desire and passion to learn new things. <br /> My journer as a developer started about 7 years ago. and so far, I can say that it has really been awesome. <br /> 
                So far, I have been able to acquire a lot of useful skills in the tech world, including programming languages like: <br /> <span className="text-orange-500 font-bold">Javascript, <br />CSS, <br />HTML, <br />React, <br /> Typescript, <br />NodeJS, <br />Tailwind</span> and a few others.
            </p>

        </div>

    </div>
  );
};

export default AboutMe;
