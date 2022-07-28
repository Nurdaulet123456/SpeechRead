import { useState, useCallback } from "react";
import axios from "axios";

const useAuth = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const login = useCallback((jwttoken, user_id) => {
    localStorage.setItem("user-info", JSON.stringify(user_id));
    localStorage.setItem("token", jwttoken);
  }, []);

  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({
      ...data,
      [input.name]: input.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      login(res.data, res.users);
      window.location = "/explanation";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return {
    data,
    error,
    handleChange,
    handleSubmit,
  };
};

export default useAuth;
