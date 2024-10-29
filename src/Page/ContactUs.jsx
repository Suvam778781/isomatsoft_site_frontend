import React, { useState } from 'react'

export const ContactUs = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [budget, setBudget] = useState('');
    const [info, setInfo] = useState('');
    const [links, setLinks] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ emailOrPhone, budget, info, links });

        // Reset the form input states if needed
        setEmailOrPhone('');
        setBudget('');
        setInfo('');
        setLinks('');
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
              <form className="flex flex-col gap-4 md:gap-6 w-full" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Email or phone number"
                  className="w-full px-4 py-2 bg-transparent border-b border-[#FFFFFFB2] text-white focus:outline-none"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Specify your budget"
                  className="w-full px-4 py-2 bg-transparent border-b border-[#FFFFFFB2] text-white focus:outline-none"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Brief info"
                  className="w-full px-4 py-2 bg-transparent border-b border-[#FFFFFFB2] text-white focus:outline-none"
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Website links"
                  className="w-full px-4 py-2 bg-transparent border-b border-[#FFFFFFB2] text-white focus:outline-none"
                  value={links}
                  onChange={(e) => setLinks(e.target.value)}
                />
      
                <button
                  type="submit"
                  className="w-full border-b border-[#FFFFFFB2] text-white py-2 bg-[#FFFFFF33] bg-opacity-30 text-[16px] md:text-[18px] lg:text-[20px] font-bold rounded-[16px] hover:bg-opacity-50 transition-all h-[100%] min-h-10 mt-8 mb-4"
                >
                  Start a business with us
                </button>
              </form>
            </div>
          </div>
        </div>
      );
      
}
