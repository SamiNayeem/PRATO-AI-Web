
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  // const [isScrolling, setIsScrolling] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolling(window.scrollY > 0);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <nav
    //   className={`fixed top-0 px-20 z-50 w-full transition-all ${
    //     isScrolling ? "bg-white shadow-md" : "bg-transparent"
    //   }`}
    className="top-0 px-20 z-50 w-full bg-[#101011] shadow-md"
    >
      <div className="container mx-auto flex items-center justify-between py-2 px-6">
        {/* Logo */}
        <Link href="/">
          {/* <span className="text-lg font-bold text-white cursor-pointer">
            Material Tailwind
          </span> */}
          <Image
          src="/logo/logo1.PNG"
            alt="logo"
            width={180}
            height={100}
          />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden lg:flex lg:items-center lg:space-x-8 text-white">
          <li>
            <Link href="/">
              <span className="cursor-pointer hover:text-gray-300">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="cursor-pointer hover:text-gray-300">
                About Us
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="cursor-pointer hover:text-gray-300">
                Contact Us
              </span>
            </Link>
          </li>
          {/* <li>
            <Link href="/docs">
              <span className="cursor-pointer hover:text-gray-300">Docs</span>
            </Link>
          </li> */}
        </ul>

        {/* Social Icons and Button */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <button className="text-white hover:text-gray-300">
            <i className="fa-brands fa-twitter"></i>
          </button>
          <button className="text-white hover:text-gray-300">
            <i className="fa-brands fa-facebook"></i>
          </button>
          <button className="text-white hover:text-gray-300">
            <i className="fa-brands fa-instagram"></i>
          </button>
          <button className="bg-white text-black font-medium py-2 px-4 hover:bg-gray-100 rounded-full">
            Download Now
          </button>
        </div>
      </div>
    </nav>
  );
}
