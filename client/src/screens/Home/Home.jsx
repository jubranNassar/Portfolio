import AboutMe from "../../components/AboutMe/AboutMe.jsx";
import Projects from "../../components/Projects/Projects.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import Landing from "../../components/Landing/Landing.jsx";

export default function Home({ user }) {
  return (
    <div>
      <Landing />
      <AboutMe />
      <Projects user={user} />
      <Contact />
    </div>
  );
}
