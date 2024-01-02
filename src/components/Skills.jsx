import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Giticon from "../assets/giticon.png";
import Python from "../assets/python.png";
import Django from "../assets/django.png";
import Vscode from "../assets/vscode.png";
import Github from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#000000] text-[#eeeeee]">
      {/* Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center text-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline text-[#ffd600]">Skills</p>
          <p className="text-lg text-[#eeeeee] py-4">
            These are the technologies I build with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8">
          <div className="shadow-md shadow-[#3a3a3e] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Giticon} alt="GIT icon" />
            <p className="my-4">Git</p>
          </div>
          <div className="shadow-md shadow-[#3a3a3e] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={JavaScript} alt="JAVASCRIPT icon" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#3a3a3e] hover:scale-110 duration-500 ">
            <img
              className="w-20 mx-auto"
              src={ReactImg}
              alt="REACT icon"
            />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#3a3a3e] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Node} alt="NODE icon" />
            <p className="my-4">Node</p>
          </div>
          <div className="shadow-md shadow-[#3a3a3e] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Python} alt="PYTHON icon" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#3a3a3e] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Django} alt="DJANGO icon" />
            <p className="my-4">Django</p>
          </div>
          <div className="shadow-md shadow-[#3a3a3e] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Tailwind} alt="DJANGO icon" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#3a3a3e] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Vscode} alt="DJANGO icon" />
            <p className="my-4">VS Code</p>
          </div>
          <div className="shadow-md shadow-[#3a3a3e] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Github} alt="DJANGO icon" />
            <p className="my-4">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
