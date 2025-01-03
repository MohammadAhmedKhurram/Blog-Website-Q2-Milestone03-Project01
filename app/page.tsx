import { PencilIcon } from "@heroicons/react/outline";
import { BookOpenIcon } from "@heroicons/react/outline";
import { LightBulbIcon } from "@heroicons/react/outline";
import { FaArrowRight } from "react-icons/fa";
import { FaFeatherAlt } from "react-icons/fa";
import BlogListing from "./blogs/page";
import Link from "next/link";

function HeroHeader() {
  return (
    <div>
      <div className="relative h-screen  overflow-hidden flex items-center justify-center text-center">
        {/* Floating Icons */}
        <div className="absolute top-10 left-20 animate-float">
          <PencilIcon className="w-12 h-12 text-white opacity-70" />
        </div>
        <div className="absolute top-1/2 right-10 animate-bounce delay-2">
          <BookOpenIcon className="w-16 h-16 text-white opacity-70" />
        </div>
        <div className="absolute bottom-20 left-10 animate-float delay-4">
          <LightBulbIcon className="w-10 h-10 text-white opacity-70" />
        </div>

        {/* Main Content */}
        <div className="z-10 max-w-4xl px-4 text-white text-center">
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 animate-fadeIn">
            Dive Into the Blogosphere
            <FaFeatherAlt className="w-10 h-10 inline-block text-white opacity-70 ml-2 align-middle animate-pulse" />
          </h1>
          <p className="text-2xl font-light mb-6 animate-fadeIn delay-2">
            Discover. Read. Engage.
          </p>

          {/* Centered Button */}
          <div className="flex justify-center mt-10">
            <button className="px-6 py-3 bg-white text-teal-500 font-semibold rounded-full shadow-lg hover:bg-teal-500 hover:text-white transition-all flex items-center gap-2">
              <Link href="#bloglist">
                <span>Explore Blogs</span>
              </Link>
              <FaArrowRight className="w-4 h-4 animate-ping " />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 flex flex-col items-center">
          <span className="text-white text-sm font-light">Scroll Down</span>
          <div className="w-6 h-6 border-2 border-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
      <BlogListing />
      <footer className="py-6 w-full">
        <div className="container mx-auto flex flex-col items-center">
          <p className="md:text-sm text-[12px] text-[#EDEDED]">
            &copy; 2025 Muhammad Ahmed Khurram. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HeroHeader;
