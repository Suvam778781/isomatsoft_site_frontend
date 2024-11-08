import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchGetRequest } from '../api/api';

const IconCarousel = () => {
    const [providerIcon, setProviderIcon] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAboutData();
    }, []);

    const fetchAboutData = async () => {
        try {
            const response = await fetchGetRequest(`${import.meta.env.VITE_API_URL}/api/getData?section=aboutus`);
            const iconData = response?.data[0].providers // Flatten to get single array of URLs
            setProviderIcon(iconData);
            setLoading(false);
        
        } catch (error) {
            console.error("Error fetching About Us data:", error);
            setLoading(false);
        }
    };
   
    const settings = {
        dots: false,
        infinite: true,
        speed: 6000,
        slidesToShow: 7,  // Adjusted for large screens to reduce spacing
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1280, // Extra-large screens (desktops)
                settings: {
                    slidesToShow: 8,  // Show 6 icons
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024, // Medium screens (tablets)
                settings: {
                    slidesToShow: 8,  // Show 5 icons
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // Small screens (mobiles)
                settings: {
                    slidesToShow: 4,  // Show 4 icons
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480, // Extra small screens
                settings: {
                    slidesToShow: 3,  // Show 3 icons
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="w-full overflow-hidden px-2 md:px-6 lg:px-10 py-8">
        {loading ? (
            <p>Loading...</p>
        ) : (
            <Slider {...settings}>
                {providerIcon.map((logo, index) => (
                    <div 
                        key={index} 
                        className="flex justify-center items-center  h-full"  // Ensure full height and center alignment
                    >
                        <img 
                            src={logo} 
                            alt={`logo-${index}`} 
                            className="w-[80px] h-[40px] mx-auto"  // Center image with mx-auto
                        />
                    </div>
                ))}
            </Slider>
        )}
    </div>
    );
};

export default IconCarousel;
