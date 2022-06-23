import { useState } from "react";


const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
      })
    
      const hangleChange = (e) => {
          const {name, value} = e.target
          
          setUser({
            ...user,
            [name]: value
          })
      }

    return (
        <>
            <h3 className="modal__title">Login</h3>
          <div>
            <input
              className="input"
              type="email"
              name="email"
              value={user.email}
              placeholder="Enter your email"
              onChange={hangleChange}
            />
          </div>

          <div>
            <input
              className="input"
              type="password"
              name="password"
              value={user.password}
              placeholder="Enter your password"
              onChange={hangleChange}
            />
          </div>

          <div style={{ textAlign: "center" }}>
            <button className="button" type="submit">
              Login
            </button>
          </div>
        </>
    )
}

export default Login