import Link from "next/link";
import Carousel from "./components/Carousel";
import Navbar from "./components/navbar/navbar";

const Home = () => {
  return (
    <div className="bg-dark">
      <Navbar />
      <Carousel />
    </div>
  );
};

export default Home;
