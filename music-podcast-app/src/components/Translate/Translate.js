// TODO: CSS files
import "../../index.css";
import "./Translate.css";

// ? import othres files

import { useState, useEffect } from "react";
import axios from "axios";

const Translate = () => {
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

  return (
    <div className="main translate">
      <div className="container">
        <div className="translate">
          <div className="languages">
            From: {from}
            <select onChange={(e) => setFrom(e.target.value)}>
              {option.map((options) => (
                <option key={options.code} value={options.code}>
                  {options.name}
                </option>
              ))}
            </select>
            To: {to}
            <select onChange={(e) => setTo(e.target.value)}>
              {option.map((options) => (
                <option key={options.code} value={options.code}>
                  {options.name}
                </option>
              ))}
            </select>
          </div>

          <div className="textarea__words">
            <textarea
              cols="50"
              rows="8"
              onInput={(e) => setInput(e.target.value)}
            ></textarea>
          </div>
          <div className="textarea__words">
            <textarea cols="50" rows="8" value={output}></textarea>
          </div>

          <button className="btn" onClick={(e) => translate()}>
            Translate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Translate;
