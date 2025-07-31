import React from 'react'
import styled from 'styled-components'

const RollDice = ({rollDice, currentDice}) => {

  return (
    <DiceContainer>
      <div className='dice' 
      onClick={rollDice}
      >
        <img src={`/assets/dice/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click Dice to Roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  .dice{
    cursor: pointer;
  }
  .dice img{
    width: 200px;
  }
  p{
    font-size: 1.2rem;
  }
`;