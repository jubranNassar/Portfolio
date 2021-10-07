import { Link } from "react-router-dom";
import "./SkillsButtons.css";

export default function SkillsButtons({ skillID, user }) {
  const button = (
    <div>
      <Link to={`/skills/edit/${skillID}`}>
        <button className="button">Edit</button>
      </Link>
    </div>
  );
  return <div>{user ? button : null}</div>;
}
