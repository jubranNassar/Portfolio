import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getOneProject, updateProject, deleteProject } from "../../services/projects"

export default function EditProject({user}) {
  const [formData, setFormData] = useState({
    name: "",
    image_url: "",
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
      setFormData({...project});
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

  const handleDelete = async(e)=> {
    e.preventDefault()
    await deleteProject(id)
    history.push("/")
  }

  return (
    <div>
      <h1>Edit Project</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => handleChange(e)}
          id="name"
          name="name"
          type="text"
          value={formData.name}
        />
        <label htmlFor="img">Image URL</label>
        <input
          onChange={(e) => handleChange(e)}
          id="img"
          name="image_url"
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
        <input
          onChange={(e) => handleChange(e)}
          id="desc"
          name="description"
          type="text"
          value={formData.description}
        />

        <button type="submit">Submit</button>
      </form>
        <button onClick={(e)=>handleDelete(e)} type="subit">Delete Project</button>
    </div>
  );
}
