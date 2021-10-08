import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav({ user, handleLogout }) {
  const alwaysOption = (
    <>
      <a href="/#landing">
        <img
          className="home-img"
          src="https://imgur.com/buzW4tI.png"
          alt="Home"
        />
      </a>
      <a className="links" href="/#about-me">
        About Me
      </a>
      <a className="links" href="/#projects">
        My Projects
      </a>
      <a className="links" href="/#contact">
        Contact Me
      </a>
      <a
        className="links"
        href="https://docs.google.com/document/d/1mYJ4KEgJGJ_vJo45s8y8wL2pMlsgS3sHG28qs-HSZqw/edit#"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
    </>
  );
  const unauthenticated = (
    <>
      <Link className="links" id="login-button" to="/login">
        Login
      </Link>
    </>
  );
  const authenticated = (
    <>
      <Link className="links" to="/contacts">
        Contacts
      </Link>
      <Link className="links" to="/add">
        Add Project
      </Link>

      <Link className="links" to="/add/skill">
        Add Skill
      </Link>
      <button className="links" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
  return (
    <header className="nav">
      {alwaysOption}
      {user ? authenticated : unauthenticated}
    </header>
  );
}
