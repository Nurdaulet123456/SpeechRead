import axios from "axios";

const Servers = () => {

  const createResultAndKeys = async (url, data, setError) => {
    try {
      const { data: res } = await axios.post(url, data);
      console.log(res);
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

  const getAllResultAndKeys = async (url, setResult, setError) => {
    try {
      axios.get(url).then((res) => setResult(res.data));
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
    createResultAndKeys,
    getAllResultAndKeys,
  };
};

export default Servers;
