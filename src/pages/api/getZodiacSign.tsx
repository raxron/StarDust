import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  date: string;
  horoscope_data: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const zodiacSign: string = (req.query?.zodiacSign as string) || '';
  
  try {

    const url = `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${encodeURIComponent(
      zodiacSign
    )}&day=TODAY`;

    const response = await fetch(url);

    const data: Data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
  }
}
