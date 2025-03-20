import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { FaCaretSquareLeft } from "react-icons/fa";
import { FaCaretSquareRight } from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Model.css";

const JohnLegend = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

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
      { textBefore: "What", missingWord: "would", textAfter: "I do without your smart mouth?" },
      { textBefore: "", missingWord: "Drawing", textAfter: "me in, and you kicking me out" },
      { textBefore: "You've got my head", missingWord: "spinning", textAfter: "no kidding" },
      { textBefore: "I", missingWord: "can't", textAfter: "pin you down" },
      { textBefore: "What's going on in that", missingWord: "beautiful", textAfter: "mind" },
      { textBefore: "I'm on your magical mystery", missingWord: "ride", textAfter: "" },
      { textBefore: "And I'm so", missingWord: "dizzy", textAfter: "" },
      { textBefore: "don't", missingWord: "know", textAfter: "what hit me, " },
      { textBefore: "but I'll", missingWord: "be", textAfter: "alright" },
      { textBefore: "My", missingWord: "head's", textAfter: "under water" },
      { textBefore: "But I'm", missingWord: "breathing", textAfter: "fine" },
      { textBefore: "You're crazy and I'm", missingWord: "out", textAfter: "of my mind" },
      { textBefore: "'Cause", missingWord: "all", textAfter: "of me" },
      { textBefore: "", missingWord: "Loves", textAfter: "all of you" },
      { textBefore: "Love your", missingWord: "curves", textAfter: "and all your edges" },
      { textBefore: "All your perfect", missingWord: "imperfections", textAfter: "" },
      { textBefore: "", missingWord: "Give", textAfter: "your all to me" },
      { textBefore: "", missingWord: "I'll", textAfter: "give my all to you" },
      { textBefore: "You're my", missingWord: "end", textAfter: "and my beginning" },
      { textBefore: "Even", missingWord: "when", textAfter: "I lose, I'm winning" },
      { textBefore: "'Cause I give", missingWord: "you", textAfter: "all of me" },
      { textBefore: "And you give", missingWord: "me", textAfter: "all of you, oh-oh" },
      { textBefore: "How", missingWord: "many", textAfter: "times do I have to tell you?" },
      { textBefore: "Even when", missingWord: "you're", textAfter: "crying, you're beautiful too" },
      { textBefore: "The world is", missingWord: "beating", textAfter: "you down" },
      { textBefore: "I'm around through every ", missingWord: "mood", textAfter: "" },
      { textBefore: "You're my", missingWord: "downfall", textAfter: ", you're my muse" },
      { textBefore: "My worst", missingWord: "distraction", textAfter: ", my rhythm and blues" },
      { textBefore: "I can't stop", missingWord: "singing", textAfter: "" },
      { textBefore: "it's ringing in my", missingWord: "head", textAfter: "for you" },
      { textBefore: "My", missingWord: "head's", textAfter: "under water" },
      { textBefore: "But I'm", missingWord: "breathing", textAfter: "fine" },
      { textBefore: "You're crazy and I'm", missingWord: "out", textAfter: "of my mind" },
      { textBefore: "'Cause", missingWord: "all", textAfter: "of me" },
      { textBefore: "", missingWord: "Loves", textAfter: "all of you" },
      { textBefore: "Love your", missingWord: "curves", textAfter: "and all your edges" },
      { textBefore: "All your perfect", missingWord: "imperfections", textAfter: "" },
      { textBefore: "", missingWord: "Give", textAfter: "your all to me" },
      { textBefore: "", missingWord: "I'll", textAfter: "give my all to you" },
      { textBefore: "You're my", missingWord: "end", textAfter: "and my beginning" },
      { textBefore: "Even", missingWord: "when", textAfter: "I lose, I'm winning" },
      { textBefore: "'Cause I give", missingWord: "you", textAfter: "all of me" },
      { textBefore: "And you give", missingWord: "me", textAfter: "all of you, oh-oh" },
      { textBefore: "Give", missingWord: "me", textAfter: "all of you, oh" },
      { textBefore: "", missingWord: "Cards", textAfter: "on the table" },
      { textBefore: "We're", missingWord: "both", textAfter: "showing hearts" },
      { textBefore: "", missingWord: "Risking", textAfter: "it all, though it's hard" },
      { textBefore: "'Cause", missingWord: "all", textAfter: "of me" },
      { textBefore: "", missingWord: "Loves", textAfter: "all of you" },
      { textBefore: "Love your", missingWord: "curves", textAfter: "and all your edges" },
      { textBefore: "All your perfect", missingWord: "imperfections", textAfter: "" },
      { textBefore: "", missingWord: "Give", textAfter: "your all to me" },
      { textBefore: "", missingWord: "I'll", textAfter: "give my all to you" },
      { textBefore: "You're my", missingWord: "end", textAfter: "and my beginning" },
      { textBefore: "Even", missingWord: "when", textAfter: "I lose, I'm winning" },
      { textBefore: "'Cause I give", missingWord: "you", textAfter: "all of me" },
      { textBefore: "And you give", missingWord: "me", textAfter: "all of you" },
      { textBefore: "I give", missingWord: "you", textAfter: "all of me" },
      { textBefore: "And you give", missingWord: "me", textAfter: "all of you, oh-oh" },
     
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
        <p className="band pt-2">John Legend - All of me</p>

        <audio ref={audioRef} controls className="mt-2 audio-player">
          <source src="/Musics/allOfMe.mp3" type="audio/mpeg" />
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
                      width: "35vw",

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
            <div className="col-4 col-lg-1 my-2">beautiful</div>
            <div className="col-4 col-lg-1 my-2">me</div>
            <div className="col-4 col-lg-1 my-2">downfall</div>
            <div className="col-4 col-lg-1 my-2">beating</div>
            <div className="col-4 col-lg-1 my-2">breathing</div>
            <div className="col-4 col-lg-1 my-2">I'll</div>
            <div className="col-4 col-lg-1 my-2">when</div>
            <div className="col-4 col-lg-1 my-2">spinning</div>
            <div className="col-4 col-lg-1 my-2">give</div>
            <div className="col-4 col-lg-1 my-2">dizzy</div>
            <div className="col-4 col-lg-1 my-2">out</div>
            <div className="col-4 col-lg-1 my-2">many</div>
            <div className="col-4 col-lg-1 my-2">curves</div>
            <div className="col-4 col-lg-1 my-2">head</div>
            <div className="col-4 col-lg-1 my-2">can't</div>
            <div className="col-4 col-lg-1 my-2">imperfections</div>
            <div className="col-4 col-lg-1 my-2">drawing</div>
            <div className="col-4 col-lg-1 my-2">be</div>
            <div className="col-4 col-lg-1 my-2">cards</div>
            <div className="col-4 col-lg-1 my-2">you</div>
            <div className="col-4 col-lg-1 my-2">mood</div>
            <div className="col-4 col-lg-1 my-2">distraction</div>
            <div className="col-4 col-lg-1 my-2">know</div>
            <div className="col-4 col-lg-1 my-2">both</div>
            <div className="col-4 col-lg-1 my-2">singing</div>
            <div className="col-4 col-lg-1 my-2">end</div>
            <div className="col-4 col-lg-1 my-2">loves</div>
            <div className="col-4 col-lg-1 my-2">risking</div>
            <div className="col-4 col-lg-1 my-2">you're</div>
            <div className="col-4 col-lg-1 my-2">head's</div>
            <div className="col-4 col-lg-1 my-2">ride</div>
            <div className="col-4 col-lg-1 my-2">all</div>
            <div className="col-4 col-lg-1 my-2">would</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JohnLegend;
