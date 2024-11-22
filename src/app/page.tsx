import Hero from "./hero";
import VideoIntro from "./video-intro";
import MobileConvenience from "./mobile-convenience";
import Testimonials from "./testimonial-card";
import Faqs from "./faqs";

export default function Home() {
  return (
    <div>
      <Hero />
      <VideoIntro />
      <MobileConvenience />
      <Testimonials />
      <Faqs />
    </div>
  );
}
