import { DailyDataProps } from "../../typing";
import Navbar from "./components/navbar/navbar";

export const getStaticProps = async() => {
    const url = `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=taurus&day=TODAY`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    return{
      props:{dailyData:data}
    }
}


const Home: React.FC<DailyDataProps> = ({ dailyData }) => {
  return(

      <div>
      
        <h3>{dailyData.data.date}</h3>
        <p>{dailyData.data.horoscope_data}</p>
      </div>
  )

}

export default Home;