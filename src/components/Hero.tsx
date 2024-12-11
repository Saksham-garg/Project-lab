"use client";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { AppWrap, MotionWrap } from "@/wrapper";
import Button from "./Buttons/Button";
import {
  BeautifulTimeline as Timeline,
  BeautifulTimelineItem as TimelineItem,
} from "react-beautiful-timeline";
import "react-beautiful-timeline/dist/style.css";

const Hero = () => {
  // const items = [{
  //   title: "Connect With Us",
  //   cardTitle: "Dunkirk",
  //   url: "/talk.png",
  //   cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
  //   cardDetailedText: "Schedule a consultation or contact us directly to discuss your needs.",
  //   media: {
  //     type: "IMAGE",
  //     source: {
  //       url: "/talk.png"
  //     }
  //   }
  // }];
  return (
    <MaxWidthWrapper className="flex flex-col items-center justify-center gap-6 md:gap-10 text-center h-full z-10">
      <h1 className="max-w-4xl md:mb-4 font-bold text-5xl md:text-6xl lg:text-7xl font-raleway">
        Ace your <span className="">Projects</span> with us
      </h1>
      <p className="mt-5 max-w-prose sm:text-lg text-white">
        Unlock your academic potential with expert assistance. We're your secret
        weapon for achieving top grades and impressing your professors.
      </p>
      {typeof window !== "undefined" && (
        <Timeline
          type={"horizontal"}
          animation={true}
          passiveLineStyle={{
            background:
              "linear-gradient(90deg, rgba(226, 226, 226, 0.04) -12.5%, #DADADA 49.02%,  rgba(226, 226, 226, 0.04) 105.63%)",
          }}
          activeLineStyle={{
            background:
              "linear-gradient(90deg, rgba(131, 164, 249, 0.04) -12.5%, #A07FFD 49.02%, rgba(131, 164, 249, 0.04) 105.63%)",
          }}
          animationDuration={10}
        >
          <TimelineItem
            dotStyle={{
              width: "24px",
              height: "24px",
              backgroundColor: "#03030355",
            }}
            dotIcon={<img src={"/talk.png"} alt="dotIcon" />}
            dotColor="none"
          >
            <div className="timelineItem bg-white p-1 xs:p-2 rounded-lg text-black mt-4">
              <h3 className="font-semibold font-raleway xs:text-base text-sm">
                Connect With Us
              </h3>
              <p className="hidden xs:block text-xs">
                Schedule a consultation or contact us directly to discuss your
                needs.
              </p>
            </div>
          </TimelineItem>
          <TimelineItem
            dotStyle={{
              width: "24px",
              height: "24px",
              background: "none",
              marginBottom: "-20px",
              zIndex: "20",
            }}
            dotColor="none"
            dotIcon={<img src={"/pricing.png"} alt="dotIcon" />}
            place="opposite"
          >
            <div className="timelineItem bg-white p-1 xs:p-2 rounded-lg text-black mb-4">
              <h3 className="font-semibold font-raleway xs:text-base text-sm">
                Request a Quote
              </h3>
              <p className="hidden xs:block text-xs">
                We’ll provide an affordable quote based on your project
                specifications and get started promptly.
              </p>
            </div>
          </TimelineItem>
          <TimelineItem
            dotIcon={<img src={"/relax.png"} alt="dotIcon" />}
            dotColor="none"
            dotStyle={{
              width: "24px",
              height: "24px",
              background: "none",
            }}
          >
            <div className="timelineItem bg-white p-1 xs:p-2 rounded-lg text-black mt-4">
              <h3 className="font-semibold font-raleway xs:text-base text-sm">
                Relax and Enjoy
              </h3>
              <p className="hidden xs:block text-xs">
                Your work is done! We’ll keep you updated on the project’s
                progress.
              </p>
            </div>
          </TimelineItem>
          <TimelineItem
            dotStyle={{
              width: "24px",
              height: "24px",
              background: "none",
              zIndex: "20",
            }}
            dotIcon={<img src={"/recieve.png"} alt="dotIcon" />}
            dotColor="none"
            place="opposite"
          >
            <div className="timelineItem bg-white p-1 xs:p-2 rounded-lg text-black mb-4">
              <h3 className="font-semibold font-raleway xs:text-base text-sm">
                {" "}
                Receive Your Project
              </h3>
              <p className="hidden xs:block text-xs">
                Get your completed project, crafted with care and precision.
              </p>
            </div>
          </TimelineItem>
        </Timeline>
      )}

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
