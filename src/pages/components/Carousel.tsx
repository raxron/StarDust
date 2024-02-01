import Image from "next/image";
import { useState } from "react";
import Data from "../../../data/carouselData.json"
import { ZodiacSign } from "../../../typing";

export default function Carousel() {
    const [zodiac, setZodiac] = useState<ZodiacSign[]>(Data.signs);

    const links = '/assets/signs/';
    const imgWidth = 30;
    const aspectRatio = 1;


    return (
        <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center">

            <h1 className="text-white text-3xl mb-4">
                Click to see each zodiac sign
            </h1>

            <div className="relative flex items-center justify-center h-4/5 w-4/5">
                {zodiac.map((sign,index) => (
                    <div
                        key={sign.id}
                        className="absolute transform origin-center transition-transform"
                        style={{
                            transform: `rotate(${(360 / 12) * index + 270}deg) translateX(15em)`
                        }}
                    >
                        <Image
                            style={{
                                transform: `rotate(-${(360 / 12) * index + 270}deg) `
                            }}
                            src={`${links}${sign.id}.png`}
                            alt={`Zodiac Sign ${sign.id}`}
                            width={imgWidth}
                            height={imgWidth * aspectRatio}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
