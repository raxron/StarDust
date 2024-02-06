import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
          const signToFetch = Array.isArray(zodiacSign) ? zodiacSign[0] : zodiacSign;
          const response = await axios.get(`/api/getZodiacSign?zodiacSign=${encodeURIComponent(signToFetch)}`);
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
    <div>
      {data ? (
        <>
        <h1>Hello</h1>
       
            <div><h3>{data.date}</h3>
            <p>{data.horoscope_data}</p></div>
         
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Horoscope;
