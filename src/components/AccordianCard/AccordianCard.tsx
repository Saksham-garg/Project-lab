"use client";
import React, { useEffect, useRef, useState } from "react";
import PlusIcon from "./PlusIcon";
import MinusIcon from "./MinusIcon";

type Props = {
  question: string;
  answer: string;
  activeAccordian: number;
  index: number;
  toggleAccordion: () => void;
};

const AccordianCard = ({
  question,
  answer,
  activeAccordian,
  index,
  toggleAccordion,
}: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | null>(null); // State for dynamic height
  useEffect(() => {
    if (activeAccordian === index && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight); // Calculate the content height when expanded
    } else {
      setContentHeight(0); // Collapse to height 0 when not active
    }
  }, [activeAccordian, index]);
  return (
    <div>
      <div
        className="border-[1.5px] border-slate-800 rounded-xl accordian p-2.5 xs:p-4 max-w-xl cursor-pointer"
        onClick={toggleAccordion}
      >
        <button className="w-full flex justify-between items-center text-slate-800">
          <span className="text-white font-semibold">{question}</span>
          <span
            id={`icon-${index}`}
            className="text-slate-800 transition-transform duration-300"
          >
            {activeAccordian == index ? <MinusIcon /> : <PlusIcon />}
          </span>
        </button>
        <div
          id={`content-${index}`}
          style={{
            height: contentHeight !== null ? `${contentHeight}px` : "0px",
            transition: "height 0.5s ease-in-out",
          }}
          className="overflow-hidden mt-3"
        >
          <div ref={contentRef} className="text-sm text-[#F5F5F5]">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordianCard;
