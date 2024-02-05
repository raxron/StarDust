import Link from "next/link";
import Carousel from "./components/Carousel";
import ZodiacForm from "./components/ZodiacForm";
import Aztro from "./components/Aztro";

const Home = () => {
  return(
      <div>
        <Link href="/horoscope">Horoscope</Link>
        <Carousel/>
        <ZodiacForm />
        <Aztro sign="aries" day="today"/>
      </div>
  )

}

export default Home;