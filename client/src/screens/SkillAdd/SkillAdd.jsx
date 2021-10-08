import { useState } from "react";
import { useHistory } from "react-router";
import { addSkill } from "../../services/skills";
import "./SkillAdd.css";

export default function SkillAdd({ user }) {
  const [formData, setFormData] = useState({
    name: "",
    image_url: "",
  });

  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addSkill(formData);
    history.push("/");
  };
  const loggedIn = (
    <div className="skill-add">
      <h1 className="skill-add-title">Add Skill</h1>
      <form className="skill-add-form" onSubmit={(e) => handleSubmit(e)}> 
        <div className="skill-add-label-input">
          <label className="skill-add-label" htmlFor="skill-add-name">
            Name
          </label>
          <input onChange={(e)=> handleChange(e)} id="skill-add-name"
          name="name"
          type="text"
          value={formData.name}
          className="skill-add-input"/>
        </div>
        <div className="skill-add-label-input">
          <label className="skill-add-label" htmlFor="skill-add-image">
            Image
          </label>
          <input onChange={(e)=> handleChange(e)} id="skill-add-image"
          name="image_url"
          type="text"
          value={formData.image_url}
          className="skill-add-input"/>
        </div>
        <button className="skill-add-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );

  const notLoggedIn = (
    <div>
      <h1>Sorry, Not found.</h1>
    </div>
  )
  return (
  <>
  { user ? loggedIn : notLoggedIn}
  </>
  );
}
