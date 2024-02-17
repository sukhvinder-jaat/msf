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
import YourFirm from "@/components/YourFirm";
export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <ChooseUs />
      <Global />
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
    </>
  );
}
