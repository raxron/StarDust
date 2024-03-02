import Link from "next/link";
import Carousel from "./components/Carousel";
import Navbar from "./components/navbar/navbar";
import Footer from "@/pages/components/footer";

const Home = () => {
  return (
    <>
      <div className="bg-dark h-screen font-josefine">
        <Navbar />
        <Carousel />
        <Footer />
      </div>
    </>
  );
};

export default Home;
