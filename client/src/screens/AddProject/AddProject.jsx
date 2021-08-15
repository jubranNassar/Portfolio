import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addProject } from "../../services/projects";

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

  return (
    <div>
      <h1>Add Project</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">name:</label>
        <input
          onChange={(e) => handleChange(e)}
          id="name"
          name="name"
          type="text"
          value={formData.name}
        />
        <label htmlFor="img">Image URL:</label>
        <input
          onChange={(e) => handleChange(e)}
          id="img"
          name="image"
          type="text"
          value={formData.image}
        />
        <label htmlFor="gh-url">github URL</label>
        <input
          onChange={(e) => handleChange(e)}
          id="gh-url"
          name="github_url"
          type="text"
          value={formData.github_url}
        />
        <label htmlFor="deployed-url">Deployed URL</label>
        <input
          onChange={(e) => handleChange(e)}
          id="deployed-url"
          name="deployed_url"
          type="text"
          value={formData.deployed_url}
        />
        <label htmlFor="desc">Description</label>
        <textarea
          onChange={(e) => handleChange(e)}
          id="desc"
          name="description"
          type="text"
          value={formData.description}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
