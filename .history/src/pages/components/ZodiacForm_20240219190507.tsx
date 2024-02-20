import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import Card1 from "../../../public/assets/cards/TAURUS.png";
import Card2 from "../../../public/assets/cards/ARIES.png";
import Card3 from "../../../public/assets/cards/CANCER.png";
import Card4 from "../../../public/assets/cards/CAPRICORN.png";

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
    <div className="min-h-screen flex items-center justify-center gap-16">
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
            backgroundColor: "#CDCBC0",
            width: "300px",
            height: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "35px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              width: "280px",
              height: "480px",
              border: "2px dotted black",
              borderRadius: "30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontSize: "1.4em",
                fontWeight: "bold",
                marginBottom: "30px",
              }}
            >
              Tell Us Your Birthday
            </p>
            <label>
              Month
              <br />
              <input
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
            </label>
            <br />
            <label>
              Date
              <br />
              <input
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
            </label>
            <br />
            <button
              onClick={handleSubmit}
              style={{
                backgroundColor: "#271F4F",
                color: "white",
                borderRadius: "50px",
                padding: "10px 20px",
                cursor: "pointer",
                width: "220px",
              }}
            >
              Find Your Star
            </button>
          </div>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "#CDCBC0",
            width: "300px",
            height: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "35px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              width: "280px",
              height: "480px",
              border: "2px dotted black",
              borderRadius: "30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            <p
              style={{
                textAlign: "center",
              }}
            >
              Your zodiac sign is <br />
              <span style={{ fontWeight: "bold", fontSize: "1.5em" }}>
                {zodiacSign}
              </span>
            </p>
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
              Read More
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
