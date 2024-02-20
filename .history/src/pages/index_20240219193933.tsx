import Link from "next/link";
import Carousel from "./components/Carousel";
import Navbar from "./components/navbar/navbar";
import Footer from '@/pages/components/footer'
import Background from "./components/background";

const Home = () => {
  return (
    <div className="bg-dark">
      <Navbar />
      <Carousel />
      <Footer />
      <Background />
    </div>
  );
};

export default Home;
