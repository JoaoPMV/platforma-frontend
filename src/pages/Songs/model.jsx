import { useState } from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";

import "../Platform.css";

export default function LyricsGame() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  // prettier-ignore
  const lyrics = [
    { textBefore: "", missingWord: "", textAfter: ""},
    { textBefore: "", missingWord: "", textAfter: ""},
    { textBefore: "", missingWord: "", textAfter: ""},
    { textBefore: "", missingWord: "", textAfter: ""},
    { textBefore: "", missingWord: "", textAfter: ""},
    { textBefore: "", missingWord: "", textAfter: ""},
    { textBefore: "", missingWord: "", textAfter: ""},
    { textBefore: "", missingWord: "", textAfter: ""},
    { textBefore: "", missingWord: "", textAfter: ""},
    { textBefore: "", missingWord: "", textAfter: ""},
    { textBefore: "", missingWord: "", textAfter: ""},
    { textBefore: "", missingWord: "", textAfter: ""},
    { textBefore: "", missingWord: "", textAfter: ""},
    { textBefore: "", missingWord: "", textAfter: ""},
    { textBefore: "", missingWord: "", textAfter: ""},
    { textBefore: "", missingWord: "", textAfter: ""},
    { textBefore: "", missingWord: "", textAfter: ""},
    { textBefore: "", missingWord: "", textAfter: ""},
    { textBefore: "", missingWord: "", textAfter: ""},
    { textBefore: "", missingWord: "", textAfter: ""},
    { textBefore: "", missingWord: "", textAfter: ""},

   
   
  ];

  const [answers, setAnswers] = useState(Array(lyrics.length).fill(""));

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <div className="container">
      <p className="singer">Seven Nation Army</p>
      <p className="song">The White Stripes</p>

      <div className="row">
        <div className="">
          <img
            src="/images/sevennation.jpg"
            className="images rounded-5"
            alt=""
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <audio controls className="mt-3">
            <source src="/Musics/theWhiteStripes.mp3" type="audio/mpeg" />
            Seu navegador não suporta áudio HTML5.
          </audio>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div
            className="col-6 text-center"
            onClick={() => toggleSection("lyrics")}
          >
            <p className="p-button-music">Lyrics</p>
            <FaArrowAltCircleDown className="button-music" />
          </div>

          <div
            className="col-6 text-center"
            onClick={() => toggleSection("vocabulary")}
          >
            <p className="p-button-music">Vocabulary</p>
            <FaArrowAltCircleDown className="button-music" />
          </div>
        </div>
      </div>

      <div
        className="lyricsFields"
        style={{ display: activeSection === "lyrics" ? "block" : "none" }}
      >
        <div>
          {lyrics.map((line, index) => (
            <p key={index}>
              {line.textBefore}
              {line.missingWord ? (
                <input
                  type="text"
                  value={answers[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  style={{
                    margin: "0 5px",
                    textAlign: "center",
                    fontSize: "14px",
                    border: "1px solid gray",
                    borderColor:
                      answers[index].toLowerCase() ===
                      line.missingWord.toLowerCase()
                        ? "green"
                        : "rgb(196, 27, 27)",
                    backgroundColor:
                      answers[index].toLowerCase() ===
                      line.missingWord.toLowerCase()
                        ? "green"
                        : "rgb(196, 27, 27)",
                    color:
                      answers[index].toLowerCase() ===
                      line.missingWord.toLowerCase()
                        ? "white"
                        : "black",

                    outline: "none",
                  }}
                />
              ) : null}
              {line.textAfter}
            </p>
          ))}
        </div>
      </div>

      <div
        className="vocabularyFields"
        style={{ display: activeSection === "vocabulary" ? "block" : "none" }}
      >
        <div className="row">
          <div className="col-4 col-lg-1 my-2"></div>
          <div className="col-4 col-lg-1 my-2"></div>
          <div className="col-4 col-lg-1 my-2"></div>
          <div className="col-4 col-lg-1 my-2"></div>
          <div className="col-4 col-lg-1 my-2"></div>
          <div className="col-4 col-lg-1 my-2"></div>
          <div className="col-4 col-lg-1 my-2"></div>
          <div className="col-4 col-lg-1 my-2"></div>
          <div className="col-4 col-lg-1 my-2"></div>
          <div className="col-4 col-lg-1 my-2"></div>
          <div className="col-4 col-lg-1 my-2"></div>
          <div className="col-4 col-lg-1 my-2"></div>
          <div className="col-4 col-lg-1 my-2"></div>
          <div className="col-4 col-lg-1 my-2"></div>
          <div className="col-4 col-lg-1 my-2"></div>
          <div className="col-4 col-lg-1 my-2"></div>
          <div className="col-4 col-lg-1 my-2"></div>
          <div className="col-4 col-lg-1 my-2"></div>
          <div className="col-4 col-lg-1 my-2"></div>
        </div>
      </div>
    </div>
  );
}
