import Link from "next/link";
import Carousel from "./components/Carousel";
import ZodiacForm from "./components/ZodiacForm";
import Aztro from "./components/Aztro";
import Navbar from "./components/navbar/navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Link href="/horoscope">Horoscope</Link>
      <Link href="/form">Form</Link>
      <Carousel />
    </>
  );
};

export default Home;
