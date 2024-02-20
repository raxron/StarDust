export interface HoroscopeType {
    date: string;
    horoscope_data: string;
  }
  
 export interface DailyDataProps {
    dailyData: {
      data: HoroscopeType;
      status: number;
      success: boolean;
    };
  }

  export interface ZodiacSign {
    id: number;
    name: string;
    summary: string;
  }

  export interface HoroscopeData {
    date: string;
    horoscope_data: string;
  };

  interface ZodiacInfo {
    [key: string]: {
        date: string;
        personality: string;
    };
}
interface ZodiacInfoProps {
    infoSign: string;
}