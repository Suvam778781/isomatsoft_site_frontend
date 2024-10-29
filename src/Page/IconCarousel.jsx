import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon from '../assets/image/iconcrousel.png';

const logos = [
    icon, icon, icon, icon, icon, icon, 
    icon, icon, icon, icon, icon, icon, 
    icon, icon, icon
];

const IconCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 6000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024, // Medium screens (tablets)
                settings: {
                    slidesToShow: 4,  // Show 4 logos at once
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // Small screens (mobiles)
                settings: {
                    slidesToShow: 3,  // Show 3 logos at once
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480, // Extra small screens
                settings: {
                    slidesToShow: 2,  // Show 2 logos at once
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='w-full overflow-hidden px-4 md:px-10 lg:px-20 py-10'>
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <div 
                        key={index} 
                        className="flex justify-center items-center p-2 md:p-4 lg:p-6"
                    >
                        <img 
                            src={logo} 
                            alt={`logo-${index}`} 
                            style={{ maxWidth: '150px', height: 'auto' }} 
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default IconCarousel;
