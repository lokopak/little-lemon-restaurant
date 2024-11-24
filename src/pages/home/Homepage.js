import About from "../../components/about/About";
import Hero from "../../components/hero/Hero";
import Highlights from "../../components/hightlights/Highlights";
import Testimonials from "../../components/testimonials/Testimonials";

export default function Hompage() {
  return (
    <>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </>
  );
}
