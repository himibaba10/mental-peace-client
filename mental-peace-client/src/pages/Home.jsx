import About from "../components/Home/About";
import Articles from "../components/Home/Articles";
import Contact from "../components/Home/Contact";
import Hero from "../components/Home/Hero";
import Learning from "../components/Home/Learning";
import Newsletter from "../components/Home/Newsletter";
import Sessions from "../components/Home/Sessions";
import Testimonials from "../components/Home/Testimonials";
import HomeHeadingWithPara from "../components/Home/HomeHeadingWithPara";
import HomeInfo from "../components/Home/HomeInfo";
import PopularDoctors from "../components/Sessions/PopularDoctors";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Learning />
      <PopularDoctors />
      <Sessions />
      <Testimonials />
      <HomeHeadingWithPara />
      <Articles />
      <Newsletter />
      <Contact />
      <HomeInfo />
    </div>
  );
};

export default Home;
