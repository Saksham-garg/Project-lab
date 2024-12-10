"use client";
import { AppWrap, MotionWrap } from "@/wrapper";
import React, { useState } from "react";

type Props = {};

const Contact = (props: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
  };
  return (
    <section className="flex flex-col items-center justify-center py-8 px-3">
      <h2 className="head-text text-xl xs:text-2xl sm:text-3xl md:text-4xl">
        Take a coffee & chat with me
      </h2>

      <div className="app__footer-cards max-w-md flex justify-evenly items-center flex-wrap mt-6">
        <div className="app__footer-card min-w-72 flex justify-start items-center mx-4 p-4 border rounded-lg cursor-pointer transition ease-in-out w-full gap-3">
          <img
            src={"/email.png"}
            alt="email"
            className="w-10 h-10 mx-0 my-2.5"
          />
          <a href="mailto:projectlab@gmail.com" className="p-text">
            projectlab@gmail.com
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex w-full gap-5">
          <div className="app__flex w-full">
            <input
              className="bg-black w-full p-4 rounded-lg text-white border-[0.5px] border-gray-600"
              type="text"
              placeholder="Your Name"
              name="username"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text bg-black w-full p-4 rounded-lg text-white border-[0.5px] border-gray-600"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text bg-black w-full p-4 rounded-lg text-white border-[0.5px] border-gray-600"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>

          <button
            type="button"
            className="p-text py-4 px-8 rounded-lg font-medium outline-none bg-[#313bac] hover:bg-[#2430af] transition-all cursor-pointer mt-8 text-white"
            onClick={handleSubmit}
          >
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </section>
  );
};

export default AppWrap(
  MotionWrap(Contact, "contact"),
  "contact",
  "app__whitebg min-h-screen relative bg-no-repeat bg-center contact-parent"
);