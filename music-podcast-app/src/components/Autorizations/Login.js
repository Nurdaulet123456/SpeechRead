import useAuth from "../hooks/useAuth";
import "./Autorization.css";

const Login = () => {
  const {data, error, handleChange, handleSubmit} = useAuth();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3 className="modal__title">Login</h3>
        <div>
          <input
            className="input"
            type="email"
            name="email"
            value={data.email}
            placeholder="Enter your email"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            className="input"
            type="password"
            name="password"
            value={data.password}
            placeholder="Enter your password"
            required
            onChange={handleChange}
          />
        </div>
        {error && <div className="error__result">{error}</div>}
        <div style={{ textAlign: "center" }}>
          <button className="button submit__btn" type="submit">
            Login
          </button>
        </div>
      </form>
    </>
  );
};

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user-info");
    window.location.reload();
  };

  return (
    <>
      <button className="nav__link" onClick={handleLogout}>
        Выйти
      </button>
    </>
  );
};
export { Login, Logout };
