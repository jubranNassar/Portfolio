import AboutMe from "../../components/AboutMe/AboutMe.jsx";
import Projects from "../../components/Projects/Projects.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import Landing from "../../components/Landing/Landing.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./Home.css";

export default function Home({ user }) {
  return (
    <div className="home">
      <Landing />
      <AboutMe />
      <Projects user={user} />
      <Contact />
      <Footer />
    </div>
  );
}
