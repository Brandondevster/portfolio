import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#000000] text-[#eeeeee]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline text-[#ffd600] ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-2xl font-bold">
            <p>
              Welcome to my portfolio! Please explore.
            </p>
          </div>
          <div>
            <p  className="text-lg text-[#eeeeee]">
              Building incredible software is my passion and I aim for this
              software to improve peoples lives. My software development skills are for indivual
              clients, small businesses and large corporations. My journey as a
              software developer began in 2020. I dreamed of creating web applications, 
              I am thrilled to say that dream has become reality.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
