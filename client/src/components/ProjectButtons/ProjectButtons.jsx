import { Link } from "react-router-dom"


export default function ProjectButtons({deployedURL, githubURL, user, projectID}) {

  const alwaysVisible = (
    <>
    <Link to={{pathname: deployedURL }} target="_blank">
    <button>See the app</button>
    </Link>

    <Link to={{pathname: githubURL}} target="_blank">
      <button>See the code</button>
    </Link>
    </>
  )

  const loggedIn = (
    <>
    <Link to={`/edit/${projectID}`}>
      <button>Edit</button>
    </Link>
    </>
  )
  return (
    <div>
      {user ? loggedIn : null}
      {alwaysVisible}
    </div>


  )
}