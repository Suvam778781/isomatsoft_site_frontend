
import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    // State for input fields
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
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70">
            {/* Modal content */}
            <div className="relative w-full  overflow-hidden flex flex-col gap-6 md:gap-10 max-w-[90%] md:max-w-[560px] py-6 md:py-8 px-4 md:px-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-[24px] shadow-lg items-center" style={{ background: "linear-gradient(275.53deg, rgba(255, 255, 255, 0.06) 4.16%, rgba(255, 255, 255, 0.15) 90.95%)" }}>
                
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
                            placeholder="Email or phone number"
                            className="w-full px-4 py-2 bg-transparent border-b border-[#FFFFFFB2] text-white focus:outline-none"
                            value={emailOrPhone}
                            onChange={(e) => setEmailOrPhone(e.target.value)}
                            required="true"
                        />
                        <input
                            type="text"
                            placeholder="Specify your budget"
                            className="w-full px-4 py-2 bg-transparent border-b border-[#FFFFFFB2] text-white focus:outline-none"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            required="true"
                        />
                        <input
                            type="text"
                            placeholder="Brief info"
                            className="w-full px-4 py-2 bg-transparent border-b border-[#FFFFFFB2] text-white focus:outline-none"
                            value={info}
                            onChange={(e) => setInfo(e.target.value)}
                            required="true"
                        />
                        <input
                            type="text"
                            placeholder="Website links"
                            className="w-full px-4 py-2 bg-transparent border-b border-[#FFFFFFB2] text-white focus:outline-none"
                            value={links}
                            onChange={(e) => setLinks(e.target.value)}
                            required="true"
                        />

                        <button
                            type="submit"
                            className="w-full border-b border-[#FFFFFFB2] py-2 bg-[#FFFFFF33] bg-opacity-30 text-[#000000B2] text-[16px] md:text-[20px] font-[700] rounded-[16px] hover:bg-opacity-50 transition-all h-[100%] min-h-10 mt-10 mb-4"
                        >
                            Start a business with us
                        </button>
                    </form>
                </div>

            
            </div>
        </div>
    );
};

export default ContactModal;
