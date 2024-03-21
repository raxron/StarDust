import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import Card1 from "../../../public/assets/cards/1.png";
import Card2 from "../../../public/assets/cards/2.png";
import Card3 from "../../../public/assets/cards/3.png";
import Card4 from "../../../public/assets/cards/4.png";

const ZodiacForm = () => {
  const [formData, setFormData] = useState({ month: "", date: "" });
  const [zodiacSign, setZodiacSign] = useState("");
  const [description, setDescription] = useState<string>("");
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await axios.get("/api/zodiac", {
        params: { month: formData.month, date: formData.date },
      });

      const { zodiacSign } = response.data;

      setZodiacSign(zodiacSign);
      setShowResult(true);

      const horoscopeResponse = await axios.post(
        `https://aztro.sameerkumar.website?sign=${zodiacSign.toLowerCase()}&day=today`
      );

      if (
        horoscopeResponse.status === 200 &&
        horoscopeResponse.data &&
        horoscopeResponse.data.description
      ) {
        const { description } = horoscopeResponse.data;
        setDescription(description);
      } else {
        console.error("Invalid or missing horoscope data:", horoscopeResponse);
      }
    } catch (error) {
      console.error("Error fetching zodiac sign or horoscope:", error);
    }
  };

  const router = useRouter();

  const submitSign = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    zodiacSign: any
  ) => {
    event.preventDefault();
    router.push({
      pathname: "/horoscope",
      query: {
        zodiacSign: zodiacSign.toLowerCase(),
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center gap-16 ">
      <Image
        src={Card1}
        width={140}
        height={250}
        alt="card1"
        style={{
          transform: "rotate(-30deg)",
          marginTop: "300px",
          opacity: "0.8",
        }}
      />
      <Image
        src={Card2}
        width={160}
        height={290}
        alt="card1"
        style={{
          transform: "rotate(-15deg)",
          marginTop: "80px",
          opacity: "0.8",
        }}
      />
      {!showResult ? (
        <div
          style={{
            backgroundImage: 'url(/assets/card.png)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            width: "350px",
            height: "550px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "35px",
          }}
        >
          <div
            className="flex flex-col items-center justify-center"

          >
            <p
              className="font-bold mb-12 text-xl text-center"

            >
              Tell Us Your Birthday
            </p>

            <input
              className="placeholder-dark text-center"
              placeholder="Month"
              required
              type="text"
              value={formData.month}
              style={{
                backgroundColor: "#CDCBC0",
                border: "1px dotted black",
                borderRadius: "15px",
                width: "220px",
                padding: "5px",
              }}
              onChange={(e) =>
                setFormData({ ...formData, month: e.target.value })
              }
            />
            <br />

            <input
              className="placeholder-dark text-center"
              placeholder="Date"
              required
              type="text"
              style={{
                backgroundColor: "#CDCBC0",
                border: "1px dotted black",
                borderRadius: "15px",
                width: "220px",
                padding: "5px",
              }}
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
            <br />
            <button
              onClick={handleSubmit}
              className="flex items-center justify-center gap-1"
              style={{
                backgroundColor: "#271F4F",
                color: "white",
                borderRadius: "50px",
                padding: "10px 20px",
                cursor: "pointer",
                width: "220px",
              }}
            >
              <Image src={"/assets/star.png"} width={100} height={100} alt="start" className="w-6 h-auto"/>
              <p>Find Your Star</p>
              <Image src={"/assets/star.png"} width={100} height={100} alt="start" className="w-6 h-auto"/>
            </button>
          </div>
        </div>
      ) : (
        <div
          style={{
            backgroundImage: 'url(/assets/card.png)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            width: "350px",
            height: "550px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "35px",
          }}
        >
          <div
            style={{
              width: "280px",
              height: "480px",
              borderRadius: "30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            <div className="flex flex-col items-center gap-1">
              <Image src={`/assets/signsDark/${zodiacSign.toLowerCase()}.png`} width={100} height={100} className="w-8 h-auto" alt="your zodiac sign" />
              <p className="text-center font-bold text-2xl text-lightPurple">
                {zodiacSign}
              </p>
            </div>

            <button
              onClick={(e) => submitSign(e, zodiacSign)}
              style={{
                backgroundColor: "#271F4F",
                color: "white",
                borderRadius: "50px",
                padding: "10px 20px",
                cursor: "pointer",
              }}
            >
              Daily Horoscope
            </button>
          </div>
        </div>
      )}
      <Image
        src={Card3}
        width={160}
        height={290}
        alt="card1"
        style={{
          transform: "rotate(15deg)",
          marginTop: "80px",
          opacity: "0.8",
        }}
      />
      <Image
        src={Card4}
        width={140}
        height={250}
        alt="card1"
        style={{
          transform: "rotate(30deg)",
          marginTop: "300px",
          opacity: "0.8",
        }}
      />
    </div>
  );
};

export default ZodiacForm;
