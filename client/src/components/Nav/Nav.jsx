import { Link } from "react-router-dom";

export default function Nav(props) {
  const alwaysOption = (
    <>
      <a href="#about-me">About Me</a>
      <a href="#my-projects">My Projects</a>
      <a
        href="https://docs.google.com/document/d/1mYJ4KEgJGJ_vJo45s8y8wL2pMlsgS3sHG28qs-HSZqw/edit#"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
      <a href="#contact">Contact Me</a>
    </>
  );
  const unauthenticated = (
    <>
      <Link to="/login">Login</Link>
    </>
  );
  const authenticated = (
    <>
      <Link to="/add">Add Project</Link>
      <button onClick={props.handleLogout}>Logout</button>
    </>
  );
  return (
    <div>
      {alwaysOption}
      {props.user ? authenticated : unauthenticated}
    </div>
  );
}
