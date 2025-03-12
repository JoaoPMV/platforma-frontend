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
    { textBefore: "This Romeo is bleeding", missingWord: "", textAfter: "" },
    { textBefore: "But you can't see his", missingWord: "blood", textAfter: "",},
    { textBefore: "It's nothing but some", missingWord: "feelings", textAfter: "",},
    { textBefore: "That this old dog kicked up", missingWord: "", textAfter: "",},
    { textBefore: "It's been", missingWord: "raining", textAfter: "since you left me",},
    { textBefore: "Now I'm drowning in the", missingWord: "flood", textAfter: "",},
    { textBefore: "You see I've always been a", missingWord: "fighter", textAfter: "",},
    { textBefore: "But", missingWord: "without", textAfter: "I give up",},
    { textBefore: "I", missingWord: "can't", textAfter: "sing a love song",},
    { textBefore: "Like the way its meant to be", missingWord: "", textAfter: "",},
    { textBefore: "Well, I guess I'm not that good", missingWord: "anymore", textAfter: "",},
    { textBefore: "But baby", missingWord: "that's", textAfter: "just me",},
    { textBefore: "Yeah, I", missingWord: "will", textAfter: "love you, baby",},
    { textBefore: "Always", missingWord: "", textAfter: "",},
    { textBefore: "I'll be", missingWord: "there", textAfter: "forever and a day",},
    { textBefore: "Always", missingWord: "", textAfter: "",},
    { textBefore: "I'll be", missingWord: "there", textAfter: "till the stars don't shine",},
    { textBefore: "Till the", missingWord: "heavens", textAfter: "burst and the words don't rhyme",},
    { textBefore: "I know when I die you'll be on my", missingWord: "mind", textAfter: "",},
    { textBefore: "And I'll love you, always", missingWord: "", textAfter: "",},
    { textBefore: "Now your", missingWord: "pictures", textAfter: "that you left behind",},
    {textBefore: "Are just", missingWord: "memories", textAfter: "of a different life",},
    { textBefore: "Some that made us", missingWord: "laugh", textAfter: "",},
    { textBefore: "Some that made us", missingWord: "cry", textAfter: "",},
    { textBefore: "One that made you have to say goodbye", missingWord: "", textAfter: "",},
    { textBefore: "What I'd give to run my", missingWord: "finger", textAfter: "through you hair",},
    { textBefore: "To", missingWord: "touch", textAfter: "lips, to hold you near",},
    { textBefore: "When you say your", missingWord: "prayers", textAfter: "try to understand",},
    { textBefore: "I've made", missingWord: "mistakes", textAfter: ", I'm just a man",},
    { textBefore: "When he holds you close", missingWord: "", textAfter: "",},
    { textBefore: "When he pulls you near", missingWord: "", textAfter: "",},
    { textBefore: "When he says the words", missingWord: "", textAfter: "",},
    { textBefore: "You've", missingWord: "been", textAfter: "needing to hear",},
    { textBefore: "I wish I was him, 'cause", missingWord: "those", textAfter: "words are mine",},
    { textBefore: "To say to you till the", missingWord: "end", textAfter: "of time that",},
    { textBefore: "I", missingWord: "will", textAfter: "love you, baby",},
    { textBefore: "Always", missingWord: "", textAfter: "",},
    { textBefore: "And I'll be", missingWord: "there", textAfter: "forever and a day",},
    { textBefore: "Always", missingWord: "", textAfter: "",},
    { textBefore: "If you told me to", missingWord: "cry", textAfter: ", I could",},
    { textBefore: "If you told me to die for you, I", missingWord: "would", textAfter: "",},
    { textBefore: "Take a look at my", missingWord: "face", textAfter: "",},
    { textBefore: "There's no", missingWord: "price", textAfter: "I won't pay",},
    { textBefore: "To say", missingWord: "these", textAfter: "words to you",},
    { textBefore: "Well, there ain't no luck in this loaded dice", missingWord: "", textAfter: "",},
    { textBefore: "But baby, if you", missingWord: "give", textAfter: "me just one more try",},
    { textBefore: "We can pack up our old dreams and our", missingWord: "lives", textAfter: "",},
    { textBefore: "We'll", missingWord: "find", textAfter: "a place where the sun still shines and",},
    { textBefore: "I", missingWord: "will", textAfter: "love you, baby",},
    { textBefore: "Always", missingWord: "", textAfter: "",},
    { textBefore: "And I'll be", missingWord: "there", textAfter: "forever and a day",},
    { textBefore: "Always", missingWord: "", textAfter: "",},
    { textBefore: "I'll be", missingWord: "there", textAfter: "till the start don't shine",},
    { textBefore: "Till the", missingWord: "heavens", textAfter: "burst and the words don't rhyme",},
    { textBefore: "I know when I die, you'll be on my", missingWord: "mind", textAfter: "",},
    { textBefore: "And I'll love you", missingWord: "", textAfter: "",},
    { textBefore: "Always", missingWord: "", textAfter: "",},
  ];

  const [answers, setAnswers] = useState(Array(lyrics.length).fill(""));

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <div className="container">
      <p className="singer">Bon Jovi</p>
      <p className="song">Always</p>

      <div className="row">
        <div className="">
          <img src="/images/bonJovi.png" className="images rounded-5" alt="" />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <audio controls className="mt-3">
            <source src="/musics/always.mp3" type="audio/mpeg" />
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
          <div className="col-4 col-lg-1 my-2">blood</div>
          <div className="col-4 col-lg-1 my-2">feelings</div>
          <div className="col-4 col-lg-1 my-2">raining</div>
          <div className="col-4 col-lg-1 my-2">flood</div>
          <div className="col-4 col-lg-1 my-2">fighter</div>
          <div className="col-4 col-lg-1 my-2">without</div>
          <div className="col-4 col-lg-1 my-2">can't</div>
          <div className="col-4 col-lg-1 my-2">anymore</div>
          <div className="col-4 col-lg-1 my-2">that's</div>
          <div className="col-4 col-lg-1 my-2">will</div>
          <div className="col-4 col-lg-1 my-2">there</div>
          <div className="col-4 col-lg-1 my-2">heavens</div>
          <div className="col-4 col-lg-1 my-2">mind</div>
          <div className="col-4 col-lg-1 my-2">pictures</div>
          <div className="col-4 col-lg-1 my-2">memories</div>
          <div className="col-4 col-lg-1 my-2">laugh</div>
          <div className="col-4 col-lg-1 my-2">cry</div>
          <div className="col-4 col-lg-1 my-2">fingers</div>
          <div className="col-4 col-lg-1 my-2">touch</div>
          <div className="col-4 col-lg-1 my-2">prayers</div>
          <div className="col-4 col-lg-1 my-2">mistakes</div>
          <div className="col-4 col-lg-1 my-2">been</div>
          <div className="col-4 col-lg-1 my-2">those</div>
          <div className="col-4 col-lg-1 my-2">end</div>
          <div className="col-4 col-lg-1 my-2">would</div>
          <div className="col-4 col-lg-1 my-2">face</div>
          <div className="col-4 col-lg-1 my-2">price</div>
          <div className="col-4 col-lg-1 my-2">these</div>
          <div className="col-4 col-lg-1 my-2">give</div>
          <div className="col-4 col-lg-1 my-2">find</div>
        </div>
      </div>
    </div>
  );
}
