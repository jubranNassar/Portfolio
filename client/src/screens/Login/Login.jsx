


export default function Login({handleLogin, loginForm, setLoginForm}) {
  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginForm(prevFormData => (
      {
        ...prevFormData,
        [name]: value
      }
    ))
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => handleLogin(e)}>
        <label htmlFor="">Username</label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="username"
          value={loginForm.username}
        />
        <label htmlFor="">password</label>
        <input
          onChange={(e) => handleChange(e)}
          type="password"
          name="password"
          value={loginForm.password}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}