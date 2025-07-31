import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RuleContainer>
        <h2>How to play dice game ?</h2>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
    </RuleContainer>
  )
}

export default Rules
const RuleContainer = styled.div`
    background-color: #FBF1F1;
    padding: 2rem;
    width: 600px;
    border-radius: 0.4rem;
    margin: 0 auto;
    margin-top: 2rem;
    display: grid;
`;