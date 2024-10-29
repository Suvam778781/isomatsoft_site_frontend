import React, { useState, useRef, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoLinkOutline } from 'react-icons/io5';
import { fetchGetRequest } from '../api/api';

const ClientsCarousel = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [carouselDatas, setCarouselData] = useState([]);
  const [loading, setLoading] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetchCarouselData();
  }, []);

  const fetchCarouselData = async () => {
    setLoading(true);
    try {
      const response = await fetchGetRequest(`${import.meta.env.VITE_API_URL}/api/getData?section=carausel`);
      setCarouselData(response.data);
      setLoading(false);
      if (response.data.length > 0) {
        setSelectedClient(response.data[0].links.name); // Set default selected client
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const handleCardClick = (clientName) => {
    setSelectedClient(clientName);
    const index = carouselDatas.findIndex((item) => item.name === clientName);
    sliderRef.current.slickGoTo(index);
    console.log(selectedClient,"dddd")
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      const client = carouselDatas[next]?.name;
      if (client) setSelectedClient(client);
    },
    nextArrow: <div className="slick-next">→</div>,
    prevArrow: <div className="slick-prev">←</div>,
  };
 
  return (
    <div className="container mx-auto py-12 flex flex-col gap-10">
      <div className="flex flex-wrap justify-center items-center gap-6 w-full">
        {carouselDatas?.map((client, index) => (
          <div
            key={index}
            className={`flex items-center justify-center w-[250px] py-5 rounded-[8px] hover:shadow-lg border transition duration-300 ease-in-out 
            ${selectedClient === client.links.name ? 'border-[#AF1917]' : 'border-[#434343]'}`}
            onClick={() => handleCardClick(client.links.name)}
          >
            <img
              src={client.logo}
              alt={`Client logo ${index}`}
              className="w-28 h-auto"
              style={{ width: client.width || "auto" }}
            />
          </div>
        ))}
      </div>

      <div className="mx-auto w-[80%]">
        <Slider ref={sliderRef} {...settings}>
          {carouselDatas?.map((item, index) => (
            <div key={index} className="flex flex-col">
              <img
                src={item.image}
                alt={item.name}
                className="sm:w-full h-full object-cover rounded-lg"
              />
              <div className="flex flex-col gap-4 justify-center text-white sm:-mt-10">
                <div className="flex items-center justify-center gap-4 sm:text-2xl text-[18px]">
                  <h3 className="font-bold">{item.links.name}</h3>
                  <button
                    onClick={() => window.open(item.links.link, "_blank")}
                    className="px-3 text-nowrap py-2 font-bold text-white rounded-lg border border-red-800 transition-all flex items-center gap-2 justify-center"
                  >
                    Go to site <IoLinkOutline color="red" size={20} />
                  </button>
                </div>
                <p className="text-lg mb-4 flex justify-center">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientsCarousel;
