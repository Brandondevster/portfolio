import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#000000] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/9a00cbae-51c3-4f1e-b17f-e9656be33564"
        className="flex flex-col max-w-[600px]"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline text-[#c2c2c2]">
            Contact
          </p>
          <p className="text-lg text-[#dddddd] py-4">
            Complete and submit the form below or send me an email - <a className="text-lg text-[#edda63]">brandonkw13333@gmail.com</a>
          </p>
        </div>
        <input
          className="text-gray-300 bg-[#34353a] p-2"
          type="text"
          placeholder="(Name)"
          name="name"
        />
        <input
          className="text-gray-300 my-4 p-2 bg-[#34353a]"
          type="email"
          placeholder="(Email)"
          name="email"
        />
        <textarea
          className="text-gray-300 bg-[#34353a] p-2"
          name="message"
          rows="10"
          placeholder="(Message)"
        ></textarea>
        <button className="text-[#dddddd] border-2 border-[#9d9d9d] hover:bg-[#ab9612] hover:border-[#ab9612] px-4 py-3 my-8 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;