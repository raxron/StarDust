import { NextApiRequest, NextApiResponse } from 'next';

const getZodiacSign = (month: number, date: number): string => {
  const dateToCheck = new Date(2000, month - 1, date); 

  if ((month === 3 && date >= 21) || (month === 4 && date <= 19)) {
    return 'Aries';
  } else if ((month === 4 && date >= 20) || (month === 5 && date <= 20)) {
    return 'Taurus';
  } else if ((month === 5 && date >= 21) || (month === 6 && date <= 20)) {
    return 'Gemini';
  } else if ((month === 6 && date >= 21) || (month === 7 && date <= 22)) {
    return 'Cancer';
  } else if ((month === 7 && date >= 23) || (month === 8 && date <= 22)) {
    return 'Leo';
  } else if ((month === 8 && date >= 23) || (month === 9 && date <= 22)) {
    return 'Virgo';
  } else if ((month === 9 && date >= 23) || (month === 10 && date <= 22)) {
    return 'Libra';
  } else if ((month === 10 && date >= 23) || (month === 11 && date <= 21)) {
    return 'Scorpio';
  } else if ((month === 11 && date >= 22) || (month === 12 && date <= 21)) {
    return 'Sagittarius';
  } else if ((month === 12 && date >= 22) || (month === 1 && date <= 19)) {
    return 'Capricorn';
  } else if ((month === 1 && date >= 20) || (month === 2 && date <= 18)) {
    return 'Aquarius';
  } else {
    return 'Pisces';
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { month, date } = req.query;

  if (!month || !date) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  const monthNumber = parseInt(month as string, 10);
  const dateNumber = parseInt(date as string, 10);

  if (isNaN(monthNumber) || isNaN(dateNumber) || monthNumber < 1 || monthNumber > 12 || dateNumber < 1 || dateNumber > 31) {
    return res.status(400).json({ error: 'Invalid parameters' });
  }

  const zodiacSign = getZodiacSign(monthNumber, dateNumber);

  res.status(200).json({ zodiacSign });
};