import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  date: string;
  horoscope_data: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { zodiacSign } = req.query;

    if (typeof zodiacSign !== 'string') {

      console.log(zodiacSign);
    }

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
