import Blog from "@/components/Blog";
import BrackingClass from "@/components/BrackingClass";
import California from "@/components/California";
import ChooseUs from "@/components/ChooseUs";
import Featured from "@/components/Featured";
import Global from "@/components/Global";
import Hero from "@/components/Hero";
import Pursue from "@/components/Pursue";
import Representation from "@/components/Representation";
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
    </>
  );
}
