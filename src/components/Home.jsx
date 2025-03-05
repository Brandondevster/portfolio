import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";



const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#000000]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-gray-300">
        <p className="text-lg text-[#eeeeee]">Hello, my name is</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#ffd600]">
          Brandon Webster
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#ffd600]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-lg text-[#eeeeee] py-4 max-w-[700px]">
          I specialize in creating and building web applications (I also enjoy
          designing them) from front end to back end. When building these
          full-stack web applications, I focus on curating an interactive
          experience.
        </p>
        <div class='flex items-center justify-center'>
        <Link to="about" smooth={true} duration={500}>
          <button  className="text-[#eeeeee] group border-2 border-[#9d9d9d] px-6 py-3 my-2 flex items-center hover:bg-[#ffd600] hover:text-[#000000] hover:border-[#ffd600]">
            Scroll Down
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;