"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const OPTIONS = [
  {
    title: 100,
    description: "Users",
  },
  {
    title: 500,
    description: "Recepies",
  },
  {
    title: 24,
    description: "Hours Support",
  },
  {
    title: 5,
    description: "Review Stars",
  },
];

export function MobileConvenience() {
  return (
    <section className="py-20 px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        {/* Image Section */}
        <Image
          width={400}
          height={400}
          src="/iphone.png"
        //   className="col-span-1 w-1/3 mx-auto lg:w-1/3"
          alt="iPhone"
        />

        {/* Content Section */}
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ratings and Reviews
          </h2>
          <p className="text-xl text-gray-500 mb-5">
            Ratings of PRATO AI App.
          </p>

          {/* Info Cards */}
          <div className="grid gap-5 grid-cols-2">
            {OPTIONS.map(({ title, description }) => (
              <AnimatedInfoCard key={description} targetNumber={title}>
                {description}
              </AnimatedInfoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface AnimatedInfoCardProps {
  targetNumber: number;
  children: string;
}

function AnimatedInfoCard({ targetNumber, children }: AnimatedInfoCardProps) {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const increment = targetNumber / (duration / 10); // Increment value
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        clearInterval(interval);
        setCurrentNumber(targetNumber);
      } else {
        setCurrentNumber(Math.ceil(current));
      }
    }, 10);

    return () => clearInterval(interval);
  }, [targetNumber]);

  return (
    <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-sm">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">
        {currentNumber}
        {targetNumber === 5 ? "/5" : ""}
      </h3>
      <p className="text-gray-500">{children}</p>
    </div>
  );
}

export default MobileConvenience;
