"use client";
import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "@/wrapper";
import {
  FaBalanceScale,
  FaBookOpen,
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
  FaPenFancy,
  FaTv,
  FaUsers,
} from "react-icons/fa";
import FeatCard from "./Card/FeatCard";

const Services = () => {
  // const services = [
  //   {
  //     Icon: FaBalanceScale,
  //     name: "Law Project Assistance",
  //     coreFeat: [
  //       "Constitutional Law",
  //       "Corporate Law",
  //       "Criminal Law",
  //       "International Law",
  //     ],
  //     otherFeat: [
  //       "Comprehensive support for Dissertations",
  //       "Help with Law Assignments",
  //     ],
  //   },
  //   {
  //     Icon: FaTv,
  //     name: "Computer Science Project Assistance",
  //     coreFeat: ["React", "Vue", "Machine Learning", "Data Science"],
  //     otherFeat: [
  //       "Support for Computer Engineering & Assignments",
  //       "Full-cycle Website Development",
  //       "Advanced Artificial Intelligence Projects",
  //       "Expertise in Frontend & Backend Development Mastery of tools & technologies: ",
  //     ],
  //   },
  // ];

  const services = [
    {
      Icon: FaBalanceScale,
      name: "Comprehensive Law Project",
      coreFeat: [
        "Criminal Law",
        "Law of Torts",
        "Constitutional Law",
        "Family Law (Hindu and Muslim)",
        "Environmental Law",
        "Administrative Law",
      ],
      otherFeat: [
        "Customized project outlines based on specific university requirements.",
        "Access to a library of legal resources and case law.",
        "One-on-one consultations with legal experts or tutors.",
        "Assistance with legal research and writing.",
        "Help with drafting legal documents such as petitions, affidavits, and contracts.",
      ],
    },
    {
      Icon: FaPenFancy,
      name: "Legal Writing & Research",
      coreFeat: [
        "Legal Research Methodologies",
        "Legal Writing Skills",
        "Citation Practices",
        "Constitutional Law",
        "Corporate Law",
        "Criminal Law",
        "International Law",
      ],
      otherFeat: [
        "Comprehensive support for Dissertations",
        "Interactive sessions with experienced legal professionals.",
        "Peer review opportunities for written assignments.",
        "Resources for improving grammar and style in legal writing.",
      ],
    },
    {
      Icon: FaTv,
      name: "IT Services (Computer Science)",
      coreFeat: ["React", "Vue", "Machine Learning", "Data Science"],
      otherFeat: [
        "Support for Computer Engineering & Assignments",
        "Full-cycle Website Development",
        "Advanced Artificial Intelligence Projects",
        "Expertise in Frontend & Backend Development Mastery of tools & technologies:",
      ],
    },
    {
      Icon: FaBriefcase,
      name: "MBA Project Assistance",
      coreFeat: [
        "HR Management",
        "Marketing Strategies",
        "Financial Analysis",
        "Operations Management",
        "Hospital Management",
        "Healthcare Management",
        "International Business Strategies",
        "Leadership Development",
      ],
      otherFeat: [
        "Customized projects as per university guidelines.",
        "Support for MBA dissertations and assignments.",
      ],
    },
    {
      Icon: FaLaptopCode,
      name: "MCA Project Assistance",
      coreFeat: [
        "Software Development Projects",
        "Database Management Systems",
        "Networking Projects",
        "Web Development Projects",
      ],
      otherFeat: [
        "Guidance on MCA assignments and projects.",
        "Customized solutions based on university requirements.",
      ],
    },
    {
      Icon: FaBookOpen,
      name: "MCom Project Assistance",
      coreFeat: [
        "Accounting Projects",
        "Finance Research Papers",
        "Business Studies Assignments",
      ],
      otherFeat: [
        "Support for MCom dissertations and project work.",
        "Customized projects as per university guidelines.",
      ],
    },
    {
      Icon: FaGraduationCap,
      name: "BCA Project Assistance",
      coreFeat: [
        "Programming Projects (Java, C++, Python)",
        "Web Development Projects (HTML, CSS, JavaScript)",
        "Database Projects (SQL, NoSQL)",
        "Mobile App Development",
      ],
      otherFeat: [
        "Assistance with BCA assignments and project work.",
        "Tailored projects according to university standards.",
      ],
    },
    {
      Icon: FaUsers,
      name: "BBM/BBA Project Assistance",
      coreFeat: [
        "Business Management Projects",
        "Marketing Research Projects",
        "Human Resource Management Studies",
      ],
      otherFeat: [
        "Support for BBM/BBA assignments and projects.",
        "Customized solutions based on university guidelines.",
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
  "bg-[#0a0a0a] min-h-screen",
);
