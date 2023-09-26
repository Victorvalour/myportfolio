import React, { useEffect, useState } from "react";

import leftArrow from "../images/left-arrow.png"
import rightArrow from "../images/right-arrow.png"
import Image1 from "../images/image1.jpg"
import Image2 from "../images/image2.jpg"
import Image3 from "../images/image3.jpg"
import Image4 from "../images/image4.jpg"
import Image5 from "../images/image5.jpg"


const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5 
]

export default function Carousel() {
const [currentSlide, setCurrentSlide] = useState(0)
const prev = () => setCurrentSlide((currentSlide) => ((currentSlide) === 0 ? images.length -1 : currentSlide - 1))

const next = () => setCurrentSlide((currentSlide) => (currentSlide === images.length - 1 ? 0 : currentSlide + 1))

const autoslide = true
const autoSlideInterval = 4000

useEffect(() => {
    if (!autoslide) return 
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
}, [])

  return (
    <div className="carousel-container overflow-hidden relative mt-12 w-[90%] md:w-[50%]">
     
      <div className="carousel-slides flex gap-4 transition-transform ease-out duration-500" style={{transform: `translateX(-${currentSlide * 100}%)`}}>
        {images.map((image, index) => (
    
            <img src={image} alt={`Slide ${index}`} className=" h-80 w-96 border-3 border-black" />
    ))    }
        </div>
     <div className="absolute inset-0 flex items-center justify-between ">
        <button onClick={prev}
        className="w-12">
            <img src={leftArrow} alt="" />
        </button>
        <button onClick={next}
        className="w-12">
            <img src={rightArrow} alt="" />
        </button>

        </div>
        <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
                {images.map((_, i) => (
                    <div className={`transition-all w-3 h-3 bg-white rounded-full ${currentSlide === i ? "p-2" : "bg-opacity-50"}`} />
                ))
                }

            </div>

        </div>

    </div>
        )
};


