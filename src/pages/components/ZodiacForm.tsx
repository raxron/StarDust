import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const ZodiacForm = () => {
  const [formData, setFormData] = useState({ month: "", date: "" });
  const [zodiacSign, setZodiacSign] = useState("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = async () => {
    try {
      const response = await axios.get("/api/zodiac", {
        params: { month: formData.month, date: formData.date },
      });

      const { zodiacSign } = response.data;

      setZodiacSign(zodiacSign);

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
    <div className="min-h-screen flex flex-col items-center justify-center">
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
            padding: "122px  30px",
            maxWidth: "270px",
            border: "2px dotted black",
            borderRadius: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2px",
          }}
        >
          <label>
            Birth Month
            <input
              type="text"
              value={formData.month}
              style={{
                backgroundColor: "#CDCBC0",
                border: "1px dotted black",
                borderRadius: "15px",
                padding: "5px",
              }}
              onChange={(e) =>
                setFormData({ ...formData, month: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            Birth Date
            <input
              type="text"
              style={{
                backgroundColor: "#CDCBC0",
                border: "1px dotted black",
                borderRadius: "15px",
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
            }}
          >
            Find Your Star
          </button>
          {zodiacSign && (
            <div>
              <p>Your zodiac sign is: {zodiacSign}</p>
              <button onClick={(e) => submitSign(e, zodiacSign)}>
                Read More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ZodiacForm;
