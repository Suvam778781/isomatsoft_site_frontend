import React from 'react';
import { IoMdClose } from "react-icons/io";

const TermsOfServiceModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed text-left inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70">
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
                <h2 className="text-[20px] md:text-[36px] font-bold text-center text-white">
                    TERMS OF SERVICE
                </h2>

                {/* Modal Content */}
                <div className="flex flex-col gap-4 text-center w-full">
                    <p className="text-white mb-4 md:mb-6 text-[14px] md:text-[18px] font-[300]">
                        By using our services, you agree to the following terms and conditions.
                    </p>
                    <div className="text-white flex flex-col gap-2 text-left text-[12px] md:text-[16px] font-[300] leading-relaxed overflow-y-auto max-h-[300px] px-2">
                        <p>
                            <strong>1. Acceptance:</strong> By accessing or using our services, you agree to be bound by these terms. If you disagree with any part, you must discontinue use immediately.
                        </p>
                        <p>
                            <strong>2. User Conduct:</strong> You agree to use the services responsibly and not engage in activities that harm or interfere with the platform, other users, or violate applicable laws.
                        </p>
                        <p>
                            <strong>3. Intellectual Property:</strong> All content and materials on our platform, unless stated otherwise, are the intellectual property of the company and may not be reproduced without permission.
                        </p>
                        <p>
                            <strong>4. Disclaimer:</strong> We provide our services "as is" without guarantees of any kind, including but not limited to accuracy, reliability, or availability.
                        </p>
                        <p>
                            <strong>5. Limitation of Liability:</strong> In no event shall we be held liable for any damages arising out of the use or inability to use the services.
                        </p>
                        <p>
                            For more details, please contact us or refer to the full version of our terms on our website.
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="w-full border-b border-[#FFFFFFB2] py-2 bg-[#FFFFFF33] bg-opacity-30 text-[#000000B2] text-[14px] md:text-[16px] font-[700] rounded-[16px] hover:bg-opacity-50 transition-all h-[100%] min-h-10 mt-4 mb-2"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TermsOfServiceModal;
