import {useState, useEffect} from 'react';
import axios from "axios"

const useTranslate = () => {
    const [option, setOption] = useState([]);
    const [to, setTo] = useState("en");
    const [from, setFrom] = useState("en");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
  
    useEffect(() => {
      axios
        .get("https://libretranslate.de/languages", {
          headers: {
            Accept: "application/json",
          },
        })
        .then((res) => {
          setOption(res.data);
        });
    }, []);
  
    const translate = () => {
      const params = new URLSearchParams();
      params.append("q", input);
      params.append("source", from);
      params.append("target", to);
      params.append("api_key", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
  
      axios
        .post("https://libretranslate.de/translate", params, {
          headers: {
            accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((res) => {
          setOutput(res.data.translatedText);
        });
    };

    return {
        option,
        setTo,
        setFrom,
        setInput,
        output,
        translate
    }
}

export default useTranslate;