
import { useState, useEffect } from "react"
import { getAllSkills } from "../../services/skills"

export default function AboutMe() {

const [skills, setSkills] = useState([])

useEffect(()=> {
  const fetchSkills = async () => {
    const allSkills = await getAllSkills()
    setSkills(allSkills)
  }
  fetchSkills()
}, [])
  return (
    <div>
      <h1>About Me</h1>
      <p>A New York based software engineer with 3 years of experience in sales, which has afforded me great ability to design solutions to any problems encountered, as well as client-facing communication skills. I am a curious and fast learner, love new challenges, and am always open to learning more.</p>
      <h1>My Skills</h1>
      {skills?.map((skill)=> (
        <img src={skill.image_url} alt={skill.name}/>
      ))}

    </div>
  )
}