import Image from "next/image";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Gallary from "./components/Gallary";
import Testimonial from "./components/Testimonial";
import AboutUs from "./components/AboutUs";
import FollowUs from "./components/FollowUs";
import Appointment from "./components/Appointment";

export default function Home() {
  return (
   <div>
    <Hero />
    <AboutUs />
    <Service />
    <Gallary />
    <Testimonial />
    <FollowUs />
 
    


   </div>
  );
}
