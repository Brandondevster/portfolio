import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Python from "../assets/python.png";
import Django from "../assets/django.png";
import Tailwind from "../assets/tailwind.png";
import Github from "../assets/github.png";
import Vscode from "../assets/vscode.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#000000] text-[#c2c2c2]">
      {/* Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline text-[#c9b953]  "><center>Skills</center></p>
          <p className="text-lg text-[#dddddd] py-4">
            <center>These are the technologies I build with.</center>
          </p>
        </div>
        

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8">
          <div className="shadow-md shadow-[#3a3a3e] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#3a3a3e] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#3a3a3e] hover:scale-110 duration-500 ">
            <img
              className="w-20 mx-auto" src={JavaScript} alt="JAVASCRIPT icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#3a3a3e] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={ReactImg} alt="REACT icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#3a3a3e] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Python} alt="PYTHON icon" />
            <p className="my-4">PYTHON</p>
          </div>
          <div className="shadow-md shadow-[#3a3a3e] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Django} alt="DJANGO icon" />
            <p className="my-4">DJANGO</p>
          </div>
          <div className="shadow-md shadow-[#3a3a3e] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Tailwind} alt="DJANGO icon" />
            <p className="my-4">TAILWIND CSS</p>
          </div>
          <div className="shadow-md shadow-[#3a3a3e] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Vscode} alt="DJANGO icon" />
            <p className="my-4">VISUAL STUDIO CODE</p>
          </div>
          <div className="shadow-md shadow-[#3a3a3e] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Github} alt="DJANGO icon" />
            <p className="my-4">GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
