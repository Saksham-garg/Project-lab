"use client";
import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { AppWrap, MotionWrap } from "@/wrapper";
import AccordianCard from "./AccordianCard/AccordianCard";
type Props = {};

const FAQ = (props: Props) => {
  const [activeAccordian, toggleAccordion] = useState<number>(-1);
  const backgroundRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (backgroundRef.current) {
      gsap.to(backgroundRef.current, {
        rotation: 360, // Full rotation
        duration: 10, // Duration in seconds
        repeat: -1, // Infinite loop
        ease: "linear", // Smooth, constant rotation
      });
    }
  }, []);
  const Faqs = [
    {
      question: "How can I contact Inkyy Team?",
      answer:
        "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
    },
    {
      question: "What types of law do you cover?",
      answer:
        "We cover everything from Constitutional to Environmental Law, ensuring comprehensive support for all your legal needs!",
    },
    {
      question: "How do I submit my project?",
      answer:
        "We cover everything from Constitutional to Environmental Law, ensuring comprehensive support for all your legal needs!",
    },
    {
      question: "Are your services affordable?",
      answer:
        "Get exceptional quality without exceeding your budget. We believe in value for money!",
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
              toggleAccordion={toggleAccordion}
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