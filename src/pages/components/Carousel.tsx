import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import Data from "../../../data/carouselData.json";
import { ZodiacSign } from "../../../typing";
import ZodiacInfo from "./ZodiacInfo";

export default function Carousel() {
  const router = useRouter();
  const [zodiac, setZodiac] = useState<ZodiacSign[]>(Data.signs);
  const [clickedSign, setClickedSign] = useState("unclicked");
  const [clickedSummary, setClickedSummary] = useState("none");
  const [showCompatibilityButton, setShowCompatibilityButton] = useState(false);
  const links = "/assets/signs/";
  const handleCompatibilityClick = () => {
    router.push(`/compatibility?sign=${clickedSign}`);
  };

  return (
    <div
      className="flex flex-col items-center justify-center font-josefine text-center"
      style={{
        minHeight: "80vh",
      }}
    >
      <div className="text-dark relative z-10">
        {clickedSign === "unclicked" ? (
          <h1 className="text-3xl mb-4 text-white font-newYork">
            Click to see each zodiac sign
          </h1>
        ) : (
          <>
            <div className="flex items-center jusity-center flex-col">
              <p className="text-4xl mb-4 font-newYork font-black text-lightPurple">
                {clickedSign}
              </p>
            </div>
            <ZodiacInfo infoSign={clickedSign} />
            {showCompatibilityButton && (
              <button
                onClick={handleCompatibilityClick}
                className="bg-lightPurple text-white py-2 px-4 rounded-md mt-4"
              >
                Compatibility
              </button>
            )}
          </>
        )}
      </div>

      <div
        className="absolute flex items-center justify-center"
        style={{
          height: "37em",
          width: "37em",
          background: `${
            clickedSign === "unclicked"
              ? "radial-gradient(50% 50% at 50% 50%, #3B3170 8.28%, rgba(23, 18, 51, 0.54) 75%)"
              : "radial-gradient(50% 50% at 50% 50%, #CDCBC0 0%, #CDCBC0 55%, rgba(205, 203, 192, 0.06) 100%)"
          }`,
          borderRadius: "100%",
        }}
      >
        {zodiac.map((sign, index) => (
          <div
            onClick={() => {
              setClickedSign(sign.name),
                setClickedSummary(sign.summary),
                setShowCompatibilityButton(true);
            }}
            key={sign.id}
            className="absolute w-16 h-16 transform origin-center transition-transform flex items-center justify-center cursor-pointer"
            style={{
              borderRadius: "50%",
              transform: `rotate(${
                (360 / 12) * index + 270
              }deg) translateX(15em)`,
              background: `${
                clickedSign === sign.name
                  ? "radial-gradient(#17123310,#CDCBC0)"
                  : "radial-gradient(var(--color--dark), #f5df60100)"
              }`,
            }}
          >
            <Image
              style={{
                transform: `rotate(-${(360 / 12) * index + 270}deg) `,
              }}
              src={`${links}${sign.id}.png`}
              alt={`Zodiac Sign ${sign.name}`}
              width="100"
              height="100"
              className="w-8 h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
