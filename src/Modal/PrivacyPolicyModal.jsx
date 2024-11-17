import React from 'react';
import { IoMdClose } from "react-icons/io";

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70">
            {/* Modal content */}
            <div className="relative w-full overflow-hidden flex flex-col gap-6 md:gap-10 max-w-[90%] md:max-w-[560px] py-6 md:py-8 px-4 md:px-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-[24px] shadow-lg items-center" style={{ background: "linear-gradient(275.53deg, rgba(255, 255, 255, 0.06) 4.16%, rgba(255, 255, 255, 0.15) 90.95%)" }}>
                
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
                    onClick={onClose}
                >
                    <IoMdClose size={30} className="md:size-[45px]" />
                </button>

                {/* Modal Header */}
                <h2 className="text-[24px] md:text-[48px] font-bold text-center text-white">
                    PRIVACY POLICY
                </h2>

                {/* Modal Content */}
                <div className="flex flex-col gap-4 text-left w-full">
                    <p className="text-white mb-4 md:mb-6 text-[16px] md:text-[22px] font-[300]">
                        Your privacy is important to us. This Privacy Policy outlines how we handle your personal information and data.
                    </p>
                    <div className= "flex flex-col gap-2 text-white text-[14px] md:text-[18px] font-[300] leading-relaxed overflow-y-auto max-h-[300px] px-2">
                        <p className="">
                            <strong>1. Data Collection:</strong> We collect your personal information when you interact with our services, including your email, phone number, and other details you share.
                        </p>
                        <p className="">
                            <strong>2. Use of Information:</strong> Your data is used solely to provide you with better services, respond to inquiries, and enhance your experience.
                        </p>
                        <p className="">
                            <strong>3. Data Security:</strong> We implement industry-standard measures to protect your information from unauthorized access, alteration, or disclosure.
                        </p>
                        <p className="">
                            <strong>4. Sharing of Information:</strong> We do not sell, trade, or share your personal data with third parties without your consent, except as required by law.
                        </p>
                        <p className="">
                            <strong>5. Your Rights:</strong> You can request access to the data we store about you or ask for corrections/deletions at any time.
                        </p>
                        <p>
                            For more details, feel free to contact us. By using our services, you agree to this Privacy Policy.
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="w-full border-b border-[#FFFFFFB2] py-2 bg-[#FFFFFF33] bg-opacity-30 text-[#000000B2] text-[16px] md:text-[20px] font-[700] rounded-[16px] hover:bg-opacity-50 transition-all h-[100%] min-h-10 mt-10 mb-4"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyModal;
