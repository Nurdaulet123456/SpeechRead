// TODO: CSS files
import "../../../index.css";
import "./Translate.css";

// ? import othres files
import { Helmet } from "react-helmet";
import useTranslate from "../../hooks/useTranslate";

const Translate = () => {

  const {
    option, 
    setFrom, 
    setInput, 
    setTo, 
    output,
    translate
  } = useTranslate();

  return (
    <>
      <Helmet>
        <title>Translate</title>
      </Helmet>
      <div className="main translate">
        <div className="container">
          <div className="translate">
            <div className="languages">
              <div className="selected">
                <div>
                  <select onChange={(e) => setFrom(e.target.value)}>
                    {option.map((options) => (
                      <option key={options.code} value={options.code}>
                        {options.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div></div>

                <div className="textarea__words">
                  <textarea
                    cols="50"
                    rows="10"
                    onInput={(e) => setInput(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="selected">
                <select onChange={(e) => setTo(e.target.value)}>
                  {option.map((options) => (
                    <option key={options.code} value={options.code}>
                      {options.name}
                    </option>
                  ))}
                </select>

                <div className="textarea__words">
                  <textarea
                    cols="50"
                    rows="10"
                    value={output}
                    readOnly={true}
                  ></textarea>
                  <div className="btn__right">
                    <button className="button" onClick={() => translate()}>
                      Translate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Translate;
