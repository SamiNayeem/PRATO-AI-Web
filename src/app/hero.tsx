"use client";

import Image from "next/image";

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Hero Section */}
      <header className="grid min-h-screen bg-[#101011] px-8">
        <div className="container mx-auto mt-20 grid h-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          {/* Left Content */}
          <div className="col-span-1 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-white mb-4">
              Your Perfect <br /> Fitness App
            </h1>
            <p className="text-lg text-white mb-7 md:pr-16 xl:pr-28">
              Our app is here to empower you on your quest for fitness,
              anytime and anywhere.
            </p>
            <h6 className="text-lg text-white mb-4 font-semibold">
              Get the app
            </h6>
            <div className="flex flex-col gap-3 md:flex-row">
              <button className="flex items-center justify-center gap-3 bg-white text-black py-2 px-4 rounded hover:bg-gray-100">
                <Image
                  width={20}
                  height={20}
                  src="/logo/logo-apple.png"
                  alt="App Store"
                  className="w-6 h-6"
                />
                App Store
              </button>
              <button className="flex items-center justify-center gap-3 bg-white text-black py-2 px-4 rounded hover:bg-gray-100">
                <Image
                  width={20}
                  height={20}
                  src="/logo/logo-google.png"
                  alt="Google Play"
                  className="w-6 h-6"
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
              className="h-full max-h-[30rem] -translate-y-10 md:max-h-[36rem] lg:max-h-[40rem] lg:translate-y-0"
            />
          </div>
        </div>
      </header>

      {/* Feature Section */}
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Fitness Tracker
          </h3>
          <p className="text-gray-500 font-normal lg:w-5/12">
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
