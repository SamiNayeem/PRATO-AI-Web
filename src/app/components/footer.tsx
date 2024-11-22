"use client";

import Image from "next/image";
import Link from "next/link";

const LINKS = ["About Us", "Careers", "Press", "Blog", "Pricing"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-[#101011] px-8 pt-12 text-white">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <Link href="https://www.material-tailwind.com" target="_blank">
            <Image
            src="/logo/logo1.PNG"
            alt="logo"
            width={150}
            height={60}
          />
            </Link>
            <p className="mb-6 font-normal">
              The reward for getting on the stage is fame.
            </p>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={link}>
                  <Link
                    href="#"
                    className={`py-1 font-medium transition-colors ${
                      idx === 0 ? "pr-3" : "px-3"
                    } hover:text-gray-400`}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* App Download */}
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <h6 className="text-lg font-semibold mb-3">Get the app</h6>
            <div className="flex flex-col gap-2">
              <Link href="#">
                <div className="flex items-center justify-center bg-white text-black py-2 px-4 rounded hover:bg-gray-100">
                  <Image
                    width={20}
                    height={20}
                    src="/logo/logo-apple.png"
                    alt="Apple Store"
                    className="mr-2"
                  />
                  <span>App Store</span>
                </div>
              </Link>
              <Link href="#">
                <div className="flex items-center justify-center bg-white text-black py-2 px-4 rounded hover:bg-gray-100">
                  <Image
                    width={20}
                    height={20}
                    src="/logo/logo-google.png"
                    alt="Google Play"
                    className="mr-2"
                  />
                  <span>Google Play</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          {/* Copyright */}
          <p className="text-center font-normal opacity-75">
            &copy; {CURRENT_YEAR} PRATO AI{" "}
            <Link href="https://www.material-tailwind.com" target="_blank" className="hover:text-gray-400">
              All Rights Reserved
            </Link>{" "}
            by{" "}
            <Link href="https://www.creative-tim.com" target="_blank" className="hover:text-gray-400">
              PRATO AI
            </Link>
            .
          </p>

          {/* Social Links */}
          <div className="flex gap-3">
            <Link href="#">
              <i className="fa-brands fa-twitter text-2xl hover:text-gray-400"></i>
            </Link>
            <Link href="#">
              <i className="fa-brands fa-linkedin text-2xl hover:text-gray-400"></i>
            </Link>
            <Link href="#">
              <i className="fa-brands fa-facebook text-2xl hover:text-gray-400"></i>
            </Link>
            <Link href="#">
              <i className="fa-brands fa-github text-2xl hover:text-gray-400"></i>
            </Link>
            <Link href="#">
              <i className="fa-brands fa-dribbble text-2xl hover:text-gray-400"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
