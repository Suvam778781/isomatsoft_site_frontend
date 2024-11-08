import { useEffect,useState } from "react";
import axios from "axios";
import turnkey from "../assets/image/turnkey.webp";
import { fetchGetRequest } from "../api/api";
const TurnkeySolution = () => {
  const [turnKeyData, setTurnKeyData] = useState(null);
  const [loading, setLoading] = useState(true);
  // const toast = useToast();

  useEffect(() => {
    fetchHeaderData();
  }, []);

  const fetchHeaderData = async () => {
    try {
      const response = await fetchGetRequest(`${import.meta.env.VITE_API_URL}/api/getData?section=hero_section`);
      setTurnKeyData(response.data.sections[0]);

      setLoading(false);
  

    } catch (error) {
      // toast({
      //   title: "Error fetching Header Section data",
      //   status: "error",
      //   duration: 2000,
      //   isClosable: true,
      // });
      // console.log(error,"nnnnnnnn")
      
      setLoading(false);
    }
  };


  return (
    <div className="text-white lg:p-32 md:p-20 sm:p-10 flex flex-col lg:flex-row items-center lg:justify-between p-10">
      {/* Text Section */}
      {turnKeyData&&(
  <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
  <h1 className="text-[31px] sm:text-[48px] lg:text-[64px] font-bold leading-tight">
  {turnKeyData?.title}
  </h1>
  <p className="text-[17px] sm:text-[20px] mt-4 leading-relaxed font-light text-center lg:text-left lg:leading-normal lg:mr-2 px-4">
{turnKeyData?.description}
  </p>
</div>
      )}
    

 {turnKeyData&&(
       <div className="lg:w-1/2 flex justify-center lg:justify-end">
       <img
         src={turnKeyData?.image} // replace this with your actual image path
         alt="Turnkey Solution Graphic"
         className="w-[90%] sm:w-[80%] lg:w-[75%] h-auto object-contain"
       />
     </div>
 )}
    </div>
  );
};

export default TurnkeySolution;
