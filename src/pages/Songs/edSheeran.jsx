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
    { textBefore: "I", missingWord: "found", textAfter: "a love for me" },
    { textBefore: "Darling, just dive right in and", missingWord: "follow", textAfter: "my lead",},
    { textBefore: "I", missingWord: "found", textAfter: "a girl, beautiful and sweet",},
    { textBefore: "I never knew you were the someone", missingWord: "waiting", textAfter: "for me",},
    { textBefore: "Cause we were just kids when we", missingWord: "fell", textAfter: " in love",},
    { textBefore: "Not knowing", missingWord: "what", textAfter: " it was",},
    { textBefore: "I will not", missingWord: "give", textAfter: "you up this time",},
    { textBefore: "Darling, just kiss me", missingWord: "slow", textAfter: "",},
    { textBefore: "Your", missingWord: "heart", textAfter: "is all I own",},
    { textBefore: "And you eyes, you're", missingWord: "holding", textAfter: "mine",},
    { textBefore: "baby, I'm", missingWord: "dancing", textAfter: "in the dark",},
    { textBefore: "With you", missingWord: "between", textAfter: "my arms",},
    { textBefore: "Barefoot on the", missingWord: "grass", textAfter: "",},
    { textBefore: "", missingWord: "Listening", textAfter: "to our favorite song",},
    { textBefore: "When you said you", missingWord: "looked", textAfter: "a mess",},
    { textBefore: "I", missingWord: "whispered", textAfter: "underneath my breath",},
    { textBefore: "But you heard it", missingWord: "", textAfter: "",},
    { textBefore: "Darling, you", missingWord: "look", textAfter: "perfect tonight",},
    { textBefore: "I found a woman", missingWord: "stronger", textAfter: "than anyone I know",},
    { textBefore: "She shares my dreams, I", missingWord: "hope", textAfter: "that someday I'll share her home",},
    { textBefore: "I found a lover to carry more", missingWord: "than", textAfter: "just my secrets",},
    { textBefore: "To carry love, to carry children of our", missingWord: "own", textAfter: "",},
    { textBefore: "We are", missingWord: "still", textAfter: "kids, but we're so in love",},
    { textBefore: "Fighting", missingWord: "against", textAfter: "all odds",},
    { textBefore: "I know we'll be", missingWord: "alright", textAfter: "this time",},
    { textBefore: "Darling, just", missingWord: "hold", textAfter: "my hand",},
    { textBefore: "Be my girl, I'll be your", missingWord: "man", textAfter: "",},
    { textBefore: "I see my", missingWord: "future", textAfter: "in your eyes",},
    { textBefore: "Baby, I'm", missingWord: "dancing", textAfter: "in the dark",},
    { textBefore: "With you", missingWord: "between", textAfter: "my arms",},
    { textBefore: "Barefoot on the", missingWord: "grass", textAfter: "",},
    { textBefore: "", missingWord: "Listening", textAfter: "to our favorite song",},
    { textBefore: "When I saw you in that", missingWord: "dress", textAfter: "",},
    { textBefore: "Looking so", missingWord: "beautiful", textAfter: "",},
    { textBefore: "I don't", missingWord: "deserve", textAfter: "this",},
    { textBefore: "Darling, you", missingWord: "look", textAfter: "perfect tonight",},
    { textBefore: "Baby, I'm", missingWord: "dancing", textAfter: "in the dark",},
    { textBefore: "With you", missingWord: "between", textAfter: "my arms",},
    { textBefore: "Barefoot on the", missingWord: "grass", textAfter: "",},
    { textBefore: "", missingWord: "Listening", textAfter: "to our favorite song",},
    { textBefore: "I have", missingWord: "faith", textAfter: "in what I see",},
    { textBefore: "Now I know I have", missingWord: "met", textAfter: "an angel in person",},
    { textBefore: "And she", missingWord: "looks", textAfter: "perfect",},
    { textBefore: "I don't", missingWord: "deserve", textAfter: "this",},
    { textBefore: "You look", missingWord: "perfect", textAfter: "tonight",},



  ];

  const [answers, setAnswers] = useState(Array(lyrics.length).fill(""));

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <div className="container">
      <p className="singer">Ed Sheeran</p>
      <p className="song">Perfect</p>

      <div className="row">
        <div className="">
          <img
            src="/images/edSheeran.png"
            className="images rounded-5"
            alt=""
          />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <audio controls className="mt-3">
            <source src="/musics/perfect.mp3" type="audio/mpeg" />
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
          <div className="col-4 col-lg-1 my-2">follow</div>
          <div className="col-4 col-lg-1 my-2">found</div>
          <div className="col-4 col-lg-1 my-2">waiting</div>
          <div className="col-4 col-lg-1 my-2">fell</div>
          <div className="col-4 col-lg-1 my-2">what</div>
          <div className="col-4 col-lg-1 my-2">give</div>
          <div className="col-4 col-lg-1 my-2">slow</div>
          <div className="col-4 col-lg-1 my-2">heart</div>
          <div className="col-4 col-lg-1 my-2">dancing</div>
          <div className="col-4 col-lg-1 my-2">between</div>
          <div className="col-4 col-lg-1 my-2">grass</div>
          <div className="col-4 col-lg-1 my-2">Listening</div>
          <div className="col-4 col-lg-1 my-2">looked</div>
          <div className="col-4 col-lg-1 my-2">whispered</div>
          <div className="col-4 col-lg-1 my-2">look</div>
          <div className="col-4 col-lg-1 my-2">stronger</div>
          <div className="col-4 col-lg-1 my-2">hope</div>
          <div className="col-4 col-lg-1 my-2">than</div>
          <div className="col-4 col-lg-1 my-2">own</div>
          <div className="col-4 col-lg-1 my-2">still</div>
          <div className="col-4 col-lg-1 my-2">against</div>
          <div className="col-4 col-lg-1 my-2">alright</div>
          <div className="col-4 col-lg-1 my-2">hold</div>
          <div className="col-4 col-lg-1 my-2">man</div>
          <div className="col-4 col-lg-1 my-2">future</div>
          <div className="col-4 col-lg-1 my-2">dress</div>
          <div className="col-4 col-lg-1 my-2">beautiful</div>
          <div className="col-4 col-lg-1 my-2">deserve</div>
          <div className="col-4 col-lg-1 my-2">faith</div>
          <div className="col-4 col-lg-1 my-2">met</div>
          <div className="col-4 col-lg-1 my-2">looks</div>
          <div className="col-4 col-lg-1 my-2">perfect</div>
          <div className="col-4 col-lg-1 my-2">holding</div>
        </div>
      </div>
    </div>
  );
}
