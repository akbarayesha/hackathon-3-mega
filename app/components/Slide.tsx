import Image from "next/image";
import { FaCircleArrowRight } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <div className="slideSection bg-[#FCF8F3] mt-28 px-6 lg:px-32 flex flex-col lg:flex-row items-center gap-10 relative">
      {/* Text Section */}
      <div className="slideText lg:mt-40 lg:ml-20 text-center lg:text-left">
        <h4 className="font-extrabold text-2xl md:text-3xl lg:text-4xl mb-4 leading-tight">
          50+ Beautiful rooms <br /> inspiration
        </h4>
        <p className="text-gray-700 text-sm md:text-lg lg:text-xl leading-relaxed">
          Our designers have created a variety of stunning <br className="hidden lg:block" />
          room prototypes to spark your imagination.
        </p>
        <button className="bg-[#B88E2F] px-6 py-3 mt-8 text-white rounded-lg hover:bg-[#9b7a29] transition duration-200">
          Explore More
        </button>
      </div>

      {/* Image Section */}
      <div className="relative flex justify-center">
        {/* Main Image */}
        <div className="relative">
          <Image
            src="/pic11.png"
            width={404}
            height={582}
            alt="Room Inspiration"
            className="rounded-lg shadow-lg"
          />

          {/* Overlay Text */}
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-white bg-opacity-90 rounded-lg p-6 w-60 shadow-md">
            <div className="font-medium text-sm text-gray-600 flex items-center gap-2">
              <span>01 —</span> Bed Room
            </div>
            <div className="font-semibold text-lg lg:text-xl text-gray-800 text-center mt-2">
              Inner Peace
            </div>
          </div>

          {/* Arrow Button */}
          <button className="absolute top-[70%] right-[-30px] bg-[#B88E2F] text-white p-4 rounded-full shadow-lg hover:bg-[#9b7a29] transition duration-200">
            <FaCircleArrowRight size={20} />
          </button>
        </div>

        {/* Second Image */}
        <div className="hidden lg:block ml-12">
          <Image
            src="/pic12.png"
            width={372}
            height={486}
            alt="Room Inspiration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
