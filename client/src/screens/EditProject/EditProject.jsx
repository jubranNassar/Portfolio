import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  getOneProject,
  updateProject,
  deleteProject,
} from "../../services/projects";
import "./EditProject.css";
export default function EditProject({ user }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    github_url: "",
    deployed_url: "",
    description: "",
    user_id: user?.id,
  });
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      const project = await getOneProject(id);
      setFormData({ ...project });
    };
    fetchProject();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      user_id: user?.id,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProject(id, formData);
    history.push("/");
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteProject(id);
    history.push("/");
  };

  return (
    <div className="edit">
      <h1 className="edit-title">Edit Project</h1>
      <form className="edit-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="edit-label-input">
          <label className="edit-label" htmlFor="name">
            Name
          </label>
          <input
            onChange={(e) => handleChange(e)}
            id="name"
            name="name"
            type="text"
            value={formData.name}
            className="edit-input"
          />
        </div>
        <div className="edit-label-input">
          <label className="edit-label" htmlFor="img">
            Image URL
          </label>
          <input
            onChange={(e) => handleChange(e)}
            id="img"
            name="image"
            type="text"
            value={formData.image}
            className="edit-input"
          />
        </div>
        <div className="edit-label-input">
          <label className="edit-label" htmlFor="gh-url">
            github URL
          </label>
          <input
            onChange={(e) => handleChange(e)}
            id="gh-url"
            name="github_url"
            type="text"
            value={formData.github_url}
            className="edit-input"
          />
        </div>
        <div className="edit-label-input">
          <label className="edit-label" htmlFor="deployed-url">
            Deployed URL
          </label>
          <input
            onChange={(e) => handleChange(e)}
            id="deployed-url"
            name="deployed_url"
            type="text"
            value={formData.deployed_url}
            className="edit-input"
          />
        </div>
        <div className="edit-label-input">
          <label className="edit-label" htmlFor="desc">
            Description
          </label>
          <textarea
            onChange={(e) => handleChange(e)}
            id="desc"
            name="description"
            type="text"
            value={formData.description}
            className="edit-input"
          />
        </div>
        <button className="edit-button" type="submit">
          Submit
        </button>
      </form>
      <button
        className="edit-button"
        onClick={(e) => handleDelete(e)}
        type="submit"
      >
        Delete Project
      </button>
    </div>
  );
}
