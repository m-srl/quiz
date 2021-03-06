import React from "react";
import styled from "styled-components";
// Display after the game ends
const Finished = ({
  millionaire,
  reachedFirstStep,
  reachedSecondStep,
  playerQuit,
  playerLost,
  currentMoney,
  gameIsFinished,
}) => {
  if (gameIsFinished) {
    if (millionaire) {
      return (
        <GameFinished>
          <h1>Congratulations, you managed to win milion:</h1>
          <h2>{currentMoney}</h2>
          <StartOver>
            <button
              onClick={() => {
                window.location.reload();
              }}
            >
              Start again
            </button>
          </StartOver>
        </GameFinished>
      );
    } else if (playerQuit) {
      return (
        <GameFinished>
          <h1>Congratulations, you withdrew with this amount of money:</h1>
          <h2>{currentMoney}</h2>
          <StartOver>
            <button
              onClick={() => {
                window.location.reload();
              }}
            >
              Start again
            </button>
          </StartOver>
        </GameFinished>
      );
    } else if (playerLost) {
      if (reachedSecondStep) {
        return (
          <GameFinished>
            <h1>
              Congratulations, you managed to reach the second step and won:
            </h1>
            <h2>{currentMoney}</h2>
            <StartOver>
              <button
                onClick={() => {
                  window.location.reload();
                }}
              >
                Start again
              </button>
            </StartOver>
          </GameFinished>
        );
      } else if (reachedFirstStep) {
        return (
          <GameFinished>
            <h1>Congratulations, you reached the first step and won:</h1>
            <h2>{currentMoney}</h2>
            <StartOver>
              <button
                onClick={() => {
                  window.location.reload();
                }}
              >
                Start again
              </button>
            </StartOver>
          </GameFinished>
        );
      } else {
        return (
          <GameFinished>
            <h1>You lost the game.</h1>
            <StartOver>
              <button
                onClick={() => {
                  window.location.reload();
                }}
              >
                Start again
              </button>
            </StartOver>
          </GameFinished>
        );
      }
    } else {
      return null;
    }
  } else {
    return null;
  }
};

const GameFinished = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 30vh;
  position: relative;
  width: 70%;
  margin: 1rem 1rem 0 1rem;
  border: 1px solid rgb(77, 175, 255);
  padding: 2rem;
  border-radius: 1rem;
  animation: transitionTop 4s ease forwards;

  h1,
  h2 {
    text-align: center;
  }
  h2 {
    animation: scaleInOut 2s ease forwards;
    font-size: 3rem;
    color: green;
  }

  @media screen and (max-width: 1400px) {
    width: 50%;
  }
  @media screen and (max-width: 760px) {
    margin: auto;
  }
  @keyframes scaleInOut {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.5);
    }
  }
  @keyframes transitionTop {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(50%);

      opacity: 1;
    }
  }
`;

const StartOver = styled.div`
  display: flex;
  width: 70%;
  margin: 1rem 1rem;
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
  @media screen and (max-width: 1400px) {
    width: 100%;
  }
  @media screen and (max-width: 760px) {
    margin: 1rem 0;
  }
`;

export default Finished;
