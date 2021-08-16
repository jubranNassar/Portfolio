import "./Login.css";

export default function Login({ handleLogin, loginForm, setLoginForm }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <div className="login">
      <h1 className="login-title">Welcome Back</h1>
      <form className="login-form" onSubmit={(e) => handleLogin(e)}>
        <div className="login-label-input">
          <div className="login-label">
            <label htmlFor="">Username</label>
          </div>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            name="username"
            value={loginForm.username}
          />
        </div>
        <div className="login-label-input">
          <div className="login-label">
            <label htmlFor="">Password</label>
          </div>
          <input
            onChange={(e) => handleChange(e)}
            type="password"
            name="password"
            value={loginForm.password}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
