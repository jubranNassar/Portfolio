import { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import Home from "./screens/Home/Home.jsx";
import Login from "./screens/Login/Login.jsx";
import AddProject from "./screens/AddProject/AddProject.jsx";
import EditProject from "./screens/EditProject/EditProject.jsx";
import Messages from "./screens/Messages/Messages.jsx";
import Nav from "./components/Nav/Nav.jsx";
import EditSkill from "./screens/EditSkill/EditSkill.jsx";
import { login, logout, verify } from "./services/user";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await login(loginForm);
    setUser(user);
    history.push("/");
  };
  useEffect(() => {
    const reverify = async () => {
      const currentUser = await verify();
      setUser(currentUser);
    };
    Aos.init({ duration: 1500 });
    reverify();
  }, []);

  const handleLogout = () => {
    logout();
    setUser(null);
    history.push("/");
  };

  return (
    <div className="App">
      <Nav user={user} handleLogout={handleLogout} />
      <Route exact path="/">
        <Home user={user} />
      </Route>
      <Route exact path="/login">
        <Login
          handleLogin={handleLogin}
          loginForm={loginForm}
          setLoginForm={setLoginForm}
        />
      </Route>

      <Route exact path="/add">
        <AddProject setUser={setUser} user={user} />
      </Route>
      <Route exact path="/edit/:id">
        <EditProject user={user} setUser={setUser} />
      </Route>
      <Route exact path="/contacts">
        <Messages user={user} />
      </Route>
      <Route exact path="/skills/edit/:id">
        <EditSkill user
        ={user}/>
      </Route>
    </div>
  );
}

export default App;
