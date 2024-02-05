import React, { Component, useEffect, useState } from "react";
import axios from "axios";

interface AztroProps {
  sign: string;
  day: string;
}

interface AztroState {
  json: {
    compatibility?: string;
    lucky_number?: string;

    description?: string;
  };
}

const Aztro: React.FC<AztroProps> = ({ sign, day }) => {
  const [jsonData, setJsonData] = useState<AztroState["json"]>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`
        );
        setJsonData(response.data);
      } catch (error) {
        console.error("Error fetching Aztro data:", error);
      }
    };

    fetchData();
  }, [sign, day]);

  return (
    <div>
      Compatibility: {jsonData.compatibility} <br />
      Lucky Number: {jsonData.lucky_number} <br />
      Description: {jsonData.description} <br />
    </div>
  );
};

export default Aztro;
