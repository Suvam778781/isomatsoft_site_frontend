import React, { useState,useEffect } from 'react';

import extendyLogo from '../assets/image/extendyLogo copy.png';
import ContactModal from '../Modal/ContactModal';
import axios from 'axios';
import '../style/Border.css'
import { fetchGetRequest } from '../api/api';
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [headerData, setHeaderData] = useState(null);
  const [loading, setLoading] = useState(true);
  // const toast = useToast();
console.log(headerData)
  useEffect(() => {
    fetchHeaderData();
  }, []);

  const fetchHeaderData = async () => {
    try {
      const response = await fetchGetRequest(`${import.meta.env.VITE_API_URL}/api/getData?section=header`);
      setHeaderData(response.data);
      setLoading(false);
    } catch (error) {
      // toast({
      //   title: "Error fetching Header Section data",
      //   status: "error",
      //   duration: 2000,
      //   isClosable: true,
      // });
      // console.log(error,"nnnnnnnn")
      setLoading(false);
    }
  };
  console.log(headerData,"nnnnnnnnnn")

  return (
    <nav
      className="px-6 py-[30px] md:px-20 md:py-[20px]  w-full"
     
    >
      <div className="w-full flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold flex items-center">
          <img
            src={extendyLogo}
            alt="companylogo"
            className="w-[150px] h-[20px] md:w-[200px] md:h-[26px]"
          />
        </div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex gap-4 items-center text-[16px]">
          <a href="#" className="text-white">White Label</a>
          <a href="#" className="text-white">Clients</a>
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex items-center text-[16px]">
          <button
            className="text-white border border-red-800 px-4 py-2 rounded-md"
            onClick={toggleModal}
          >
            Contact Us
          </button>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden">
          <button onClick={toggleModal} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Render Modal */}
      <ContactModal isOpen={isModalOpen} onClose={toggleModal} />
    </nav>
  );
};

export default Navbar;
