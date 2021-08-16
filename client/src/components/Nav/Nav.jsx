import { Link } from "react-router-dom";
import "./Nav.css"

export default function Nav(props) {
  const alwaysOption = (
    <>
      <a href="/#landing">
        <img className="home-img" src="https://imgur.com/buzW4tI.png" alt="Home"/>
      </a>
      <a  className="links"href="/#about-me">About Me</a>
      <a  className="links"href="/#projects">My Projects</a>
      <a className="links"
        href="https://docs.google.com/document/d/1mYJ4KEgJGJ_vJo45s8y8wL2pMlsgS3sHG28qs-HSZqw/edit#"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
      <a className="links" href="/#contact">Contact Me</a>
    </>
  );
  const unauthenticated = (
    <>
      <Link className="links" to="/login">Login</Link>
    </>
  );
  const authenticated = (
    <>
      <Link  className="links"to="/add">Add Project</Link>
      <button className="links" onClick={props.handleLogout}>Logout</button>
    </>
  );
  return (
    <header className="nav">
      {alwaysOption}
      {props.user ? authenticated : unauthenticated}
    </header>
  );
}
