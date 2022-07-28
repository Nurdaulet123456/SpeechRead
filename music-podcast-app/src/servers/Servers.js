import axios from "axios";

const Servers = () => {

  const createResultAndKeys = async (url, result) => {
    try {
      const { data: res } = await axios.post(url, result);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllResultAndKeys = async (url, setResult) => {
    try {
      axios.get(url).then((res) => setResult(res.data));
    } catch (error) {}
  };

  return {
    createResultAndKeys,
    getAllResultAndKeys,
  };
};

export default Servers;
