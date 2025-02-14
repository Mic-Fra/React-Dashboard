import React, { useState, useEffect } from "react";
import Coin from "./coin.js";
import { holdData3 } from "./const.js";

export default function Movers() {
  const holdData = holdData3;
  const holdDatalength = Object.values(holdData).length;

  const [activeFrame, setActiveFrame] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // To track if animation is paused

  useEffect(() => {
    if (isPaused) return; // Skip animation if paused
    const interval = setInterval(() => {
      setActiveFrame((prev) => (prev + 1) % holdDatalength); // Loop through movers
    }, 1000); // Slide every 1 second

    return () => clearInterval(interval); // Clean up on unmount
  }, [holdDatalength, isPaused]);

  // Handlers to pause and resume animation
  const handleMouseEnter = () => {
    setIsPaused(true); // Pause animation
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // Resume animation
  };

  return (
    <section className="bg-[#110a01] w-full h-[92px] md:h-[110px] grid grid-cols-1 gap-[8px] md:gap-[16px]">
      {/* Top movers text */}
      <div className="h-[21px] md:h-[31px]">
        <p className="text-left font-normal text-[16px] md:text-[24px] leading-[31.27px] text-[#FFF7F7]">
          Your top movers
        </p>
      </div>
      {/* Movers slider */}
      <div className="h-[63px] flex justify-start hover:cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          {/* Smooth transition for movers */}
          <div
            className="flex transition-transform duration-1000 ease-linear"
            style={{ transform: `translateX(-${activeFrame * 18}%)` }}
          >
            {Object.values(holdData).map((ele) => (
              <div
                key={ele.id}
                className="w-full h-full flex justify-start text-white text-2xl font-bold"
              >
                <Coin
                  title={ele.title}
                  money={ele.money}
                  percen={ele.percen}
                  imag={ele.imag}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
