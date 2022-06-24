import { useState } from "react";
import axios from 'axios';

const Register = () => {

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        repeatpassword: "",
      })
    
      const hangleChange = (e) => {
          const {name, value} = e.target
          
          setUser({
            ...user,
            [name]: value
          })
      }

      const registration = () => {
        const {name, username, email, password, repeatpassword} = user

        if (name && username && email && password && (password === repeatpassword)) {

        axios.post('http://localhost:3001/register', user)
        .then((response) => console.log(response.data.message))

      } else {
        alert('not registered')
      }
    }
    return (
        <>
            <h3 className="modal__title">Registration</h3>
          <div>
            <input
              className="input"
              type="text"
              name="name"
              value={user.name}
              placeholder="Your Name"
              onChange={hangleChange}
            />
          </div>

          <div>
            <input
              className="input"
              type="text"
              name="username"
              value={user.username}
              placeholder="Enter your username"
              onChange={hangleChange}
            />
          </div>

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

          <div>
            <input
              className="input"
              type="password"
              name="repeatpassword"
              value={user.repeatpassword}
              placeholder="Repeat your password"
              onChange={hangleChange}
            />
          </div>

          <div style={{ textAlign: "center" }}>
            <button className="button" type="submit" onClick={registration}>
              Registration
            </button>
          </div>
        </>
    )
}


export default Register