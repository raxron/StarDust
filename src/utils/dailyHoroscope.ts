export const dailyHoroscope = async (zodiacSign: string) => {
    const url = `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${zodiacSign}&day=TODAY`;
    const response = await fetch(url);
    return response.json();
  };