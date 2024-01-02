import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#000000] flex justify-center text-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/4d442541-dc8a-4a24-ad79-c1cb9860524f"
        className="flex flex-col max-w-[600px]"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline text-[#ffd600]">Contact</p>
          <p className="text-lg text-[#eeeeee] py-4">
            Complete the form below with your details and submit or send me an
            email - brandondevster@gmail.com
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
        <button className="text-[#eeeeee] border-2 border-[#9d9d9d] hover:text-[#000000] hover:bg-[#ffd600] hover:border-[#ffd600] px-4 py-3 my-8 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
