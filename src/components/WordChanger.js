import React from "react";

import "./WordChanger.css";

class WordChanger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prefix: props.prefix.replace(/ /g, "\xa0"),
      words: props.words.map(({word, color}) => ({
        opacity: 0,
        color,
        letters: this.fixRTL(word).replace(/ /g, "\xa0").split("").map(letter => ({
          content: letter,
          mode: "out"
        }))
      })),
      currentWordIndex: 0
    };

    this.setLetterMode = this.setLetterMode.bind(this);
    this.animateLetterMode = this.animateLetterMode.bind(this);
    this.changeWord = this.changeWord.bind(this);
    this.prepareWord = this.prepareWord.bind(this);
  }

  componentDidMount() {
    this.changeWord();
    this.changeWordInterval = setInterval(this.changeWord, 3000);
  }
  componentWillUnmount() {
    this.changeWordInterval && clearInterval(this.changeWordInterval);
  }

  animateLetterMode(wordIndex, letterIndex, newMode) {
    setTimeout(() => {
      this.setLetterMode(wordIndex, letterIndex, newMode);
    }, letterIndex * 80);
  }

prepareWord(wordIndex) {
  this.setState({
    words: this.state.words.map((word, mapWordIndex) => ({
      ...word,
      opacity: 1,
      letters:
        mapWordIndex === wordIndex
          ? word.letters.map(letter => ({
              ...letter,
              mode: "behind"
            }))
          : word.letters
    }))
  });

}

  setLetterMode(wordIndex, letterIndex, newMode) {
    this.setState({
      words: this.state.words.map((word, mapWordIndex) => ({
        ...word,
        letters:
          mapWordIndex === wordIndex
            ? word.letters.map((letter, mapLetterIndex) => ({
                ...letter,
                mode: mapLetterIndex === letterIndex ? newMode : letter.mode
              }))
            : word.letters
      }))
    });
  }

  changeWord() {
    var currentWordIndex = this.state.currentWordIndex;
    var newWordIndex =
      currentWordIndex === this.state.words.length - 1
        ? 0
        : currentWordIndex + 1;

    this.state.words[currentWordIndex].letters.forEach((_, letterIndex) => {
      this.animateLetterMode(currentWordIndex, letterIndex, "out");
    });

    this.prepareWord(newWordIndex)
    setTimeout(() => {
      this.state.words[newWordIndex].letters.forEach((_, letterIndex) => {
        this.animateLetterMode(newWordIndex, letterIndex, "in");
      });
  
      this.setState({
        words: this.state.words.map((word, wordIndex) => ({
         ...word,
          opacity: wordIndex === newWordIndex ? 1 : word.opacity
        })),
        currentWordIndex: newWordIndex
      });
    }, 300)
  }

  fixRTL(word) {
    return word.replace(/[a-zA-Z-]+/g, (match) => match.split("").reverse().join(""))
  }

  render() {
    return (
      <div className="word-changer--container">
        <div className="word-changer--prefix">{this.state.prefix}</div>
        <div className="word-changer--word-container">
          {this.state.words.map((word, wordIndex) => (
            <div
              className="word-changer--word"
              style={{ opacity: word.opacity, color: word.color }}
              key={`word-${wordIndex}`}
            >
              {word.letters.map(({ content, mode }, letterIndex) => (
                <div
                  className={`word-changer--letter ${mode}`}
                  key={`letter-${wordIndex}-${letterIndex}`}
                >
                  {content}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default WordChanger;
