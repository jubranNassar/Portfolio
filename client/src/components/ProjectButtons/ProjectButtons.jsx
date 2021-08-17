import { Link } from "react-router-dom";
import "./ProjectButtons.css";

export default function ProjectButtons({
  deployedURL,
  githubURL,
  user,
  projectID,
}) {
  const alwaysVisible = (
    <>
      <Link to={{ pathname: deployedURL }} target="_blank">
        <button className="button">See the app</button>
      </Link>

      <Link to={{ pathname: githubURL }} target="_blank">
        <button className="button">See the code</button>
      </Link>
    </>
  );

  const loggedIn = (
    <>
      <Link to={`/edit/${projectID}`}>
        <button className="button">Edit</button>
      </Link>
    </>
  );
  return (
    <div>
      {alwaysVisible}
      {user ? loggedIn : null}
    </div>
  );
}
