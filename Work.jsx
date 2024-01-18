import React from "react";
import pythontetris from "../assets/pythontetris.png";
import notepad from "../assets/notepad.png";
import techmart from "../assets/techmart.png";
import portfolio from "../assets/portfolio.png";
import fashionpet from "../assets/fashionpet.png";
import warnerwoodworks from "../assets/warnerwoodworks.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-[#c2c2c2] bg-[#000000]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center text-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline text-[#ffd600]">Work</p>
          <p className="text-lg text-[#eeeeee] py-6">
            Have a look at my recent projects.
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${warnerwoodworks})` }}
            className="shadow-lg shadow-[#3a3a3e] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                Warner Woodworks
              </span>
              <div className="pt-8 text-center">
                <a href="https://warnerwoodworkssd.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-[#eeeeee] font-bold text-lg">
                    Live
                  </button>
                </a>
                <a href="https://github.com/Brandondevster/techmart">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-[#eeeeee] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${portfolio})` }}
            className="shadow-lg shadow-[#3a3a3e] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                React+Tailwind Portfolio
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Brandondevster/portfolio">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-[#eeeeee] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${techmart})` }}
            className="shadow-lg shadow-[#3a3a3e] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                JS Shopping Cart
              </span>
              <div className="pt-8 text-center">
                <a href="https://tech-mart-site.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-[#eeeeee] font-bold text-lg">
                    Live
                  </button>
                </a>
                <a href="https://github.com/Brandondevster/techmart">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-[#eeeeee] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${fashionpet})` }}
            className="shadow-lg shadow-[#3a3a3e] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                JS Pet Registration
              </span>
              <div className="pt-8 text-center">
                <a href="https://fashion-pet.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-[#eeeeee] font-bold text-lg">
                    Live
                  </button>
                </a>
                <a href="https://github.com/Brandondevster/Fashion_Pet">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-[#eeeeee] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${notepad})` }}
            className="shadow-lg shadow-[#3a3a3e] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                React+Django Note Pad
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Brandondevster/notepad">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-[#eeeeee] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${pythontetris})` }}
            className="shadow-lg shadow-[#3a3a3e] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                Python Tetris
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Brandondevster/python_tetris">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-[#eeeeee] font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
