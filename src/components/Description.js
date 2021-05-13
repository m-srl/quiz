import React from "react";
import styled from "styled-components";

const Description = ({gameFinished}) => {
  return !gameFinished && (
    <Details>
      <h1>Test Your Computer Knowledge - Quiz</h1>
      <h3>Rules:</h3>

      <ol>
        <li>Only one answer is correct</li>
        <li>The game stops when the player wins the highest prize after guessing correctly 15 times, quits or guesses wrong </li>
        <li>
          The player can use two helping options: Search on google for 30
          seconds or 50/50 which removes 2 wrong answers{" "}
        </li>
        
        <li>Time is not of the essence, don't cheat</li>
      </ol>
    </Details>
  );
};

const Details = styled.div`


  min-height: 30vh;
  position: relative;
  width: 70%;
  margin: 1rem 1rem 0 1rem;
  border: 1px solid rgb(77, 175, 255);
  padding: 2rem;
  border-radius: 1rem;
  h1 {
    text-align: center;
  }
  ol {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    padding: 0 1rem;
  }
  li {
    line-height: 2rem;
    text-align:left
  }

  @media screen and (max-width:1200px){
  max-width:50%;
}
@media screen and (max-width:760px){
  max-width:80%;
  width:80%;
  margin:5%;
  }
`;

export default Description;
