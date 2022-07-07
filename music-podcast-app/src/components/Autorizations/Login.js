import { useState } from "react";
// import { useHistory } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import './Autorization.css';

const Login = () => {

  const [data, setData] = useState({
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
      const url = 'http://localhost:8080/api/auth'
      const {data: res} = await axios.post(url, data)
      localStorage.setItem('user-info', JSON.stringify(res))
      localStorage.setItem('token', res.data)
      window.location = '/game'
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
            {error && <div>{error}</div>}
          <div style={{ textAlign: "center" }}>
            <motion.button 
            className="button" 
            type="submit" 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
              Login
            </motion.button>
          </div>

         </form>
        </>
    )

}


const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }

  return (
    <>
      <button className="nav__link" onClick={handleLogout}>
          Выйти
      </button>
      <h3></h3>
    </>
  )
}
export {Login, Logout};