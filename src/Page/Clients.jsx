import React, { useState } from 'react';
import betonred from '../assets/image/betonred.png';
import NineCasino from '../assets/image/NineCasino.png';
import bCryptoleo from '../assets/image/Cryptoleo.png';
import BDMBET from '../assets/image/BDMBET.png';

const imageData = [
  { src: betonred },
  { src: NineCasino },
  { src: bCryptoleo },
  { src: BDMBET },
];

const Clients = () => {
    const [selectedIndex, setSelectedIndex] = useState(null); // State to track selected card

    const handleCardClick = (index) => {
      setSelectedIndex(index);
    };
  return (
    <div className="flex  flex-col justify-center items-center gap-[50px] px-4 py-12 text-white text-center">
      {/* Title Section */}
      <div className=' flex flex-col gap-8 max-w-[27%]'>
        <h2 className="text-4xl font-bold mb-4 md:text-[48px] ">OUR CLIENTS</h2>
        <p className="text-lg text-[#FFFFFF99]  md:text-[24px] leading-9 font-[300]">
          Real-world examples of how successful brands can look on our platform
        </p>
      </div>
      {/* Logo Section */}
      <div className="flex flex-wrap justify-center items-center gap-6 w-full">
        {imageData.map((image, index) => (
        <div
        key={index}
        className={` p-6 rounded-[12px] hover:shadow-lg border transition duration-300 ease-in-out ${selectedIndex === index ? 'border-[#AF1917]' : 'border-[#434343]'}`}
        onClick={() => handleCardClick(index)} // Set selected index on click
      >
        <img src={image.src} alt={`Client logo ${index}`} className="w-40 h-auto backdrop-invert-0" />
        <p className="text-[#FFFFFF99] md:text-[24px]">{image.description}</p>
      </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
