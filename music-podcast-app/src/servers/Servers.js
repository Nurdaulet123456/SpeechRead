import axios from "axios";
import { useState } from "react";

const Servers = () => {

    const [res, setResult] = useState([])
    
    const createResultAndKeys = async (url, result) => {
        try {
            const { data: res } = await axios.post(url, result);
            console.log(res);
        } catch (error) {
            console.log(error)
        }
    }

    const getAllResultAndKeys = async (url) => {
        try {
        axios
        .get(url)
        .then((res) => setResult(res.data));
        } catch (error) {
            
        }
    }

    return {
        createResultAndKeys,
        getAllResultAndKeys,
        res
    }
}

export default Servers;
