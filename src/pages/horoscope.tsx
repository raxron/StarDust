import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/navbar/navbar";

type HoroscopeData = {
  date: string;
  horoscope_data: string;
};

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

  return (
    <div className="bg-dark">
      <Navbar />
      {data ? (
        <>
          <div className="min-h-screen flex items-center justify-center gap-16">
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
                  padding: "15px",
                }}
              >
                <h3
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.5em",
                    marginBottom: "10px",
                  }}
                >
                  {data.date}
                </h3>
                <p>{data.horoscope_data}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Horoscope;
