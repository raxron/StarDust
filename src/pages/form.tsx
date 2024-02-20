import Link from "next/link";
import Carousel from "./components/Carousel";
import ZodiacForm from "./components/ZodiacForm";
import Navbar from "./components/navbar/navbar";
import Footer from '@/pages/components/footer'

const Form = () => {
  return (
    <>
      <div className="bg-dark font-josefine">
        <Navbar />
        <ZodiacForm />
        <Footer />
      </div>
    </>
  );
};

export default Form;
