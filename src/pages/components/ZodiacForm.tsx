import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
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
    zodiacSign: string
  ) => {
    event.preventDefault();
    router.push({
      pathname: '/horoscope',
      query: {
        zodiacSign: zodiacSign.toLowerCase(),
      }
    });
  };

  return (
    <div>
      <label>
        Birth Month:
        <input
          type="text"
          value={formData.month}
          onChange={(e) => setFormData({ ...formData, month: e.target.value })}
        />
      </label>
      <br />
      <label>
        Birth Date:
        <input
          type="text"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      {zodiacSign &&
        <div>
          <p>Your zodiac sign is: {zodiacSign}</p>
          <button onClick={(e) => submitSign(e, zodiacSign)}>Read More</button>

        </div>}

    </div>
  );
};

export default ZodiacForm;
