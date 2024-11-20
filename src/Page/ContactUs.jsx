import React, { useState } from "react";
import { sendPostRequest } from "../api/api";

export const ContactUs = () => {
  const [name,setName]=useState("")
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [info, setInfo] = useState("");
  const [links, setLinks] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ info: "", links: "" });

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
    const infoError = validateInfo(info);
    const linksError = validateLinks(links);

    if (infoError || linksError) {
      setErrors({ info: infoError, links: linksError });
      return;
    }

    const payload = {
      name,
      email: emailOrPhone,
      phone,
      budget,
      brief_info: info,
      website_link: links,
    };

    try {
      setLoading(true); // Start loading
      setErrors({ info: "", links: "" }); // Clear errors

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
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit. Please try again later.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div
      className="flex justify-center items-center bg-opacity-20 max-w-[1200px] m-auto p-4 md:p-10"
      style={{ borderRadius: "36px 36px 0px 0px" }}
    >
      {/* Modal content */}
      <div className="flex flex-col lg:flex-row justify-between py-6 gap-10 bg-opacity-20 backdrop-blur-lg rounded-[24px] shadow-lg items-start">
        {/* Modal Header */}
        <h2 className="text-[24px] md:text-[36px] lg:text-[48px] font-bold text-center lg:text-left text-white lg:w-[40%] mb-4 lg:mb-0">
          CONTACT US
        </h2>

        {/* Modal Content */}
        <div className="flex flex-col gap-4 md:gap-6 lg:w-[60%]">
          <p className="text-white mb-4 md:mb-6 text-[16px] md:text-[18px] lg:text-[22px] font-light">
            Leave your details, and we'll get in touch to answer your questions
            and tell you more about the Extendy.
          </p>

          {/* Form */}
          <form
            className="flex flex-col gap-4 md:gap-6 w-full"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 bg-transparent border-b border-[#FFFFFFB2] text-white focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-transparent border-b border-[#FFFFFFB2] text-white focus:outline-none"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full px-4 py-2 bg-transparent border-b border-[#FFFFFFB2] text-white focus:outline-none"
              value={phone}
              onChange={(e) => {
                const input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                if (input.length <= 14) {
                  setPhone(input); // Allow only up to 14 digits
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
              value={info}
              onChange={(e) => {
                setInfo(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  info: validateInfo(e.target.value),
                }));
              }}
              required
            />
            {errors.info && (
              <p className="text-red-500 text-sm">{errors.info}</p>
            )}
            <input
              type="text"
              placeholder="Website links"
              className="w-full px-4 py-2 bg-transparent border-b border-[#FFFFFFB2] text-white focus:outline-none"
              value={links}
              onChange={(e) => {
                setLinks(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  links: validateLinks(e.target.value),
                }));
              }}
              required
            />
            {errors.links && (
              <p className="text-red-500 text-sm">{errors.links}</p>
            )}

            <button
              type="submit"
              className="w-full flex justify-center items-center border-b border-[#FFFFFFB2] text-white py-2 bg-[#FFFFFF33] bg-opacity-30 text-[16px] md:text-[18px] lg:text-[20px] font-bold rounded-[16px] hover:bg-opacity-50 transition-all h-[100%] min-h-10 mt-8 mb-4"
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
