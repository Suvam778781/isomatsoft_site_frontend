import React, { useEffect, useState } from "react";
import casinoPlatform from "../assets/image/heroSection.webp";
import { fetchGetRequest } from "../api/api";
import axios from "axios";

const stats = [
  { number: 500, label: "Integrated Games" },
  { number: 75, label: "Game Providers" },
  { number: 250, label: "Payment Solution" },
  { number: 12, label: "Turnkey" },
];

// Live counting function
const CountUp = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = Math.floor(2000 / end); // Speed of counting
    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(counter);
    }, duration);

    return () => clearInterval(counter);
  }, [end]);

  return <span>{count}+</span>;
};

const CasinoPlatform = () => {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(heroData, ",,,,,");
  const fetchHeroData = async () => {
    try {
      const response = await fetchGetRequest(
        `${import.meta.env.VITE_API_URL}/api/getData?section=hero_section`
      );
      setHeroData(response.data);
      setLoading(false);
      console.log(response?.data, "data");
    } catch (error) {
      console.log(error, "error");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHeroData();
  }, []);

  return (
    <div className="text-white py-10 relative flex gap-10 flex-col justify-center items-center w-full sm:p-0 p-10">
      <div className="text-center flex flex-col gap-5 sm:max-w-[90%] md:max-w-[80%] lg:max-w-[50%] md:p-0">
        <span className="text-[30px] sm:text-[48px] md:text-[64px] font-[800] leading-none">
          {heroData?.title}
        </span>
        <p className="text-[18px] sm:text-lg mt-2 leading-snug">
          {heroData?.description}
        </p>
      </div>

      {/* Slot machine image */}
      <div className="flex justify-center mb-10">
        <img
          src={heroData?.image}
          alt="Slot Machine"
          className="w-[100%] h-auto"
        />
      </div>

      {/* Stats section */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-[4px] lg:-mt-[150px] md:-mt-[140px] sm:-mt-[120px] w-[90%] lg:w-[80%]">
        {heroData?.countdown_numbers.map((stat, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow-lg flex flex-col justify-center items-center bg-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #050C29 0%, #241158 100%)",
            }}
          >
            <div className="text-[50px] sm:text-[60px] lg:text-[69px] font-bold">
              <CountUp end={stat.value} />
            </div>
            <p className="text-[17px] sm:text-[19px] mt-2">{stat.key}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CasinoPlatform;
