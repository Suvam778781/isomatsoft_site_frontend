import carImage from '../assets/image/carImage.webp';
import '../style/HeroSection.css';

export default function HeroSection() {
  return (
    <section
      className="w-full min-h-screen flex flex-col justify-center items-center text-white md:mt-0 px-6 py-[60px] md:px-16 lg:px-24 herosection"
     
    >
      <div className="w-full max-w-5xl text-center  flex flex-col gap-10">
        <h1 className="text-3xl md:text-[48px] lg:text-[4rem] font-[900] leading-[76px]">
          THE ULTIMATE WHITE-LABEL <br className="hidden md:block" />
          CASINO PLATFORM
        </h1>
        <h2 className="text-lg md:text-xl lg:text-[2.35rem] font-extrabold">
          By affiliates for affiliates
        </h2>
        <p className="text-sm md:text-lg lg:text-xl mt-4 lg:mt-6 text-[#ffffffb2] lg:text-[1.5rem] font-[700] lg:leading-[27px]">
          Get yourself a licensed online casino based on the Extendy proprietary platform
        </p>

        <div className=" ">
          <button className=" text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-[16px] text-base md:text-lg lg:py-[18px] lg:px-[26px]
             " style={{background: "linear-gradient(90deg, #C95C5B 0%, #AF1917 100%)"}}>
            Start a business with us
          </button>
        </div>
      </div>
      
      <div className="w-full max-h-[180px] md:max-h-[240px] lg:max-h-[281px] flex justify-center mt-8 lg:mt-10">
        <img
          src={carImage}
          alt="Car"
          className="w-[85%] md:w-[90%] opacity-40 max-h-[180px] md:max-h-[240px] lg:max-h-[281px]"
        />
      </div>
    </section>
  );
}
