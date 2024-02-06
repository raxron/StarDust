interface HoroscopeType {
    date: string;
    horoscope_data: string;
  }
  
  interface DailyDataProps {
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