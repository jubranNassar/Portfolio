import Nav from "./components/Nav/Nav.jsx";
import Login from "./screens/Login/Login.jsx";
import { useState } from "react";
import { login, logout } from "./services/user";
import { Route, useHistory } from "react-router-dom";
import AddProject from "./screens/AddProject/AddProject.jsx";
import "./App.css";
import Home from "./screens/Home/Home.jsx";
import EditProject from "./screens/EditProject/EditProject.jsx";
import { useEffect } from "react";
import { verify } from "./services/user";
import Aos from "aos";
import "aos/dist/aos.css";

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
    Aos.init({ duration: 3000 });
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
    </div>
  );
}

export default App;
