import './Autorization.css';

import { useState } from "react";
import axios from 'axios';


const Register = () => {

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  })
  const [error, setError] = useState('');

  const handleChange = ({currentTarget: input}) => {
    setData({
      ...data, 
      [input.name]: input.value
    })

  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const url = 'http://localhost:8080/api/users'
      const {data: res} = await axios.post(url, data)
      console.log(res.message);
    } catch (error) {
      if (error.response && 
        error.response.status >= 400 &&
        error.response.status <= 500) {
          setError(error.response.data.message)
        }
    }
  }

    return (
        <>
           <form onSubmit={handleSubmit}>
            
           <h3 className="modal__title">Registration</h3>
          <div className="blocks">
            <input
              className="input"
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
          </div>

          <div className="blocks">
            <input
              className="input"
              type="text"
              name="username"
              value={data.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </div>

          <div className="blocks">
            <input
              className="input"
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="blocks">
            <input
              className="input"
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          {error && <div className="error__result">{`${error}`}</div>}

          <div style={{ textAlign: "center" }}>
            <button 
            className="button submit__btn" 
            type="submit">
              Registration
            </button>
          </div>

           </form>
        </>
    )
}


export default Register