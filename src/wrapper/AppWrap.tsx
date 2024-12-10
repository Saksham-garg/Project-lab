import { NavigationDots, SocialMedia } from "../components/Parent-Comp";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";

const AppWrap = (Component: React.FC, idName: string, classNames: string) =>
  function HOC() {
    const backgroundRef = useRef<HTMLDivElement>(null);
    // useEffect(() => {
    //   // GSAP animation to rotate the background
    //   gsap.to(".rotating-background", {
    //     rotation: 360,
    //     duration: 30,
    //     ease: "none",
    //     repeat: -1,
    //     transformOrigin: "50% 50%", // Ensure rotation around the center
    //   });
    // }, []);
    return (
      <div
        ref={backgroundRef}
        id={idName}
        className={cn(`w-full flex min-h-screen h-full`, classNames)}
      >
        <SocialMedia />
        <div className="flex-1 w-full px-4 py-8 xs:px-8 xs:py-4 sm:px-16 sm:py-8 h-full">
          <Component />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
