import React from "react";
import { useRouter } from "next/router";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";
import Arieschart from "./components/Charts/Aries";
import Aquariuschart from "./components/Charts/Aquarius";
import Pisceschart from "./components/Charts/Pisces";
import Geminichart from "./components/Charts/Gemini";
import Tauruschart from "./components/Charts/Taurus";
import Cancerchart from "./components/Charts/Cancer";
import Capricornchart from "./components/Charts/Capricorn";
import VirgoChart from "./components/Charts/Virgo";
import LeoChart from "./components/Charts/Leo";
import LibraChart from "./components/Charts/Libra";
import ScorpioChart from "./components/Charts/Scorpio";
import SagittariusChart from "./components/Charts/Sagittarius";

const Compatibility = () => {
  const router = useRouter();
  const { sign } = router.query;

  const getCompatibilityContent = (sign: string) => {
    switch (sign) {
      case "Aries":
        return <Arieschart />;
      case "Aquarius":
        return <Aquariuschart />
      case "Pisces":
        return <Pisceschart />
      case "Gemini":
        return <Geminichart />
      case "Taurus":
        return <Tauruschart />
      case "Cancer":
        return <Cancerchart />
      case "Virgo":
        return <VirgoChart />
      case "Leo":
        return <LeoChart />
      case "Libra":
        return <LibraChart />
      case "Scorpio":
        return <ScorpioChart />
      case "Sagittarius":
        return <SagittariusChart />
      case "Capricorn":
        return <Capricornchart />

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
      <Footer />
    </div>
  );
};

export default Compatibility;
