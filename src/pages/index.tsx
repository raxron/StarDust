import Link from "next/link";
import Head from "next/head";
import Carousel from "./components/Carousel";
import Navbar from "./components/navbar/navbar";
import Footer from "@/pages/components/footer";

const Home = () => {
  return (
    <>
    <Head>
        <title>STARDUST | Welcome</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
      <div className="bg-dark h-screen font-josefine">
        <Navbar />
        <Carousel />
        <Footer />
      </div>
    </>
  );
};

export default Home;
