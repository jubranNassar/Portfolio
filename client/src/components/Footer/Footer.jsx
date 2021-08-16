import { Link } from "react-router-dom"
import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <Link to={{pathname: 'https://github.com/jubranNassar'}} target="_blank">
      <img className="image" src="https://imgur.com/02w7BEw.png"/>
      </Link>
      <Link to={{pathname: "https://linkedin.com/in/jubran-nassar-790886199/"}}target="_blank">
        <img className="image" src="https://imgur.com/jcrMqBV.png" target="_blank"/>
      </Link>
      <Link to={{pathname: "mailto: juby.nassar123@gmail.com"}} target="_blank">
      <img className="mail" src="https://imgur.com/WdX5ES0.png"/>
      </Link>
    </div>
  )
}