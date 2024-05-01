import Image from "next/image";
import Hero from "./components/Hero";
import Selection from "./components/Selection";

export default function Home() {
  return (
    <div className="relative px-3">
      <Hero />
      <Selection />
    </div>
  );
}
