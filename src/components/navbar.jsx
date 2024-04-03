import React, {useState} from "react";
import { Link } from "react-router-dom";
import { motion, useCycle, AnimatePresence } from "framer-motion";


export default function Navbar() {

    const [mobileNav, toggleMobileNav] = useCycle(false, true)

    const [isHovering, setIsHovering] = useState(false)

    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (index) => {
        setActiveItem(index);
    };

    return (

<section className="flex drop-shadow-lg bg-white justify-between w-full h-20 relative z-30">
<div className="flex items-center justify-between  ml-[52px] w-full">
    <div>
        <h2 className="font-skranji text-2xl lg:text-4xl">Hi, welcome to my Portfolio</h2>
    </div>

    <div className="nav hidden md:flex h-16 text-center text-xl text-slate-900 items-center overflow-hidden">
   
    <Link 
    className="nav-item lg:w-[128px]"
    to={"/"}>
        <div 
               className="inner border-r-orange-500 border-r-2 ">
                
                Home
             </div> 
             </Link>
    
             <Link
             className="nav-item lg:w-[128px]"
             to={"/"}>
        <div 
        className="inner border-r-orange-500 border-r-2 ">
          
            Projects</div> 
            </Link>

    <Link 
    className="nav-item lg:w-[128px]"
    to={"/about"}>
        <div className="inner border-r-orange-500 border-r-2 ">About</div>   </Link>
    <Link 
    className="nav-item lg:w-[128px]"
    to={"/contact"}>
        <div className="inner">Contact</div>   </Link>
    </div>
</div> 

<div className="md:hidden">
        <motion.button 
        animate={mobileNav ? "open" : "closed"}
        onClick= {() => toggleMobileNav()}
        className="flex flex-col space-y-1 mt-5 mr-3"
        >
            <motion.span variants={{
                closed: { rotate:0, y: 0},
                open: { rotate:45, y:10},
            }} 
            className="w-12 h-1.5 bg-orange-500 block rounded-sm"></motion.span>
            <motion.span variants={{
                closed: { opacity: 1},
                open: { opacity: 0},
            }} 
            className="w-12 h-1.5 bg-orange-500 block rounded-sm"></motion.span>
            <motion.span  variants={{
                closed: { rotate: 0, y:0},
                open: { rotate: -45, y:-10},
            }} 
             className="w-12 h-1.5 bg-orange-500 block rounded-sm"></motion.span>
        </motion.button>
</div>
    <AnimatePresence>
{mobileNav && ( <motion.div 
key="mobile-nav"
variants={{
    open:{
        x: "0%"
    },
    closed: {
        x: "-180%"
    }
}} 
initial="closed"
animate="open"
exit="closed"

className="fixed z-20 right-0 top-20 shadow-[10px_10px_10px_0px_rgba(0,0,0,0.8)] rounded-2xl bg-violet-600 w-64 md:hidden">
            <div>
                <ul className="flex flex-col text-center my-10 space-y-12">
                   <Link to={"/"}>
                    <li key="1"
                    className="border-b-2 text-2xl font-bold text-white h-10">
                        Home</li>
                    </Link>

                 <Link to={"/projects"}>   <li  key="2"
                    className="border-b-2 text-2xl font-bold text-white text-center">
                       Projects
                    </li>   </Link>


                <Link to={"/about"}>  <li  key="3"
                    className="border-b-2 text-2xl font-bold text-white text-center">
                        About Me
                    </li>   </Link>
                <Link to='/contact'>
                    <li  key="4"
                    className="">
                        <a href="#"
                        className="text-2xl font-bold text-white">Contact</a>
                    </li>
                    </Link>
                </ul>
            </div>
</motion.div>)}
</AnimatePresence>
</section>
    )
}