import Nav from "../../components/Nav/Nav.jsx";
import AboutMe from "../../components/AboutMe/AboutMe.jsx";
import Projects from "../../components/Projects/Projects.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import Login from "../Login/Login.jsx"
import { useState } from "react"
import { login, logout } from "../../services/user"
import { useHistory } from "react-router-dom";
import { Route } from "react-router-dom";
import Landing from "../../components/Landing/Landing.jsx";

export default function Home() {
  const [user, setUser] = useState(null)
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  })

   const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault()
    const user = await login(loginForm)
    setUser(user)
    history.push('/')
  }


  const handleLogout = () => {
    logout()
    setUser(null)
    history.push("/")
  }

  return (
  <div>
    <Nav user={user} handleLogout={handleLogout}/>
    <Route exact path="/login">
    <Login handleLogin={handleLogin} loginForm={loginForm} setLoginForm={setLoginForm}/>
    </Route>
    <Landing/>
    <AboutMe />
    <Projects />
    <Contact />
  </div>
  )
}
