import Hero from "../components/Hero";
import Programs from "../components/Programs";
import About from "../components/About";
import Events from "../components/Events";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>

      <section id="home">
        <Hero />
      </section>

      <section id="programs">
        <Programs />
      </section>

      <About />

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
