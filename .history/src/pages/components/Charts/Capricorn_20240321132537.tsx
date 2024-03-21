import React, { useRef, useEffect } from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";

const Capricornchart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart>();

  useEffect(() => {
    const ctx = chartRef.current!.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const config: ChartConfiguration<"bar"> = {
      type: "bar",
      data: {
        labels: ["Virgo", "Pisces", "Taurus", "Sagittarius", "Scorpio", "Cancer"],
        datasets: [
          {
            label: "Compatibility with Capricorn",
            data: [97, 91, 87, 84, 76, 68],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
              "rgb(153, 102, 255)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: "y",
        elements: {
          bar: {
            borderWidth: 3,
          },
        },
        scales: {
          x: {
            beginAtZero: true,
          },
        },
      },
    };

    if (ctx) {
      chartInstanceRef.current = new Chart(ctx, config);
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: "url(/assets/card.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "400px",
        height: "550px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "35px",
        padding: "25px",
      }}
    >
      <canvas
        ref={chartRef}
        className="rounded-lg"
        style={{ height: "500px" }}
      />
    </div>
  );
};

export default Capricornchart;
