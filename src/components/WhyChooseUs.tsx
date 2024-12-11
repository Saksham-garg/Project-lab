"use client";
import React from "react";
import { AppWrap, MotionWrap } from "@/wrapper";
import { FaChartLine, FaGlobe, FaFileInvoiceDollar, FaUsersCog, FaCheckCircle, FaCogs, FaDollarSign } from "react-icons/fa";
import ServicesCard from "./ServicesCard/ServicesCard";
import Image from "next/image";

const WhyChooseUs = () => {
  const ourExpertise = [
    {
      Icon: FaUsersCog,
      IconColor: "yellow",
      name: "Experienced Team",
      description:
        "Our experts possess extensive experience in project management across various fields, ensuring top-quality results tailored to your needs.",
    },
    {
      Icon: FaCheckCircle,
      IconColor: "blue",
      name: "Reliable Service",
      description:
        "We pride ourselves on delivering dependable services that you can trust, with a focus on meeting deadlines and maintaining open communication.",
    },
    {
      Icon: FaCogs,
      IconColor: "yellow",
      name: "Custom Solutions",
      description:
        "We offer personalized solutions designed to meet the unique requirements of each project, ensuring that your vision is realized.",
    },
    {
      Icon: FaDollarSign,
      IconColor: "green",
      name: "Affordable Rates",
      description:
        "Our services are competitively priced, providing exceptional value without compromising on quality or professionalism.",
    },
  ];

  return (
    <section className="w-full relative flex flex-col items-center justify-center py-8 gap-10 px-3">
      <h2 className="flex-1 font-raleway text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white text-start">
        Why Choose Us?
      </h2>
      <div className="p-3 border border-slate-800 rounded-lg">
        <div className="flex gap-3 items-center">
          <Image
            alt="reviewers_img"
            src={"/reviews.png"}
            width={144}
            height={20}
            className="xs:w-36 w-28"
          />
          <div className="w-full">
            <p className="text-nowrap xs:text-sm text-xs">
              <span className="font-bold">5.0</span> Based on{" "}
              <span className="font-bold">145</span> Reviews
            </p>
            <div className="flex gap-1.5">
              <Image alt="star" src={"/star.svg"} width={24} height={20} />
              <Image alt="star" src={"/star.svg"} width={24} height={20} />
              <Image alt="star" src={"/star.svg"} width={24} height={20} />
              <Image alt="star" src={"/star.svg"} width={24} height={20} />
              <Image alt="star" src={"/star.svg"} width={24} height={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full gap-5 mt-10 flex-wrap w-full justify-evenly">
        {ourExpertise.map((expertise) => {
          return <ServicesCard service={expertise} key={expertise.name} />;
        })}
      </div>
    </section>
  );
};

export default AppWrap(
  MotionWrap(WhyChooseUs, "why-choose-us"),
  "why-choose-us",
  "app__whitebg min-h-screen"
);
