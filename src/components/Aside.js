import React, { useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import google from "../assets/google.svg";
import MoneyItem from "./MoneyItem";
import timesup from "../assets/timeup.mp3";
import { money } from "../util";

const Aside = ({
  counter,
  setUsedFiftyFifty,
  gameFinished,
  answersCorrect,
}) => {
  // add css to show how much is the current question worth
  useLayoutEffect(() => {
    const test = document.querySelectorAll(".money-item");

    for (let i = 0; i < test.length; i++) {
      if (i === counter) {
        test[test.length - 1 - i].classList.add("current");
        if (test.length - i < 15) {
          test[test.length - i].classList.add("past");
        }
      } else {
        test[test.length - 1 - i].classList.remove("current");
      }
    }
  }, [counter]);

  const timesUpSound = new Audio(timesup);
  useEffect(() => {}, [gameFinished]);

  // Countdown Timer function
  const searchGoogle = () => {
    const selectGoogleTag = document.getElementById("google");
    selectGoogleTag.classList.add("disabled-helper");
    const timerElement = document.createElement("h1");
    let countTime = 30;
    timerElement.innerText = "GO";

    const timerInterval = setInterval(() => {
      timerElement.innerText = `${countTime}`;
      countTime--;

      if (countTime < 0) {
        clearInterval(timerInterval);
        selectGoogleTag.classList.add("grey");

        timesUpSound.play();
      }
    }, 1000);

    selectGoogleTag.removeChild(selectGoogleTag.childNodes[0]);
    selectGoogleTag.appendChild(timerElement);
  };
  // check if used fifty-fifty
  const fiftyFifty = () => {
    const selectFiftyTag = document.getElementById("fifty");
    selectFiftyTag.classList.add("disabled-helper", "grey");
    setUsedFiftyFifty(true);
  };

  return (
    <AsideStyle>
      <div className="money">
        {money.map((item, index) => {
          return (
            <MoneyItem
              item={item}
              counter={counter}
              key={index}
              id={money.length - index}
              className={`money-row${
                money.length - index
              } current-row${counter}`}
            />
          );
        })}
      </div>
      {!gameFinished ? (
        <div className="helper-container">
          <div
            role="img"
            alt="heart"
            onClick={searchGoogle}
            className="helper google"
            id="google"
          >
            <img className="google-image" src={google} alt="search on google" />
          </div>
          <div onClick={fiftyFifty} className="helper" id="fifty">
            <span className="fifty-top">50</span>
            <hr className="fifty-line" />
            <span className="fifty-bottom">50</span>
          </div>
        </div>
      ) : null}
    </AsideStyle>
  );
};

const AsideStyle = styled.div`
  width: 20%;
  position: absolute;
  top: 0%;
  right: 2vw;

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    p {
      margin:0.2;
    }
    margin-bottom: 2rem;
  }
  .current {
    background: orange;
    width: 90%;
    color: black;
  }
  .current::after,
  .current::before {
    background: black;
  }
  .past {
    background: transparent;
    color: #00ff00;
  }
  .end-timer {
    display: none;
  }
  .money,
  .helper {
    border: 1px solid rgb(77, 175, 255);
    border-radius: 1rem;
  }
  .money {
    font-size: 1.1rem;
    font-weight: 500;
    .step {
      display: static;
    }
    .step-text {
      display: inline-block;
      position: relative;
    }
    .step-line {
      display: inline-block;
      width: 6rem;
      margin: 0 1rem 0.3rem 1rem;
      position: relative;
      vertical-align: middle;
    }
  }

  .helper-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .helper {
    &:hover {
      background-color: rgba(22, 134, 253, 0.6);
      transition: 1s ease;
    }
    cursor: pointer;
    position: relative;
    width: 8rem;
    height: 8rem;
    .fifty-top,
    .fifty-bottom,
    .fifty-line {
      position: absolute;
      font-size: 1.5rem;
      pointer-events: none;
    }
    .fifty-line {
      transform: rotate(-45deg);
      left: 50%;
      top: 40%;
      transform: translate(-50%, -50%) rotate(-45deg);
      width: 7rem;
    }
    .fifty-top {
      top: 2rem;
      left: 2rem;
    }
    .fifty-bottom {
      bottom: 2rem;
      right: 2rem;
    }
  }
  .google {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .google img {
    width: 60%;
  }
  .disabled-helper {
    pointer-events: none;
  }
  .grey {
    color: grey;
  }
  @media screen and (max-width: 1400px) {
    width: 35%;
    p {
      margin: 0.2rem;
    }
    .helper-container {
      justify-content: space-around;
    }
    .helper {
      width: 6rem;
      height: 6rem;
      user-select: none;
      .fifty-line {
        top: 35%;
      }
      .fifty-top {
        top: 0.5rem;
        left: 1rem;
      }
      .fifty-bottom {
        bottom: 0.5rem;
        right: 1rem;
      }
    }
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    position: absolute;
    p {
      margin: 0.2rem;
    }
  }
  @media screen and (max-width: 760px) {
    position: static;
    width: 50%;
    margin: 0 auto;
  }
`;

export default Aside;
