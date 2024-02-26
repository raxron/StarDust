import { useRouter } from "next/router";
import { useEffect, useState, createRef } from "react";
import axios from "axios";
import Navbar from "./components/navbar/navbar";
import { capitalizeFirstLetter } from "@/utils/capitalLetter";
import Image from "next/image";
import { HoroscopeData } from "../../typing";
import lottie from "lottie-web";


const Horoscope: React.FC = () => {
  const router = useRouter();
  const { zodiacSign } = router.query;
  const [data, setData] = useState<HoroscopeData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (zodiacSign) {
          const signToFetch = Array.isArray(zodiacSign)
            ? zodiacSign[0]
            : zodiacSign;
          const response = await axios.get(
            `/api/getZodiacSign?zodiacSign=${encodeURIComponent(signToFetch)}`
          );
          setData(response.data.data);
          console.log(response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [zodiacSign]);

  const signToFetch = Array.isArray(zodiacSign) ? zodiacSign[0] : zodiacSign;
  const capitalizedString = capitalizeFirstLetter(signToFetch || "");

const animationContainer = createRef<HTMLDivElement>();

useEffect(() => {
  const anim = lottie.loadAnimation({
    container: animationContainer.current!,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "/assets/animations/data.json",
  });

  return () => anim.destroy();
}, []);



  return (
    <div className="bg-dark font-josefine">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center gap-16">
        <Image src={`/assets/characters/${zodiacSign}.png`} alt="zodiac sign background" width={500} height={500} className="opacity-20 absolute w-96 h-auto"/>
        <div
          className="flex items-center justify-center w-2/4 flex-col text-beige gap-8" >
          {data ? (

            <>
              <div className="flex flex-col justify-center items-center gap-2">
                <h3 className="text-lg">
                  {data.date}
                </h3>
                <h2 className="text-4xl font-bold">
                  {capitalizedString} Horoscope
                </h2>
              </div>
              <p>{data.horoscope_data}</p>
            </>

          ) : (
            <p className="w-50" ref={animationContainer}></p>
          )}

        </div>
      </div>

    </div>
  );
};

export default Horoscope;
