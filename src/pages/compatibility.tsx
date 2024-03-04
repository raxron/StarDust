import React from "react";
import { useRouter } from "next/router";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";
import Arieschart from "./components/Charts/Aries";

const Compatibility = () => {
  const router = useRouter();
  const { sign } = router.query;

  const getCompatibilityContent = (sign: string) => {
    switch (sign) {
      case "Aries":
        return <Arieschart />;
      case "Aquarius":
        return <div>Compatibility details for Aquarius</div>;
      case "Pisces":
        return <div>Compatibility details for Pisces</div>;
      case "Gemini":
        return <div>Compatibility details for Gemini</div>;
      case "Taurus":
        return <div>Compatibility details for Taurus</div>;
      case "Cancer":
        return <div>Compatibility details for Cancer</div>;
      case "Virgo":
        return <div>Compatibility details for Virgo</div>;
      case "Leo":
        return <div>Compatibility details for Leo</div>;
      case "Libra":
        return <div>Compatibility details for Libra</div>;
      case "Scorpio":
        return <div>Compatibility details for Scorpio</div>;
      case "Sagittarius":
        return <div>Compatibility details for Sagittarius</div>;
      case "Capricorn":
        return <div>Compatibility details for Capricorn</div>;

      default:
        return <div>Compatibility details for other signs</div>;
    }
  };

  return (
    <div className="bg-dark h-screen font-josefine">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center gap-16">
        <div className="flex flex-col justify-center items-center gap-2 text-white">
          <h3 className="text-lg">{sign}</h3>
          {getCompatibilityContent(sign as string)}
        </div>
      </div>
    </div>
  );
};

export default Compatibility;
