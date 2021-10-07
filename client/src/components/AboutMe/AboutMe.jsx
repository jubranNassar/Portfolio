import { useState, useEffect } from "react";
import { getAllSkills } from "../../services/skills";
import SkillsButtons from "../SkillsButtons/SkillsButtons";
import "./AboutMe.css";
export default function AboutMe({ user }) {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const allSkills = await getAllSkills();
      setSkills(allSkills);
    };
    fetchSkills();
  }, []);
  return (
    <div data-aos="fade-left" id="about-me">
      <div className="brand-statement-outer">
        <h1 className="about-me">About Me</h1>
        <div className="brand-statement">
          A New York based software engineer with 3 years of experience in
          sales, which has afforded me great ability to design solutions to any
          problems encountered, as well as client-facing communication skills. I
          am a curious and fast learner, love new challenges, and am always open
          to learning more.
        </div>
      </div>
      <div data-aos="fade-right" className="skills-outer">
        <h1 className="my-skills">My Skills</h1>
        <div className="skills-container">
          {skills?.map((skill) => (
            <div className="skill-img-container" key={skill.id}>
            <img
              className="skills"
              src={skill.image_url}
              alt={skill.name}
            />
            <SkillsButtons className="buttons"
            skillID={skill.id}
            user={user} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
