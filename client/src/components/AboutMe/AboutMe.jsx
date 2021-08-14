import { useState, useEffect } from "react";
import { getAllSkills } from "../../services/skills";
import "./AboutMe.css"
export default function AboutMe() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const allSkills = await getAllSkills();
      setSkills(allSkills);
    };
    fetchSkills();
  }, []);
  return (
    <div id="about-me">
      <h1 className="about-me">About Me</h1>
      <div className="brand-statement">
        A New York based software engineer with 3 years of experience in sales,
        which has afforded me great ability to design solutions to any problems
        encountered, as well as client-facing communication skills. I am a
        curious and fast learner, love new challenges, and am always open to
        learning more.
      </div>
      <h1 className="my-skills">My Skills</h1>
      <div className="skills-container">
      {skills?.map((skill) => (
        <img className="skills" key={skill.id} src={skill.image_url} alt={skill.name} />
      ))}
      </div>
    </div>
  );
}
