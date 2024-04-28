import Appiontment from "@/components/appiontment";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Package from "@/components/package";
import Testimonials from "@/components/testimonial";
import Image from "next/image";

export default function Home() {
  return (
   <div className=" w-screen flex flex-col items-center justify-center gap-10">
    <Navbar></Navbar>
    <Hero></Hero>
    <Package></Package>
    <Testimonials></Testimonials>
    <Appiontment></Appiontment>
   </div>
  );
}
