import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { FaCaretSquareLeft } from "react-icons/fa";
import { FaCaretSquareRight } from "react-icons/fa";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Model.css";

const JohnLennon = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  });

  const audioRef = useRef(null);
  const [activeSection, setActiveSection] = useState(null);

  const handleBackTenSeconds = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10;
    }
  };

  const handleForwardTenSeconds = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
    }
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  // prettier-ignore
  const lyrics = [
    { textBefore: "Imagine", missingWord: "there's", textAfter: "no heaven"},
    { textBefore: "It's easy if you", missingWord: "try", textAfter: ""},
    { textBefore: "No hell", missingWord: "below", textAfter: "us"},
    { textBefore: "", missingWord: "Above", textAfter: "us, only sky"},
    { textBefore: "Imagine", missingWord: "all", textAfter: "the people"},
    { textBefore: "", missingWord: "Living", textAfter: "for today"},
    { textBefore: "Ah", missingWord: "", textAfter: ""},
    { textBefore: "Imagine there's no", missingWord: "countries", textAfter: ""},
    { textBefore: "It", missingWord: "isn't", textAfter: "hard to do"},
    { textBefore: "", missingWord: "Nothing", textAfter: "to kill or die for"},
    { textBefore: "And no", missingWord: "religion", textAfter: ", too"},
    { textBefore: "Imagine", missingWord: "all", textAfter: "the people"},
    { textBefore: "Living life in", missingWord: "peace", textAfter: ""},
    { textBefore: "You", missingWord: "", textAfter: ""},
    { textBefore: "You may say I'm a", missingWord: "dreamer", textAfter: ""},
    { textBefore: "", missingWord: "But", textAfter: "I'm not the only one"},
    { textBefore: "I", missingWord: "hope", textAfter: "someday you'll join us"},
    { textBefore: "And the", missingWord: "world", textAfter: "will be as one"},
    { textBefore: "Imagine no", missingWord: "possessions", textAfter: ""},
    { textBefore: "I", missingWord: "wonder", textAfter: " if you can"},
    { textBefore: "No need for greed or", missingWord: "hunger", textAfter: ""},
    { textBefore: "A", missingWord: "brotherhood", textAfter: "of man"},
    { textBefore: "Imagine", missingWord: "all", textAfter: "the people"},
    { textBefore: "", missingWord: "Sharing", textAfter: "all the world"},
    { textBefore: "You", missingWord: "", textAfter: ""},
    { textBefore: "You may say I'm a", missingWord: "dreamer", textAfter: ""},
    { textBefore: "", missingWord: "But", textAfter: "I'm not the only one"},
    { textBefore: "I", missingWord: "hope", textAfter: "someday you'll join us"},
    { textBefore: "And the", missingWord: "world", textAfter: "will live as one"},
    { textBefore: "", missingWord: "", textAfter: ""},
    


    ];

  const [answers, setAnswers] = useState(Array(lyrics.length).fill(""));

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <div>
      <div class="container-fluid container-band">
        <p className="band pt-2">John Lennon - Imagine</p>

        <audio ref={audioRef} controls className="mt-2 audio-player">
          <source src="/Musics/imagine.mp3" type="audio/mpeg" />
          Seu navegador não suporta áudio HTML5.
        </audio>

        <div class="col d-flex justify-content-center whiteBack pt-3">
          <FaCaretSquareLeft
            onClick={() => handleBackTenSeconds()}
            style={{ cursor: "pointer", fontSize: "24px" }}
          />

          <p className="px-1 m-0">10 Seconds</p>
          <FaCaretSquareRight
            onClick={() => handleForwardTenSeconds()}
            style={{ cursor: "pointer", fontSize: "24px" }}
          />
        </div>
        <div className="col buttons-music">
          <button
            className="button-lyrics"
            onClick={() => toggleSection("lyrics")}
          >
            Lyrics
          </button>

          <button
            className="button-vocabulary"
            onClick={() => toggleSection("vocabulary")}
          >
            Vocabulary
          </button>
        </div>
      </div>
      <div className="som">
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
                      border: "none",

                      backgroundColor:
                        answers[index].toLowerCase() ===
                        line.missingWord.toLowerCase()
                          ? "green"
                          : "rgb(241, 70, 70)",
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
            <div className="col-4 col-lg-1 my-2">hope</div>
            <div className="col-4 col-lg-1 my-2">sharing</div>
            <div className="col-4 col-lg-1 my-2">living</div>
            <div className="col-4 col-lg-1 my-2">religion</div>
            <div className="col-4 col-lg-1 my-2">above</div>
            <div className="col-4 col-lg-1 my-2">wonder</div>
            <div className="col-4 col-lg-1 my-2">nothing</div>
            <div className="col-4 col-lg-1 my-2">all</div>
            <div className="col-4 col-lg-1 my-2">isn't</div>
            <div className="col-4 col-lg-1 my-2">below</div>
            <div className="col-4 col-lg-1 my-2">dreamer</div>
            <div className="col-4 col-lg-1 my-2">there's</div>
            <div className="col-4 col-lg-1 my-2">countries</div>
            <div className="col-4 col-lg-1 my-2">possessions</div>
            <div className="col-4 col-lg-1 my-2">peace</div>
            <div className="col-4 col-lg-1 my-2">brotherhood</div>
            <div className="col-4 col-lg-1 my-2">try</div>
            <div className="col-4 col-lg-1 my-2">but</div>
            <div className="col-4 col-lg-1 my-2">world</div>
            <div className="col-4 col-lg-1 my-2">hunger</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JohnLennon;
