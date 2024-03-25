import Link from "next/link";
import Head from "next/head";
import Carousel from "./components/Carousel";
import ZodiacForm from "./components/ZodiacForm";
import Navbar from "./components/navbar/navbar";
import Footer from '@/pages/components/footer'

const Form = () => {
  return (
    <>
    <Head>
        <title>STARDUST | Form</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
      <div className="bg-dark font-josefine">
        <Navbar />
        <ZodiacForm />
        <Footer />
      </div>
    </>
  );
};

export default Form;
