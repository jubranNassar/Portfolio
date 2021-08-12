import { Link } from "react-router-dom"


export default function ProjectButtons({deployedURL, githubURL}) {
  return (
    <>
    <Link to={{pathname: deployedURL }} target="_blank">
    <button>See the app</button>
    </Link>

    <Link to={{pathname: githubURL}} target="_blank">
      <button>See the code</button>
    </Link>
    </>
  )
}