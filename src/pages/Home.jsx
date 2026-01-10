import Hero from "../components/Hero";
import AboutFellowship from "../components/AboutFellowship";
import Objectives from "../components/Objectives";
import WhoCanApply from "../components/WhoCanApply";
// import About from "../components/About";
import Events from "../components/Events";
import Benefits from "../components/Benefits";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      {/* 👇 NEW SECTION BELOW HERO */}
      <AboutFellowship />

      <section id="objectives">
        <Objectives />
      </section>

      <section id="apply">
        <WhoCanApply />
      </section>

      {/* <About /> */}

      <section id="events">
        <Events />
      </section>

      <section id="benefits">
        <Benefits />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
