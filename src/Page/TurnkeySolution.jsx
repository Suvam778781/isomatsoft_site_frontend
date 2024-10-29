import turnkey from '../assets/image/turnkey.webp';

const TurnkeySolution = () => {
  return (
    <div className="text-white lg:p-32 md:p-20 sm:p-10 flex flex-col lg:flex-row items-center lg:justify-between p-10">
      {/* Text Section */}
      <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
        <h1 className="text-[31px] sm:text-[48px] lg:text-[64px] font-bold leading-tight">
          Our Turnkey Solution
        </h1>
        <p className="text-[17px] sm:text-[20px] mt-4 leading-relaxed font-light text-center lg:text-left lg:leading-normal lg:mr-2 px-4">
  Our Turnkey online casino is a  platform development service designed to be modular and scalable. It provides a complete technical solution, along with B2B support and account management. With this platform, you can efficiently handle day-to-day casino operations while seamlessly expanding your feature set through our flexible and scalable API architecture.
</p>
      </div>

      <div className="lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src={turnkey} // replace this with your actual image path
          alt="Turnkey Solution Graphic"
          className="w-[90%] sm:w-[80%] lg:w-[75%] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default TurnkeySolution;
