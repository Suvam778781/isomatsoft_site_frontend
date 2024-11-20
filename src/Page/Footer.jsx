import React from "react";
import { useState, useEffect } from "react";
import extendyLogo from "../assets/image/extendyLogo copy.png";
import { fetchGetRequest } from "../api/api";
import axios from "axios";
import ContactModal from "../Modal/ContactModal";
import PrivacyPolicyModal from "../Modal/PrivacyPolicyModal";
import TermsOfServiceModal from "../Modal/TermsOfServiceModal";
const Footer = () => {
  const [footerData, setFooterData] = useState(null);
  const [loading, setLoading] = useState(true);
  // const toast = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setTermsModalOpen] = useState(false);
  let companyLogo = localStorage.getItem("company-logo");

  const toggleContactModal = () => {
    setContactModalOpen((prev) => !prev);
  };

  const togglePrivacyModal = () => {
    setPrivacyModalOpen((prev) => !prev);
  };

  const toggleTermsModal = () => {
    setTermsModalOpen((prev) => !prev);
  };
  const handleItemClick = (itemName) => {
    if (itemName === "Contact Us") {
      toggleContactModal();
    } else if (itemName === "Privacy Policy") {
      togglePrivacyModal();
    } else if (itemName === "Terms of Service") {
      toggleTermsModal();
    } else {
      // Handle other link clicks if necessary
      console.log("Handle other links here: ", itemName);
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
  console.log(footerData, "footer-data");
  return (
    <footer className="flex max-h-[800px] flex-col justify-end text-white 400 mt-4">
      <div className="w-full">
        <div className="container mx-auto flex flex-col">
          <div className="my-20 flex w-full flex-col items-center">
            {/* Logo */}
            <div className="mb-10 shrink-0">
              <img className="h-9" src={companyLogo} alt="Logo" />
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
                      width="30"
                      height="30"
                    />
                  </a>
                ))}
              </div>
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
                    className="text-xs border px-2 py-1 font-medium text-dark-grey-400  rounded-full  flex items-center gap-2"
                  >
                    <span className="flex justify-center items-center bg-slate-50 rounded-full p-1">
                      <img
                        src={item.icon}
                        alt={`${item.name} icon`}
                        className={` w-4 h-4  ${
                          item.name === "Terms of Service" ? "p-[1.5px]" : ""
                        }`}
                      />
                    </span>
                    {item.name}
                  </button>
                ))}

                {/* Conditionally render the Contact Us modal */}
                {isContactModalOpen && (
                  <ContactModal
                    isOpen={isContactModalOpen}
                    onClose={toggleContactModal}
                  />
                )}
                {isPrivacyModalOpen && (
                  <PrivacyPolicyModal
                    isOpen={isPrivacyModalOpen}
                    onClose={togglePrivacyModal}
                  />
                )}
                {isTermsModalOpen && (
                  <TermsOfServiceModal
                    isOpen={isTermsModalOpen}
                    onClose={toggleTermsModal}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
