import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";


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


      const login = () => {
        axios.post('http://localhost:3001/api/login', user)
        .then(res => console.log('login success'))
        console.log('adasd')
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
            <motion.button 
            className="button" 
            type="submit" 
            onClick={login}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
              Login
            </motion.button>
          </div>
        </>
    )
}

export default Login