import React from "react";
import { useState, useEffect } from "react";
import extendyLogo from "../assets/image/extendyLogo copy.png";
import { fetchGetRequest } from "../api/api";
import axios from "axios";
import ContactModal from "../Modal/ContactModal";
const Footer = () => {
  const [footerData, setFooterData] = useState(null);
  const [loading, setLoading] = useState(true);
  // const toast = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleItemClick = (itemName) => {
    if (itemName === "Contact Us") {
      toggleModal();
    } else {
      // Handle other link clicks here if necessary
    }
  };
  useEffect(() => {
    fetchFooterData();
  }, []);

  const fetchFooterData = async () => {
    try {
      const response = await fetchGetRequest(
        `${import.meta.env.VITE_API_URL}/api/getData?section=footer`
      );
      setFooterData(response.data);
      setLoading(false);
    } catch (error) {
      // toast({
      //   title: "Error fetching Footer Section data",
      //   status: "error",
      //   duration: 2000,
      //   isClosable: true,
      // });
      setLoading(false);
    }
  };

  return (
    <footer className="flex max-h-[800px] flex-col justify-end text-white 400 mt-4">
      <div className="w-full">
        <div className="container mx-auto flex flex-col">
          <div className="my-20 flex w-full flex-col items-center">
            {/* Logo */}
            <div className="mb-10 shrink-0">
              <img className="h-9" src={extendyLogo} alt="Logo" />
            </div>

            {/* Navigation Links */}
            <div className="mb-6 flex flex-col items-center gap-6">
              <div className="flex items-center gap-8">
                {footerData?.social_media.map((social) => (
                  <a
                    key={social._id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={social.icon}
                      alt="social icon"
                      width="24"
                      height="24"
                    />
                  </a>
                ))}
              </div>

              {/* Social Icons */}
              {/* <div className="flex items-center gap-8">
                <a href="#facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.6348 20.7273V12.766H16.3582L16.7668 9.66246H13.6348V7.68128C13.6348 6.78301 13.8881 6.17085 15.2029 6.17085L16.877 6.17017V3.39424C16.5875 3.35733 15.5937 3.27273 14.437 3.27273C12.0216 3.27273 10.368 4.71881 10.368 7.37391V9.66246H7.63636V12.766H10.368V20.7273H13.6348Z"
                      fill="#68769F"
                    />
                  </svg>
                </a>
                <a href="#twitter">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.8182 6.14597C21.1356 6.44842 20.4032 6.65355 19.6337 6.74512C20.4194 6.27461 21.0208 5.5283 21.3059 4.64176C20.5689 5.07748 19.7553 5.39388 18.8885 5.56539C18.1943 4.82488 17.207 4.36364 16.1118 4.36364C14.0108 4.36364 12.3072 6.06718 12.3072 8.16706C12.3072 8.46488 12.3408 8.75576 12.4058 9.03391C9.24436 8.87512 6.44106 7.36048 4.56485 5.05894C4.23688 5.61985 4.0503 6.27342 4.0503 6.97109C4.0503 8.29106 4.72246 9.45573 5.74227 10.1371C5.11879 10.1163 4.53239 9.94476 4.01903 9.65967V9.70718C4.01903 11.5498 5.33088 13.0876 7.07033 13.4376C6.75164 13.5234 6.41558 13.5709 6.06791 13.5709C5.82224 13.5709 5.58467 13.5465 5.35173 13.5002C5.83612 15.0125 7.2407 16.1123 8.90485 16.1424C7.60343 17.1622 5.96246 17.7683 4.18012 17.7683C3.87303 17.7683 3.57055 17.7498 3.27273 17.7162C4.95658 18.7974 6.95564 19.4278 9.10418 19.4278C16.1026 19.4278 19.9281 13.6312 19.9281 8.60397L19.9153 8.11145C20.6628 7.57833 21.3094 6.90851 21.8182 6.14597Z"
                      fill="#68769F"
                    />
                  </svg>
                </a>
                <a href="#github">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 3C7.0275 3 3 7.13211 3 12.2284C3 16.3065 5.5785 19.7648 9.15375 20.9841C9.60375 21.0709 9.76875 20.7853 9.76875 20.5403C9.76875 20.3212 9.76125 19.7405 9.7575 18.9712C7.254 19.5277 6.726 17.7332 6.726 17.7332C6.3165 16.6681 5.72475 16.3832 5.72475 16.3832C4.9095 15.8111 5.78775 15.8229 5.78775 15.8229C6.6915 15.887 7.16625 16.7737 7.16625 16.7737C7.96875 18.1847 9.273 17.777 9.7875 17.5414C9.8685 16.9443 10.1003 16.5381 10.3575 16.3073C8.35875 16.0764 6.258 15.2829 6.258 11.7471C6.258 10.7399 6.60675 9.91659 7.18425 9.27095C7.083 9.03774 6.77925 8.0994 7.263 6.82846C7.263 6.82846 8.01675 6.58116 9.738 7.77462C10.458 7.56958 11.223 7.46785 11.988 7.46315C12.753 7.46785 13.518 7.56958 14.238 7.77462C15.948 6.58116 16.7017 6.82846 16.7017 6.82846C17.1855 8.0994 16.8818 9.03774 16.7917 9.27095C17.3655 9.91659 17.6145 10.7399 17.6145 11.7471C17.6145 15.2864 15.5085 16.0749 13.5013 16.3013C13.8165 16.5806 14.0955 17.1039 14.0955 17.8861C14.0955 19.005 14.0835 19.9162 14.0835 20.5403C14.0835 20.7899 14.2433 21.0766 14.6985 20.9841C18.2715 19.7648 20.8463 16.3065 20.8463 12.2284C20.8463 7.13211 16.818 3 12 3Z"
                      fill="#68769F"
                    />
                  </svg>
                </a>
              </div> */}
            </div>

            {/* Footer Links */}
            <div className="mt-2 flex flex-col items-center gap-5">
              <p className="text-xs leading-5 text-dark-grey-400">
                {footerData?.rights}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12">
      {footerData?.links.map((item) => (
        <button
          key={item._id}
          onClick={() => handleItemClick(item.name)}
          className="text-xs font-medium leading-7 text-dark-grey-400 flex items-center gap-2"
        >
          <img src={item.icon} alt={`${item.name} icon`} className="w-4 h-4" />
          {item.name}
        </button>
      ))}

      {/* Conditionally render the Contact Us modal */}
      {isModalOpen && <ContactModal isOpen={isModalOpen} onClose={toggleModal} />}
    </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
