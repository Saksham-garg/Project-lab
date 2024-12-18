import React from "react";
import {
  Header,
  Hero,
  Services,
  WhyChooseUs,
  Contact,
  FAQ,
} from "@/components";
import AutoReply from "@/components/Email/AutoReply";

export default function Home() {
  return (
    <>
      <AutoReply />
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <FAQ />
      <Contact />
    </>
  );
}
