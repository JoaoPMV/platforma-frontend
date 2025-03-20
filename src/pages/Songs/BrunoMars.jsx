import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { FaCaretSquareLeft } from "react-icons/fa";
import { FaCaretSquareRight } from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Model.css";

const BrunoMars = () => {
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
    { textBefore: "Today I don't feel", missingWord: "like", textAfter: "doing anything"},
    { textBefore: "I just wanna", missingWord: "lay", textAfter: "in my bed"},
    { textBefore: "Don't feel like", missingWord: "picking", textAfter: "up my phone"},
    { textBefore: "So", missingWord: "leave", textAfter: "a message at the tone"},
    { textBefore: "'Cause today I", missingWord: "swear", textAfter: "I'm not doing anything"},
    { textBefore: "I'm gonna kick my feet up then", missingWord: "stare", textAfter: "at the fan"},
    { textBefore: "Turn the TV on, throw my hand in my", missingWord: "pants", textAfter: ""},
    { textBefore: "Nobody's gon' tell me I", missingWord: "can't", textAfter: ""},
    { textBefore: "I'll be lounging on a", missingWord: "couch", textAfter: "just chilling in my snuggie"},
    { textBefore: "Click to MTV so they can", missingWord: "teach", textAfter: "me how to dougie"},
    { textBefore: "'Cause in my", missingWord: "castle", textAfter: "I'm the freaking man"},
    { textBefore: "Oh, yes, I said it", missingWord: "", textAfter: ""},
    { textBefore: "I said it", missingWord: "", textAfter: ""},
    { textBefore: "I said it, 'cause I", missingWord: "can", textAfter: ""},
    { textBefore: "Today I don't feel", missingWord: "like", textAfter: "doing anything"},
    { textBefore: "I just wanna", missingWord: "lay", textAfter: "in my bed"},
    { textBefore: "Don't feel like", missingWord: "picking", textAfter: "up my phone"},
    { textBefore: "So", missingWord: "leave", textAfter: "a message at the tone"},
    { textBefore: "'Cause today I", missingWord: "swear", textAfter: "I'm not doing anything"},
    { textBefore: "Nothing at all", missingWord: "", textAfter: ""},
    { textBefore: "Nothing at all", missingWord: "", textAfter: ""},
    { textBefore: "Tomorrow I'll", missingWord: "wake", textAfter: "up"},
    { textBefore: "Do some P90X", missingWord: "", textAfter: ""},
    { textBefore: "Meet a really nice", missingWord: "", textAfter: ""},
    { textBefore: "", missingWord: "", textAfter: "girl"},
    { textBefore: "", missingWord: "Have", textAfter: " some really nice sex"},
    { textBefore: "And she's gonna", missingWord: "scream", textAfter: "out: This is great"},
    { textBefore: "(Oh my God, this is great)", missingWord: "", textAfter: ""},
    { textBefore: "Yeah", missingWord: "", textAfter: ""},
    { textBefore: "I might mess", missingWord: "around", textAfter: ""},
    { textBefore: "And", missingWord: "get", textAfter: "my college degree"},
    { textBefore: "I bet my old man will be so", missingWord: "proud", textAfter: "of me"},
    { textBefore: "But, sorry, pops, you'll", missingWord: "just", textAfter: "have to wait"},
    { textBefore: "Oh, yes, I said it", missingWord: "", textAfter: ""},
    { textBefore: "I said it", missingWord: "", textAfter: ""},
    { textBefore: "I said it, 'cause I", missingWord: "can", textAfter: ""},
    { textBefore: "Today I don't feel", missingWord: "like", textAfter: "doing anything"},
    { textBefore: "I just wanna", missingWord: "lay", textAfter: "in my bed"},
    { textBefore: "Don't feel like", missingWord: "picking", textAfter: "up my phone"},
    { textBefore: "So", missingWord: "leave", textAfter: "a message at the tone"},
    { textBefore: "'Cause today I", missingWord: "swear", textAfter: "I'm not doing anything"},
    { textBefore: "No, I ain't gonna comb my", missingWord: "hair", textAfter: ""},
    { textBefore: "'Cause I ain't", missingWord: "going", textAfter: "anywhere"},
    { textBefore: "No, no, no, no, no, no, no, no, no", missingWord: "", textAfter: ""},
    { textBefore: "I'll just strut in my", missingWord: "birthday", textAfter: "suit"},
    { textBefore: "And let everything hang", missingWord: "loose", textAfter: ""},
    { textBefore: "Yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah", missingWord: "", textAfter: ""},
    { textBefore: "Oh, today I don't feel", missingWord: "like", textAfter: "doing anything"},
    { textBefore: "I just wanna", missingWord: "lay", textAfter: "in my bed"},
    { textBefore: "Don't feel like", missingWord: "picking", textAfter: "up my phone"},
    { textBefore: "So", missingWord: "leave", textAfter: "a message at the tone"},
    { textBefore: "'Cause today I", missingWord: "swear", textAfter: "I'm not doing anything"},
    { textBefore: "Nothing at all", missingWord: "", textAfter: ""},
    { textBefore: "Nothing at all", missingWord: "", textAfter: ""},
    { textBefore: "Nothing at all", missingWord: "", textAfter: ""},
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
        <p className="band pt-2">Bruno Mars - The Lazy Song</p>

        <audio ref={audioRef} controls className="mt-2 audio-player">
          <source src="/Musics/theLazySong.mp3" type="audio/mpeg" />
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
            <div className="col-4 col-lg-1 my-2">going</div>
            <div className="col-4 col-lg-1 my-2">wake</div>
            <div className="col-4 col-lg-1 my-2">hair</div>
            <div className="col-4 col-lg-1 my-2">loose</div>
            <div className="col-4 col-lg-1 my-2">couch</div>
            <div className="col-4 col-lg-1 my-2">castle</div>
            <div className="col-4 col-lg-1 my-2">can't</div>
            <div className="col-4 col-lg-1 my-2">scream</div>
            <div className="col-4 col-lg-1 my-2">proud</div>
            <div className="col-4 col-lg-1 my-2">have</div>
            <div className="col-4 col-lg-1 my-2">like</div>
            <div className="col-4 col-lg-1 my-2">get</div>
            <div className="col-4 col-lg-1 my-2">can</div>
            <div className="col-4 col-lg-1 my-2">just</div>
            <div className="col-4 col-lg-1 my-2">birthday</div>
            <div className="col-4 col-lg-1 my-2">swear</div>
            <div className="col-4 col-lg-1 my-2">teach</div>
            <div className="col-4 col-lg-1 my-2">lay</div>
            <div className="col-4 col-lg-1 my-2">leave</div>
            <div className="col-4 col-lg-1 my-2">girl</div>
            <div className="col-4 col-lg-1 my-2">pants</div>
            <div className="col-4 col-lg-1 my-2">around</div>
            <div className="col-4 col-lg-1 my-2">picking</div>
            <div className="col-4 col-lg-1 my-2">stare</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrunoMars;
