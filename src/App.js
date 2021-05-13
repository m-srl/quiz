import React, { useState } from "react";
import { questions } from "./questions";
import "./App.css";

import Description from "./components/Description";
import Aside from "./components/Aside";
import Game from "./components/Game";
import Finished from "./components/Finished";

import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions/counter";
import { money, reverseMoney } from "./util";

function App() {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
  const [usedFiftyFifty, setUsedFiftyFifty] = useState(false);
  const [millionaire, setMillionaire] = useState(false);
  const [reachedFirstStep, setReachedFirstStep] = useState(false);
  const [reachedSecondStep, setReachedSecondStep] = useState(false);
  const [playerQuit, setPlayerQuit] = useState(false);
  const [answersCorrect, setAnswersCorrect] = useState(1);
  const [playerLost, setPlayerLost] = useState(false);
  const [currentMoney, setCurrentMoney] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);

  return (
    <div className="App">
      <Description gameFinished={gameFinished} />
      <Game
        gameFinished={gameFinished}
        setGameFinished={setGameFinished}
        moneyArray={reverseMoney}
        currentMoney={currentMoney}
        setCurrentMoney={setCurrentMoney}
        reachedFirstStep={reachedFirstStep}
        setReachedFirstStep={setReachedFirstStep}
        reachedSecondStep={reachedSecondStep}
        setReachedSecondStep={setReachedSecondStep}
        setPlayerLost={setPlayerLost}
        setPlayerQuit={setPlayerQuit}
        answersCorrect={answersCorrect}
        setAnswersCorrect={setAnswersCorrect}
        setMillionaire={setMillionaire}
        usedFiftyFifty={usedFiftyFifty}
        setUsedFiftyFifty={setUsedFiftyFifty}
        counter={counter}
        dispatch={dispatch}
      />
      <Aside
        gameFinished={gameFinished}
        setUsedFiftyFifty={setUsedFiftyFifty}
        counter={counter}
      />
      <Finished
        gameIsFinished={gameFinished}
        currentMoney={currentMoney}
        playerLost={playerLost}
        playerQuit={playerQuit}
        reachedFirstStep={reachedFirstStep}
        reachedSecondStep={reachedSecondStep}
        millionaire={millionaire}
      />
    </div>
  );
}

export default App;
