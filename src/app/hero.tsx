"use client";

import Image from "next/image";

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Hero Section */}
      <header className="grid min-h-screen bg-[#101011] px-6 md:px-8 lg:px-12">
        <div className="container mx-auto mt-20 grid h-full grid-cols-1 place-items-center gap-8 lg:mt-14 lg:grid-cols-2">
          {/* Left Content */}
          <div className="col-span-1 text-center lg:text-left">
            <h1 className="text-3xl font-bold text-white mb-4 sm:text-4xl lg:text-5xl">
              Your Perfect <br /> Fitness App
            </h1>
            <p className="text-base text-white mb-7 md:text-lg md:pr-8 lg:pr-16 xl:pr-28">
              Our app is here to empower you on your quest for fitness,
              anytime and anywhere.
            </p>
            <h6 className="text-base text-white mb-4 font-semibold md:text-lg">
              Get the app
            </h6>
            <div className="flex flex-col gap-3 md:flex-row">
              <button className="flex items-center justify-center gap-3 bg-white text-black py-2 px-4 rounded hover:bg-gray-100 md:py-3 md:px-5">
                <Image
                  width={20}
                  height={20}
                  src="/logo/logo-apple.png"
                  alt="App Store"
                  className="w-5 h-5 md:w-6 md:h-6"
                />
                App Store
              </button>
              <button className="flex items-center justify-center gap-3 bg-white text-black py-2 px-4 rounded hover:bg-gray-100 md:py-3 md:px-5">
                <Image
                  width={20}
                  height={20}
                  src="/logo/logo-google.png"
                  alt="Google Play"
                  className="w-5 h-5 md:w-6 md:h-6"
                />
                Google Play
              </button>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="col-span-1 flex justify-center lg:justify-end">
            <Image
              width={470}
              height={576}
              src="/iphones.png"
              alt="Learning App"
              className="h-auto max-h-[20rem] md:max-h-[24rem] lg:max-h-[28rem] xl:max-h-[30rem] object-contain -translate-y-5 md:translate-y-0"
            />
          </div>
        </div>
      </header>

      {/* Feature Section */}
      <div className="mx-6 md:mx-12 lg:mx-16 -mt-12 md:-mt-16 rounded-xl bg-white p-5 md:p-10 lg:p-14 shadow-md">
        <div className="text-center lg:text-left">
          <h3 className="text-xl font-bold text-gray-800 mb-3 md:text-2xl">
            Fitness Tracker
          </h3>
          <p className="text-gray-500 font-normal lg:w-8/12 xl:w-6/12 mx-auto lg:mx-0">
            Download our app to dive into a vast library of courses, tutorials,
            and study materials on a wide range of subjects - from programming
            and language learning to personal development and beyond.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
