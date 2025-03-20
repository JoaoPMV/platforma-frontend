import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { FaCaretSquareLeft } from "react-icons/fa";
import { FaCaretSquareRight } from "react-icons/fa";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Model.css";

const SevenNation = () => {

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
    { textBefore: "I'm", missingWord: "going", textAfter: "to fight them off"},
    { textBefore: "A seven nation army", missingWord: "couldn't", textAfter: "hold me back",},
    { textBefore: "They're", missingWord: "gonna", textAfter: "rip it off",},
    { textBefore: "Taking their time right", missingWord: "behind", textAfter: "my back",},
    { textBefore: "And I'm", missingWord: "talking", textAfter: "to myself at night",},
    { textBefore: "Because I ", missingWord: "can't", textAfter: "forget",},
    { textBefore: "Back and forth", missingWord: "through", textAfter: "my mind",},
    { textBefore: "Behind a", missingWord: "cigarrete", textAfter: "",},
    { textBefore: "And the message", missingWord: "coming", textAfter: "from my eyes",},
    { textBefore: "Says: Leave it", missingWord: "alone", textAfter: "",},
    { textBefore: "", missingWord: "Don't", textAfter: "want to hear about it",},
    { textBefore: "Every single one's got a", missingWord: "story", textAfter: "to tell",},
    { textBefore: "", missingWord: "Everyone", textAfter: "knows about it",},
    { textBefore: "From the Queen of", missingWord: "England", textAfter: "to the hounds of hell",},
    { textBefore: "And if I catch it coming", missingWord: "back", textAfter: "my way",},
    { textBefore: "I'm gonna", missingWord: "serve", textAfter: "it to you",},
    { textBefore: "And that ain't what you", missingWord: "want", textAfter: "to hear",},
    { textBefore: "But that's", missingWord: "what", textAfter: "I'll do",},
    { textBefore: "And the feeling coming", missingWord: "from", textAfter: "my bones",},
    { textBefore: "Says: Find a", missingWord: "home", textAfter: "",},
    { textBefore: "", missingWord: "I'm", textAfter: "going to Wichita",},
    {textBefore: "", missingWord: "Far", textAfter: "from this opera forevermore",},
    { textBefore: "I'm gonna", missingWord: "work", textAfter: "the straw",},
    { textBefore: "Make the sweat drip out of", missingWord: "every", textAfter: "pore",},
    { textBefore: "And I'm bleeding, and I'm bleeding", missingWord: "", textAfter: "",},
    { textBefore: "And I'm bleeding right", missingWord: "before", textAfter: "my Lord",},
    { textBefore: "All the words are gonna", missingWord: "bleed", textAfter: "from me",},
    { textBefore: "And I will", missingWord: "think", textAfter: "no more",},
    { textBefore: "And the stains", missingWord: "coming", textAfter: "from my blood",},
    { textBefore: "Tell me:", missingWord: "Go", textAfter: "back home",},


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
        <p className="band pt-2">Seven Nation Army - The White Stripes</p>

        <audio ref={audioRef} controls className="mt-2 audio-player">
          <source src="/Musics/theWhiteStripes.mp3" type="audio/mpeg" />
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
            <div className="col-4 col-lg-1 my-2">cigarrete</div>
            <div className="col-4 col-lg-1 my-2">think</div>
            <div className="col-4 col-lg-1 my-2">through</div>
            <div className="col-4 col-lg-1 my-2">back</div>
            <div className="col-4 col-lg-1 my-2">couldn't</div>
            <div className="col-4 col-lg-1 my-2">every</div>
            <div className="col-4 col-lg-1 my-2">behind</div>
            <div className="col-4 col-lg-1 my-2">can't</div>
            <div className="col-4 col-lg-1 my-2">what</div>
            <div className="col-4 col-lg-1 my-2">serve</div>
            <div className="col-4 col-lg-1 my-2">coming</div>
            <div className="col-4 col-lg-1 my-2">Don't</div>
            <div className="col-4 col-lg-1 my-2">go</div>
            <div className="col-4 col-lg-1 my-2">going</div>
            <div className="col-4 col-lg-1 my-2">story</div>
            <div className="col-4 col-lg-1 my-2">before</div>
            <div className="col-4 col-lg-1 my-2">Everyone</div>
            <div className="col-4 col-lg-1 my-2">England</div>
            <div className="col-4 col-lg-1 my-2">want</div>
            <div className="col-4 col-lg-1 my-2">gonna</div>
            <div className="col-4 col-lg-1 my-2">talking</div>
            <div className="col-4 col-lg-1 my-2">from</div>
            <div className="col-4 col-lg-1 my-2">home</div>
            <div className="col-4 col-lg-1 my-2">I'm</div>
            <div className="col-4 col-lg-1 my-2">Far</div>
            <div className="col-4 col-lg-1 my-2">work</div>
            <div className="col-4 col-lg-1 my-2">bleed</div>
            <div className="col-4 col-lg-1 my-2">alone</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SevenNation;
