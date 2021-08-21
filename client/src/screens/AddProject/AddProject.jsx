import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addProject } from "../../services/projects";
import "./AddProject.css";

export default function AddProject({ user }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    github_url: "",
    deployed_url: "",
    description: "",
    user_id: user?.id,
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      user_id: user.id,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProject(formData);
    history.push("/");
  };

  const loggedIn = (
    <div className="add">
    <h1 className="add-title">Add Project</h1>
    <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="add-label-input">
        <label className="add-label" htmlFor="name">
          Name
        </label>
        <input
          onChange={(e) => handleChange(e)}
          id="name"
          name="name"
          type="text"
          value={formData.name}
          className="add-input"
        />
      </div>
      <div className="add-label-input">
        <label className="add-label" htmlFor="img">
          Image URL
        </label>
        <input
          onChange={(e) => handleChange(e)}
          id="img"
          name="image"
          type="text"
          value={formData.image}
          className="add-input"
        />
      </div>
      <div className="add-label-input">
        <label className="add-label" htmlFor="gh-url">
          github URL
        </label>
        <input
          onChange={(e) => handleChange(e)}
          id="gh-url"
          name="github_url"
          type="text"
          value={formData.github_url}
          className="add-input"
        />
      </div>
      <div className="add-label-input">
        <label className="add-label" htmlFor="deployed-url">
          Deployed URL
        </label>
        <input
          onChange={(e) => handleChange(e)}
          id="deployed-url"
          name="deployed_url"
          type="text"
          value={formData.deployed_url}
          className="add-input"
        />
      </div>
      <div className="add-label-input">
        <label className="add-label" htmlFor="desc">
          Description
        </label>
        <textarea
          onChange={(e) => handleChange(e)}
          id="desc"
          name="description"
          type="text"
          value={formData.description}
          className="add-input"
        />
        <button className="add-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
);

const notLoggedIn = (
  <div className="not-logged-in">
    <h1>Sorry, Not found.</h1>
  </div>
)
  

  return (
    <>
    {user ? loggedIn : notLoggedIn }
    </>

  )
}
