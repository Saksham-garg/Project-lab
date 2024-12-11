"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [hamMenu, setHamMenu] = useState<boolean>(false);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef?.current?.contains(event.target as Node)
      ) {
        setHamMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setHamMenu]);

  return (
    <header className="w-full flex justify-between fixed top-0 bg-[#00000024] z-50">
      <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full border-0 border-white">
        <div className="relative flex items-center justify-between h-16 w-full">
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="logo"
              width={130}
              height={65}
              quality={100}
            />
          </Link>
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
          </div>
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden md:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="#services"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Our Services
                </Link>
                <Link
                  href="#why-choose-us"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Why Choose Us?
                </Link>
                <Link
                  href="#faq"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  FAQs
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
            <FaBars
              className="w-6 h-6 md:hidden cursor-pointer"
              onClick={() => setHamMenu(true)}
            />
            <AnimatePresence>
              {hamMenu && (
                <motion.div
                  ref={menuRef}
                  initial={{ width: 0 }}
                  exit={{ width: 0 }}
                  animate={hamMenu ? { width: "45%" } : { width: 0 }}
                  transition={{ duration: 0.85, ease: "easeInOut" }}
                  className={`h-screen absolute top-0 bottom-0 bg-black -right-6 w-[45%]`}
                >
                  <div className="flex justify-end items-end p-5 px-6 w-full">
                    <RxCross2
                      className="w-6 h-6 md:hidden cursor-pointer"
                      onClick={() => setHamMenu(false)}
                    />
                  </div>
                  <div className="flex flex-col space-y-6 mt-16">
                    <Link
                      href="/"
                      onClick={() => setHamMenu(false)}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-6 py-2 rounded-md text-sm font-medium text-nowrap"
                    >
                      Home
                    </Link>
                    <Link
                      href="#services"
                      onClick={() => setHamMenu(false)}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-6 py-2 rounded-md text-sm font-medium text-nowrap"
                    >
                      Our Services
                    </Link>
                    <Link
                      href="#why-choose-us"
                      onClick={() => setHamMenu(false)}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-6 py-2 rounded-md text-sm font-medium text-nowrap"
                    >
                      Why Choose Us?
                    </Link>
                    <Link
                      href="#faq"
                      onClick={() => setHamMenu(false)}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-6 py-2 rounded-md text-sm font-medium text-nowrap"
                    >
                      FAQs
                    </Link>
                    <Link
                      href="#contact"
                      onClick={() => setHamMenu(false)}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-6 py-2 rounded-md text-sm font-medium text-nowrap"
                    >
                      Contact
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
      <div className="flex gap-8 items-center"></div>
    </header>
  );
};

export default Header;
