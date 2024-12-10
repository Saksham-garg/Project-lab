"use client";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { AppWrap, MotionWrap } from "@/wrapper";
import Button from "./Buttons/Button";

const Hero = () => {
  return (
    <MaxWidthWrapper className="flex flex-col items-center justify-center gap-10 text-center h-full z-10">
      <h1 className="max-w-4xl mb-4 font-bold text-5xl md:text-6xl lg:text-7xl font-raleway">
        Ace your <span className="">Projects</span> with us
      </h1>
      <p className="mt-5 max-w-prose sm:text-lg text-white">
        Unlock your academic potential with expert assistance. We're your secret
        weapon for achieving top grades and impressing your professors.
      </p>
      <div className="flex gap-4">
        <Link href="#services">
          <Button name="Explore Services" />
        </Link>
        <Link href="#contact">
          <Button name="Get in Touch" />
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default AppWrap(MotionWrap(Hero, "home h-full"), "home", "h-screen");
