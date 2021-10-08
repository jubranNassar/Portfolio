import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { getOneSkill, updateSkill, deleteSkill } from "../../services/skills";
import "./EditSkill.css";

export default function EditSkill({ user }) {
  const [formData, setFormData] = useState({
    name: "",
    image_url: "",
  });

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchSkill = async () => {
      const skill = await getOneSkill(id);
      setFormData({ ...skill });
    };
    fetchSkill();
  }, [id]);
  
  console.log(formData)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateSkill(id, formData);
    history.push("/");
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteSkill(id);
    history.push("/");
  };

  const loggedIn = (
    <div className="skill-edit">
      <h1 className="skill-title">Edit Skill</h1>
      <form className="skill-edit-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="skill-label-input">
          <label className="skill-label" htmlFor="skill-name">
            Name
          </label>
          <input
            onChange={(e) => handleChange(e)}
            id="skill-name"
            name="name"
            type="text"
            value={formData.name}
            className="skill-input"
          />
        </div>
        <div className="skill-label-input">
          <label className="skill-label" htmlFor="skill-img">
            Image
          </label>
          <input
            onChange={(e) => handleChange(e)}
            id="skill-img"
            name="image_url"
            type="text"
            value={formData.image_url}
            className="skill-input"
          />
        </div>
        <div className="skill-edit-buttons">
          <button className="skill-edit-button" type="submit">
            Submit
          </button>
          <button
            className="skill-delete"
            onClick={(e) => handleDelete(e)}
            type="submit"
          >
            Delete Skill
          </button>
        </div>
      </form>
    </div>
  );

  const notLoggedIn = (
    <>
      <h1>Sorry, Not found.</h1>
    </>
  );

  return <>{user ? loggedIn : notLoggedIn}</>;
}
