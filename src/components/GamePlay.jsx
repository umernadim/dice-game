import { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You haven't selected any number")
      return
    }

    const randomNum = generateRandomNum(1, 6);
    setCurrentDice((prev) => randomNum);


    if (selectedNumber == randomNum) {
      setScore((prev) => prev + randomNum)
    }
    else {
      setScore((prev) => prev - 2)
    }
    setSelectedNumber(undefined);

  };

  const resetGame = () =>{
    setScore(0)
  }

  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <Button onClick={resetGame}>Reset</Button>
        <Button
        onClick={()=> setShowRules((prev)=> !prev)}
        >{showRules ? "Hide" : "Show"} Rules</Button>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding: 2rem 4rem;
  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: start;
    width: 100%;
  }

  .btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    margin-top: 2.5rem;
  }
  `;

const Button = styled.button`
  all: unset;
  background-color: #000;
  padding: 0.5rem 1rem;
  color: #fff;
  width: 160px;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s ease;
  border: 1.5px solid transparent;
  border-radius: 0.3rem;

  &:hover {
    transition: all 0.4s ease;
    background-color: transparent;
    border: 1.5px solid #000;
    color: #000;
  }
`;


