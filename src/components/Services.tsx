"use client";
import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "@/wrapper";
import ServicesCard from "./ServicesCard/ServicesCard";
import { FaBalanceScale, FaTv } from "react-icons/fa";
import FeatCard from "./Card/FeatCard";

type Props = {};

const Services = (props: Props) => {
  const services = [
    {
      Icon: FaBalanceScale,
      name: "Law Project Assistance",
      coreFeat: [
        "Constitutional Law",
        "Corporate Law",
        "Criminal Law",
        "International Law",
      ],
      otherFeat: [
        "Comprehensive support for Dissertations",
        "Help with Law Assignments",
      ],
    },
    {
      Icon: FaTv,
      name: "Computer Science Project Assistance",
      coreFeat: ["React", "Vue", "Machine Learning", "Data Science"],
      otherFeat: [
        "Support for Computer Engineering & Assignments",
        "Full-cycle Website Development",
        "Advanced Artificial Intelligence Projects",
        "Expertise in Frontend & Backend Development Mastery of tools & technologies: ",
      ],
    },
  ];
  return (
    <section className="w-full py-8 h-full relative flex flex-col justify-evenly">
      <h2 className="text-white text-xl xs:text-2xl sm:text-3xl md:text-4xl text-center font-raleway font-bold">
        Explore Our Project Assistance Services
      </h2>
      <motion.div
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
        className="app__profile-item flex gap-6 mt-8 justify-around flex-wrap"
      >
        {services.map((service) => {
          return <FeatCard service={service} key={service.name} />;
        })}
      </motion.div>
    </section>
  );
};

export default AppWrap(
  MotionWrap(Services, "services w-full h-full"),
  "services",
  "bg-[#0a0a0a] min-h-screen"
);
