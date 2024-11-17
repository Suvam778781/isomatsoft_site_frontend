import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { sendPostRequest } from "../api/api";

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [email, setEmailOrPhone] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [brief_info, setInfo] = useState("");
  const [website_link, setLinks] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ brief_info: "", website_link: "" });

  const validateInfo = (value) => {
    if (value.length > 400) {
      return "Brief info cannot exceed 400 characters.";
    }
    return "";
  };

  const validateLinks = (value) => {
    const urlRegex =
      /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;
    if (!urlRegex.test(value)) {
      return "Please enter a valid URL.";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    const infoError = validateInfo(brief_info);
    const linksError = validateLinks(website_link);

    if (infoError || linksError) {
      setErrors({ brief_info: infoError, website_link: linksError });
      return;
    }

    const payload = {
      email,
      phone,
      budget,
      brief_info,
      website_link,
    };

    try {
      setLoading(true); // Start loading

      const data = {
        section: "contact_request",
        data: payload,
      };
      const apiUrl = `${import.meta.env.VITE_API_URL}/api/updateData`;
      const response = await sendPostRequest(apiUrl, data);
      console.log("API Response:", response);

      // Reset the form inputs after successful submission
      setEmailOrPhone("");
      setPhone("");
      setBudget("");
      setInfo("");
      setLinks("");
      onClose(); // Close the modal on success (optional)
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70">
      <div
        className="relative w-full overflow-hidden flex flex-col gap-6 md:gap-10 max-w-[90%] md:max-w-[560px] py-6 md:py-8 px-4 md:px-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-[24px] shadow-lg items-center"
        style={{
          background:
            "linear-gradient(275.53deg, rgba(255, 255, 255, 0.06) 4.16%, rgba(255, 255, 255, 0.15) 90.95%)",
        }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
          onClick={onClose}
        >
          <IoMdClose size={30} className="md:size-[45px]" />
        </button>

        {/* Modal Header */}
        <h2 className="text-[24px] md:text-[48px] font-bold text-center text-white">
          CONTACT US
        </h2>

        {/* Modal Content */}
        <div className="flex flex-col gap-2 text-center w-full">
          <p className="text-white mb-4 md:mb-6 text-[16px] md:text-[22px] font-[300]">
            Leave your details, and we'll get in touch to answer your questions
            and tell you more about the Extendy.
          </p>

          {/* Form */}
          <form className="flex flex-col gap-4 md:gap-6 w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email"
              className="w-full px-4 py-2 bg-transparent border-b border-[#FFFFFFB2] text-white focus:outline-none"
              value={email}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Phone number"
              className="w-full px-4 py-2 bg-transparent border-b border-[#FFFFFFB2] text-white focus:outline-none"
              value={phone}
              onChange={(e) => {
                const input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                if (input.length <= 14) {
                  setPhone(input);
                }
              }}
              maxLength={14}
              inputMode="numeric"
              required
            />
            <input
              type="text"
              placeholder="Specify your budget"
              className="w-full px-4 py-2 bg-transparent border-b border-[#FFFFFFB2] text-white focus:outline-none"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Brief info"
              className="w-full px-4 py-2 bg-transparent border-b border-[#FFFFFFB2] text-white focus:outline-none"
              value={brief_info}
              onChange={(e) => {
                setInfo(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  brief_info: validateInfo(e.target.value),
                }));
              }}
              required
            />
            {errors.brief_info && (
              <p className="text-red-500 text-sm">{errors.brief_info}</p>
            )}
            <input
              type="text"
              placeholder="Website links"
              className="w-full px-4 py-2 bg-transparent border-b border-[#FFFFFFB2] text-white focus:outline-none"
              value={website_link}
              onChange={(e) => {
                setLinks(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  website_link: validateLinks(e.target.value),
                }));
              }}
              required
            />
            {errors.website_link && (
              <p className="text-red-500 text-sm">{errors.website_link}</p>
            )}

            <button
              type="submit"
              className="w-full flex justify-center items-center border-b border-[#FFFFFFB2] py-2 bg-[#FFFFFF33] bg-opacity-30 text-[#000000B2] text-[16px] md:text-[20px] font-[700] rounded-[16px] hover:bg-opacity-50 transition-all h-[100%] min-h-10 mt-10 mb-4"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Loading...
                </div>
              ) : (
                "Start a business with us"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
