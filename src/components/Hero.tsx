"use client";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { AppWrap, MotionWrap } from "@/wrapper";
import Button from "./Buttons/Button";

type Props = {};

const Hero = (props: Props) => {
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

      {/* Feature Selection  */}
      {/* <div className="mx-auto my-32 max-w-5xl md:mt-52">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              Start chatting in minutes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Chatting with your PDF has never been easier than with Quill.
            </p>
          </div>
        </div>

 

        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 1</span>
              <span className="text-xl font-semibold">
                Sign up for an account
              </span>
              <span className="mt-2 text-zinc-700">
                Either starting out with a free plan or choose our{" "}
                <Link
                  href="/pricing"
                  className="text-blue-700 underline underline-offset-2"
                >
                  pro plan
                </Link>
                .
              </span>
            </div>
          </li>

          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 2</span>
              <span className="text-xl font-semibold">
                Upload your PDF file
              </span>
              <span className="mt-2 text-zinc-700">
                We&apos;ll process your file and make it ready for you to chat
                with.
              </span>
            </div>
          </li>

          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 3</span>
              <span className="text-xl font-semibold">
                Start asking questions
              </span>
              <span className="mt-2 text-zinc-700">
                It&apos;s that simple. Try out Quill today - it really takes
                less than a minute.
              </span>
            </div>
          </li>
        </ol>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"></div>
          </div>
        </div>
      </div> */}
    </MaxWidthWrapper>
  );
};

export default AppWrap(MotionWrap(Hero, "home h-full"), "home", "h-screen");
