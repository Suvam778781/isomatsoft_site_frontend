import { useEffect, useState } from "react";
import { fetchGetRequest } from "../api/api"; // Assuming this is your API utility

const TurnkeySolution = () => {
  const [turnKeyData, setTurnKeyData] = useState([]); // Initialize as an array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHeaderData();
  }, []);

  const fetchHeaderData = async () => {
    try {
      const response = await fetchGetRequest(
        `${import.meta.env.VITE_API_URL}/api/getData?section=hero_section`
      );
      setTurnKeyData(response.data.sections); // Expecting response.data.sections to be an array
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Header Section data", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div className="text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 mt-20 space-y-10">
    {turnKeyData.map((item, index) => (
      <div
        key={index}
        className={`flex flex-col lg:flex-row items-center ${
          index % 2 === 0 ? "lg:flex-row lg:px-[120px]" : "lg:flex-row-reverse"
        } w-full`}
      >
        {/* Title and Description Section */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left mb-6 lg:mb-0 px-4">
          <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-bold leading-tight">
            {item.title}
          </h1>
          <p className="text-[14px] sm:text-[17px] md:text-[20px] mt-4 leading-relaxed font-light lg:mr-2">
            {item.description}
          </p>
        </div>
  
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center px-4">
          <img
            src={item.image}
            alt={`${item.title} Graphic`}
            className="w-[90%] sm:w-[80%] lg:w-[75%] h-auto object-contain"
          />
        </div>
      </div>
    ))}
  </div>
  
  );
};

export default TurnkeySolution;
