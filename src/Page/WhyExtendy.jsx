import React from 'react';
import cardicon1 from '../assets/image/cardicon.png';
import affiliateIcon from '../assets/image/affiliateIcon.png';
import { useState,useEffect } from 'react';
import { fetchGetRequest } from '../api/api';
const WhyExtendy = () => {
  const [aboutData, setAboutData] = useState([]);
  const [loading, setLoading] = useState(true);
 console.log(aboutData,"about-data")
 
  // const toast = useToast();

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      const response = await fetchGetRequest(`${import.meta.env.VITE_API_URL}/api/getData?section=aboutus`);
      setAboutData(response.data);
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error fetching About Us data",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      setLoading(false);
      console.log(error,"error")
    }
  };
 
  return (
    <section className="text-white py-10 px-5 gap-10 rounded-[20px] z-[1000] max-w-7xl flex flex-col items-center justify-center m-auto border border-red-500"
      style={{ background: "linear-gradient(to left, #FFFFFF0B, #FFFFFF26)", border: "2px solid #FFFFFF26" }}>
      
      <h2 className="text-center text-[32px] sm:text-[40px] md:text-[48px] font-bold">{aboutData[0]?.title}</h2>
      
      <p className="text-center text-[16px] sm:text-[20px] md:text-[24px] max-w-7xl mx-auto text-[#FFFFFF99]">
        {aboutData[0]?.description}
      </p>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full ">
        {aboutData[0]?.card_details.map((card, index) => (
          <div
            key={index}
            className="px-4 sm:px-5 md:px-6 py-4 md:py-5 flex flex-col justify-start items-start rounded-[20px] gap-4"
            style={{ backgroundImage: "radial-gradient(at center center, #111746 56%, #3C1F5E 100%)", border: "2px solid #FFFFFF26" }}>
            
            <img
              src={card.icon}
              alt={card.title}
              className="max-w-[50%] sm:max-w-[40%] md:max-w-[30%]"
            />
            
            <h3 className="text-lg sm:text-xl md:text-[24px] font-bold mb-2">{card.title}</h3>
            
            <p className="text-[#FFFFFF99] text-base sm:text-lg md:text-[24px] leading-6 sm:leading-7 md:leading-10 font-[300] pb-5">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyExtendy;



{/* <div className=' flex flex-col gap-8 max-w-[27%]'>
<h2 className="text-4xl font-bold mb-4 md:text-[48px] ">OUR CLIENTS</h2>
<p className="text-lg text-[#FFFFFF99]  md:text-[24px] leading-9 font-[300]">
  Real-world examples of how successful brands can look on our platform
</p>
</div> */}