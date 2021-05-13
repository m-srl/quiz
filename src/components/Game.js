import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { increment } from "../actions/counter.js";
import { questions } from "../questions.js";

const Game = ({
  counter,
  dispatch,
  usedFiftyFifty,
  setUsedFiftyFifty,
  setMillionaire,
  answersCorrect,
  setAnswersCorrect,
  setPlayerQuit,
  setReachedFirstStep,
  setReachedSecondStep,
  reachedSecondStep,
  reachedFirstStep,
  setPlayerLost,
  currentMoney,
  setCurrentMoney,
  moneyArray,
  gameFinished,
  setGameFinished,
}) => {
  const [displayComponent, setDisplayComponent] = useState(true);

  const userGuess = (e) => {
    const allAnswers = document.querySelectorAll(".answer");
    const correctAnswer =
      questions[counter].answers[questions[counter].correct];
    const correctAnswerNumber = questions[counter].correct;

    const guess = e.currentTarget;
    const correctAnswersHandler = () => {
      setAnswersCorrect((prev) => prev + 1);
    };

    if (e.currentTarget.innerText === correctAnswer) {
      correctAnswersHandler();
      setCurrentMoney(moneyArray[answersCorrect - 1]);
      console.log(answersCorrect);

      if (answersCorrect === 15) {
        setMillionaire(true);
        setGameFinished(true);
      } else if (answersCorrect >= 10) {
        setReachedSecondStep(true);
      } else if (answersCorrect >= 5) {
        setReachedFirstStep(true);
      }

      guess.classList.toggle("winner");
      const correctAnswerAnimation = setInterval(() => {
        guess.classList.toggle("winner");
      }, 400);
      for (let i = 0; i < allAnswers.length; i++) {
        allAnswers[i].classList.add("disable-answers");
        if (allAnswers[i].innerText !== correctAnswer) {
          allAnswers[i].classList.add("loser");
        }
      }
      setTimeout(() => {
        clearInterval(correctAnswerAnimation);
        for (let i = 0; i < allAnswers.length; i++) {
          allAnswers[i].classList.remove("winner", "loser", "disable-answers");
        }
        if (counter < questions.length - 1) {
          dispatch(increment);
        }
        if (counter === questions.length - 1) {
          setDisplayComponent(false);
        }
      }, 2000);
      allAnswers.forEach(
        (item) => (item.childNodes[0].style.visibility = "visible")
      );
    } else {
      guess.classList.add("loser");
      for (let i = 0; i < allAnswers.length; i++) {
        allAnswers[i].classList.add("disable-answers");
      }
      const showCorrectAnswerAnimation = setInterval(() => {
        allAnswers[correctAnswerNumber].classList.toggle("winner");
      }, 400);
      setTimeout(() => {
        clearInterval(showCorrectAnswerAnimation);
        for (let i = 0; i < allAnswers.length; i++) {
          allAnswers[i].classList.remove("winner", "loser", "disable-answers");
        }
        setDisplayComponent(false);
        setGameFinished(true);
      }, 2000);
      setPlayerLost(true);

      if (reachedSecondStep) {
        setCurrentMoney(moneyArray[9]);
      } else if (reachedFirstStep) {
        setCurrentMoney(moneyArray[4]);
      } else {
        setCurrentMoney(0);
      }
    }
  };
  // Check if player withdraws
  const playerWithdraw = () => {
    if (currentMoney !== 0) {
      setPlayerQuit(true);
      setTimeout(() => {
        setGameFinished(true);
      }, 300);
    } else {
      alert("You can't withdraw before answering the first question");
    }
  };

  // Remove 2 wrong answers if fifty-fifty is used
  const usedFiftyFiftyHelper = () => {
    if (usedFiftyFifty) {
      const allAnswers = document.querySelectorAll(".answer");
      const correctAnswerNumber = questions[counter].correct;
      // setCorrectAnswer(correctAnswerNumber)
      let randomGenerator = Math.floor(Math.random() * 3);
      const RandomArray = [];
      const wrongAnswers = [];

      for (let i = 0; i < allAnswers.length; i++) {
        wrongAnswers.push(i);
      }
      wrongAnswers.splice(correctAnswerNumber, 1);

      for (let i = 0; i < 1000; i++) {
        if (
          RandomArray.indexOf(randomGenerator) === -1 &&
          RandomArray.length < 2
        ) {
          RandomArray.push(randomGenerator);
          randomGenerator = Math.floor(Math.random() * 3);
        } else if (RandomArray.length >= 2) {
          break;
        } else {
          randomGenerator = Math.floor(Math.random() * 3);
        }
      }

      allAnswers[wrongAnswers[0]].childNodes[0].style.visibility = "hidden";
      allAnswers[wrongAnswers[2]].childNodes[0].style.visibility = "hidden";
    }

    return;
  };
  usedFiftyFiftyHelper();
  useEffect(() => {
    setUsedFiftyFifty(false);
  }, [usedFiftyFiftyHelper]);

  //

  return (
    displayComponent &&
    !gameFinished && (
      <GameContainer>
        <Question>
          <h4>{questions[counter].question}</h4>
        </Question>
        <Answers>
          <p onClick={userGuess} className="arrow-border answer">
            <span>{questions[counter].answers[0]}</span>
          </p>
          <p onClick={userGuess} className="arrow-border answer">
            <span>{questions[counter].answers[1]}</span>
          </p>
          <p onClick={userGuess} className="arrow-border answer">
            <span>{questions[counter].answers[2]}</span>
          </p>
          <p onClick={userGuess} className="arrow-border answer">
            <span>{questions[counter].answers[3]}</span>
          </p>
        </Answers>
        <Withdraw>
          <button onClick={playerWithdraw}>Withdraw</button>
        </Withdraw>
      </GameContainer>
    )
  );
};

const GameContainer = styled.div`
  @media screen and (max-width: 1200px) {
    max-width: 50%;
  }
  @media screen and (max-width: 1000px) {
    /* max-width:80%; */
    .answer {
      min-width: 70%;
    }
  }
  @media screen and (max-width: 760px) {
    /* max-width:80%; */
    max-width: 80%;
    margin: 5%;
  }
`;
const Question = styled.div`
  display: flex;
  width: 70%;
  margin: 2rem 1rem;
  border: 1px solid rgb(77, 175, 255);
  border-radius: 1rem;
  padding: 1rem 2rem;
  justify-content: center;
  user-select: none;
  h4 {
    font-size: 2rem;
    text-align: center;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  @media screen and (max-width: 760px) {
    margin: 1rem 0;
  }
`;

const Answers = styled.div`
  display: flex;
  width: 70%;
  margin: 2rem 1rem 1rem 1rem;
  border: 1px solid rgb(77, 175, 255);
  border-radius: 1rem;
  padding: 2rem 2rem;
  justify-content: center;
  flex-wrap: wrap;

  .arrow-border {
    display: inline-block;
    position: relative;
    margin: 1rem 3rem;
    padding: 1.2rem 1rem;
    font-size: 1.1rem;
    line-height: 18px;
    font-family: arial, helvetica, sans-serif;
    border: 2px solid rgb(77, 175, 255);
    border-right: none;
    border-left: none;
    border-radius: 5px 0 0 5px;
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.4);
    width: 100%;
    flex-basis: 35%;
    flex-wrap: nowrap;
    flex-grow: 0;
    /* flex-grow: 0; */
    text-align: center;
    font-size: 1.3rem;
  }

  .arrow-border::after {
    content: "";
    position: absolute;
    display: inline-block;
    top: 0.45rem;
    right: -1.3rem;
    width: 2.5rem;
    height: 2.55rem;
    border-top: 2px solid rgb(77, 175, 255);
    border-right: 2px solid rgb(77, 175, 255);
    box-shadow: 4px 0 2px -2px rgba(0, 0, 0, 0.4);
    transform: rotate(45deg);
    background: attr(color-value);
  }

  .arrow-border::before {
    content: "";
    position: absolute;
    display: inline-block;
    top: 0.45rem;
    left: -1.12rem;
    width: 2.5rem;
    height: 2.55rem;
    border-top: 2px solid rgb(77, 175, 255);
    border-left: 2px solid rgb(77, 175, 255);
    box-shadow: 4px 0 -2px -2px rgba(0, 0, 0, 0.4);
    transform: rotate(-45deg);
  }
  .disable-answers {
    pointer-events: none;
  }
  .winner {
    &,
    ::before,
    ::after {
      background: green;
    }
  }

  .loser {
    color: black;
    &,
    ::before,
    ::after {
      background: orange;
    }
  }

  .answer {
    cursor: pointer;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  @media screen and (max-width: 760px) {
    margin: 1rem 0;
  }
`;

const Withdraw = styled.div`
  display: flex;
  width: 70%;
  margin: 0rem 1rem;
  padding: 0rem 2rem;
  justify-content: center;
  user-select: none;
  button {
    padding: 1rem 4rem;
    font-size: 1.3rem;
    background: #0f82b8;
    border: 1px solid rgb(77, 175, 255);
    color: white;
    cursor: pointer;
    border-radius: 0.5rem;
    &:hover {
      background: #16a7eb;
      transition: 1s ease;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  @media screen and (max-width: 760px) {
    margin: 1rem 0;
  }
`;

export default Game;
