import React from "react";
import Slider from "react-slick";
import slide_2 from "../assets/image/slide_2.png";
import slide_1 from "../assets/image/slide_1.png";
import slide_3 from "../assets/image/slide_3.png";
import { IoLinkOutline } from "react-icons/io5";
import  '../style/Crousel.css'
// Sample data for images and content
const carouselData = [
  {
    image: slide_1, // Replace with your image path
    title: "BetOnRed",
    description: "BetOnRed Casino focuses on sports, live casino, slots...",
    buttonText: "Go to site",
    link: "#",
  },
  {
    image: slide_2, // Replace with your image path
    title: "Nine Casino",
    description: "Nine Casino offers a premium experience...",
    buttonText: "Go to site",
    link: "#",
  },
  {
    image: slide_3, // Replace with your image path
    title: "Nine Casino",
    description: "Nine Casino offers a premium experience...",
    buttonText: "Go to site",
    link: "#",
  },
];

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mx-auto w-[80%] p-4">
      <Slider {...settings}>
        {carouselData.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[38rem] object-cover rounded-lg"
            />
            <div className=" flex flex-col gap-4 justify-center  p-4 text-white ">
             <div className=" flex items-center justify-center gap-4">
             <h3 className="text-3xl font-bold">{item.title}</h3>
              <button
                onClick={() => window.open(item.link, "_blank")}
                className="px-6 py-2  text-white rounded-lg border border-red-800 transition-all flex items-center gap-2"
              >
                {item.buttonText} <span><IoLinkOutline  color="red"/></span>
              </button>
             </div>
              <p className="text-lg mb-4 flex justify-center">{item.description}</p>
              
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
