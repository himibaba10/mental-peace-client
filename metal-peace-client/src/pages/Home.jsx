import About from "../components/Home/About";
import Articles from "../components/Home/Articles";
import Contact from "../components/Home/Contact";
import FacebookFeed from "../components/Home/FacebookFeed";
import Hero from "../components/Home/Hero";
import Learning from "../components/Home/Learning";
import Newsletter from "../components/Home/Newsletter";
import Sessions from "../components/Home/Sessions";
import Testimonials from "../components/Home/Testimonials";
import FooterInfo from "../components/Shared/FooterInfo";
import HeadingWithPara from "../components/Shared/HeadingWithPara";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Learning />
      <Sessions />
      <Testimonials />
      <HeadingWithPara
        subTitle="From regular care provider to working at an energetic level"
        title="My own path in short"
        para={
          <>
            Before I started my own practice, I worked in regular healthcare for
            15 years at higher professional level. Including within addiction
            care and mental health care, both with children and adults. It has
            given me a lot of insight into us humans and has increased my
            fascination and admiration for humanity. With this wealth of
            experience I came into contact with gnosis. A world opened up for me
            when I made contact with my subconscious in sessions. And discovered
            that I could guide people on a deeper level with energetic sessions.
            <br /> <br />
            The sessions enabled people to actually get their pain out of their
            system, instead of learning to live with it. After years of sessions
            with myself and others, I felt in 2012 that it was time to set up my
            own practice. In my work I combine the knowledge and experience of
            regular care with gnosis. In addition to the sessions, I am an
            author for the online magazines Nieuwetijdskind and Inspirerend
            Leven. I write about the origins of blockages, your intuition, how
            to deal with feelings and more.
          </>
        }
        size="text-5xl"
      />
      <Articles />
      <FacebookFeed />
      <Newsletter />
      <Contact />
      <FooterInfo>
        <small className="text-base font-normal">- Some Writing -</small>
        <h2 className="mt-5">
          Trust receives, Love gives. No one will be able to receive without
          trust. No one will be able to give without love.
          <br />
          <br />
          That is why we trust in order to receive and we love in order to truly
          give. Because if someone does not give out of love, what he has given
          is of no use to him.
        </h2>
      </FooterInfo>
    </div>
  );
};

export default Home;
