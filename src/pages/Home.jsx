import Hero from "../components/Hero";
import AboutFellowship from "../components/AboutFellowship";
import Objectives from "../components/Objectives";
// import About from "../components/About";
import Events from "../components/Events";
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

      {/* <About /> */}

      <section id="events">
        <Events />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
