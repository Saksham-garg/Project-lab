"use client";
import { AppWrap, MotionWrap } from "@/wrapper";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e: any) => {
    // @typescript-eslint/no-explicit-any
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    fetch("api/send-mail", {
      method: "POST",
      body: JSON.stringify(contact),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="flex flex-col items-center justify-center py-8 px-3">
      <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold md:text-4xl">
        Take a coffee & chat with me
      </h2>

      <div className="app__footer-cards max-w-md flex justify-evenly items-center flex-wrap mt-6">
        <a href="mailto:projectlab@gmail.com" className="p-text">
          <div className="app__footer-card min-w-72 flex justify-start items-center sm:mx-4 sm:p-4 border rounded-lg cursor-pointer transition ease-in-out w-full gap-3 p-2">
            <Image
              src={"/email.png"}
              alt="email"
              width={24}
              height={20}
              className="w-10 h-10 mx-0 my-2.5"
            />
            theprojecthead@gmail.com
          </div>
        </a>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex w-full gap-5 mx-4 my-12">
          <div className="app__flex w-full">
            <input
              className="bg-black w-full p-4 rounded-lg text-white border-[0.5px] border-gray-600"
              type="text"
              placeholder="Your Name"
              name="name"
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
            className="py-4 px-8 rounded-lg font-medium outline-none bg-[#313bac] transition-all cursor-pointer mt-8 text-white"
            onClick={handleSubmit}
          >
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div className="h-full">
          <h3 className="text-3xl sm:text-5xl font-raleway font-bold mt-16 text-center">
            Thank you for getting in touch!
          </h3>
          <h3 className="text-3xl sm:text-5xl font-raleway font-bold mt-8 text-center">
            Will get back to you soon...
          </h3>
        </div>
      )}
    </section>
  );
};

export default AppWrap(
  MotionWrap(Contact, "contact"),
  "contact",
  "app__whitebg min-h-screen relative bg-no-repeat bg-center contact-parent",
);
