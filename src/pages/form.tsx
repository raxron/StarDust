import Link from "next/link";
import Carousel from "./components/Carousel";
import ZodiacForm from "./components/ZodiacForm";
import Aztro from "./components/Aztro";
import Navbar from "./components/navbar/navbar";

const Form = () => {
  return (
    <>
      <div className="bg-dark">
        <Navbar />
        <ZodiacForm />
      </div>
    </>
  );
};

export default Form;
