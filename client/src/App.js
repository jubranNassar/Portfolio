import Nav from "./components/Nav/Nav.jsx";
import Login from "./screens/Login/Login.jsx";
import { useState } from "react";
import { login, logout } from "./services/user";
import { Route, useHistory } from "react-router-dom";
import AddProject from "./screens/AddProject/AddProject.jsx";
import "./App.css";
import Home from "./screens/Home/Home.jsx";
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

  const handleLogout = () => {
    logout();
    setUser(null);
    history.push("/");
  };

  return (
    <div className="App">
      <Nav user={user} handleLogout={handleLogout} />
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/login">
        <Login
          handleLogin={handleLogin}
          loginForm={loginForm}
          setLoginForm={setLoginForm}
        />
      </Route>

      <Route exact path="/add">
        <AddProject user={user} />
      </Route>
    </div>
  );
}

export default App;
