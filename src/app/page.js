"use client"
import Attorneys from "@/components/Attorneys";
import Blog from "@/components/Blog";
import BrackingClass from "@/components/BrackingClass";
import California from "@/components/California";
import ChooseUs from "@/components/ChooseUs";
import Contact from "@/components/Contact";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import GetUpdate from "@/components/GetUpdate";
import Global from "@/components/Global";
import Hero from "@/components/Hero";
import Pursue from "@/components/Pursue";
import Representation from "@/components/Representation";
import WhyWe from "@/components/WhyWe";
import YourFirm from "@/components/YourFirm";
import BackToTop from "@/components/common/BackToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Home() {
   useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className=" overflow-hidden">
      <BackToTop />
      <Hero />
      <Featured />
      <ChooseUs />
      <Global />
      <WhyWe />
      <BrackingClass />
      <Representation />
      <Pursue />
      <California />
      <Blog />
      <YourFirm />
      <Contact />
      <GetUpdate />
      <Attorneys />
      <Footer />
    </div>
  );
}
