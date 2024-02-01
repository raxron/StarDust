import Link from "next/link";
import Carousel from "./components/Carousel";

const Home = () => {
  return(
      <div>
        <Link href="/horoscope">Horoscope</Link>
        <Carousel/>
      </div>
  )

}

export default Home;