"use client";

import React, { useState } from "react";
import { AppWrap } from "@/wrapper";
import AccordianCard from "./AccordianCard/AccordianCard";

const FAQ = () => {
  const [activeAccordian, toggleAccordion] = useState<number>(-1);

  // const Faqs = [
  //   {
  //     question: "How can I contact Project LAB Team?",
  //     answer:
  //       "You can reach us through our contact form on our website or by emailing us at projectlab@gmail.com We typically respond within 6 hours.",
  //   },
  //   {
  //     question: "What types of law do you cover?",
  //     answer:
  //       "We cover everything from Constitutional to Environmental Law, ensuring comprehensive support for all your legal needs!",
  //   },
  //   {
  //     question: "How do I submit my project?",
  //     answer:
  //       "We cover everything from Constitutional to Environmental Law, ensuring comprehensive support for all your legal needs!",
  //   },
  //   {
  //     question: "Are your services affordable?",
  //     answer:
  //       "Get exceptional quality without exceeding your budget. We believe in value for money!",
  //   },
  // ];
  const Faqs = [
    {
      question: "How can I contact the Project Head team?",
      answer:
        "You can reach us through our contact form on our website or by emailing us at theprojecthead@gmail.com. We typically respond within 6 hours.",
    },
    {
      question: "What types of projects do you assist with?",
      answer:
        "We assist with a wide range of projects, including academic assignments, business proposals, IT projects, and more. Our team is equipped to handle diverse project requirements.",
    },
    {
      question: "How do I submit my project for assistance?",
      answer:
        "You can submit your project by filling out the submission form on our website or directly send details via mail. Please provide all relevant details and documents to help us understand your requirements better.",
    },
    {
      question: "Are your services affordable?",
      answer:
        "Yes! We offer competitive pricing to ensure that you receive exceptional quality without exceeding your budget. Our goal is to provide value for money in all our services.",
    },
    {
      question: "What is the typical turnaround time for projects?",
      answer:
        "The turnaround time varies depending on the complexity and size of the project. However, we always strive to meet deadlines and will provide you with an estimated completion date upon receiving your project details.",
    },
  ];

  return (
    <section className="flex w-full flex-col md:flex-row items-center justify-evenly md:justify-between py-8 gap-10 h-full px-3">
      <h2 className="md:flex-1 font-raleway text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white text-start text-wrap">
        Frequently Asked Questions
      </h2>
      <div className="flex-3 flex flex-col gap-3">
        {Faqs.map((faq, index) => {
          return (
            <AccordianCard
              answer={faq.answer}
              question={faq.question}
              activeAccordian={activeAccordian}
              toggleAccordion={() =>
                toggleAccordion(activeAccordian === index ? -1 : index)
              }
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AppWrap(FAQ, "faq", "h-screen");
