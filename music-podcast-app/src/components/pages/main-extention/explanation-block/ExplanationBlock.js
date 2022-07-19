import "../../../../index.css";
import "./ExplanationBlock.css";

// TODO: Imagees

import Timer from "../../../../images/Timer.png";
import StopWatch from "../../../../images/StopWatch.png";
import Translate from "../../../../images/Translate.png";

// TODO: React Hooks
import React from "react";

const ExplanationBlock = () => {
  return (
    <>
      <div className="explanation-block">
        <div className="container">
          <div className="explanation-block__inner">
            <div className="explanation-block__block">
              <div className="explanation-block__content">
                <h3 className="explanation-block__title">Timer</h3>
                <div className="explanation-block__text">
                  <p>
                    Here you can read the book on time. You can choose your own
                    time and read on it. When the time runs out, a modal window
                    will appear, there will be results:
                  </p>
                  <ul>
                    <li>1. How many words did you read</li>
                    <li>2. How many pages did you read</li>
                    <li>3. Latest is at what speed you read</li>
                  </ul>
                  <p>
                    All these results will be saved on the profile page, you can
                    see it there whenever you want. There is also a second modal
                    window there will be your words that were read. There you
                    can underline the keywords that you need and this will also
                    be saved on the profile page. You can repeat there.
                  </p>
                </div>
              </div>
              <div className="content__img">
                <img src={Timer} alt="" width={400} />
              </div>
            </div>

            <div className="explanation-block__block">
              <div className="explanation-block__content">
                <h3 className="explanation-block__title">StopWatch</h3>
                <div className="explanation-block__text">
                  <p>
                    Here, too, such a scheme. But the difference is that you
                    can't choose the time. This is just speed reading. In a
                    minute you should read as many words as you want. But you
                    will have to read a lot of words, because this word that you
                    read is considered as a record. What is it like ? This is
                    every day to update your vocabulary record and more stock.
                    It will help you:
                  </p>
                  <ul>
                    <li>1. Add speed</li>
                    <li>2. Increase vocabulary</li>
                  </ul>
                  <p>
                    After reading, a modal window will also appear. There will
                    be results:
                  </p>
                  <ul>
                    <li>1. How many words did you read</li>
                    <li>2. How many pages did you read</li>
                    <li>3. Latest is at what speed you read</li>
                  </ul>
                </div>
              </div>
              <div className="content__img">
                <img src={StopWatch} alt="" width={400} />
              </div>
            </div>

            <div
              className="explanation-block__block"
              style={{ marginBottom: "0" }}
            >
              <div className="explanation-block__content">
                <h3 className="explanation-block__title">Translate</h3>
                <div className="explanation-block__text">
                  <p>
                    You can translate here. For example, you are reading a book
                    in English, you can’t even read in any language, and after
                    you know, a modal window appears and in the second window
                    you can select words and copy after you go to the
                    translator’s page, translate the word you need, that’s all.
                    By the way, after that there will be a checkmark if you
                    check the box, your words that were translated will be
                    saved. You can visit the site every day and repeat the words
                    will be saved on the profile page.
                  </p>
                  <p>Why this will help you:</p>
                  <ul>
                    <li>1. Expand your horizons</li>
                    <li>2. Of course vocabulary</li>
                    <li>3. Raise the level of the language</li>
                    <li>4. Easy to use and yet comfortable</li>
                  </ul>
                </div>
              </div>
              <div className="content__img">
                <img src={Translate} alt="" width={400} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExplanationBlock;
