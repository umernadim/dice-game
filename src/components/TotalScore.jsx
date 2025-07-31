import React from 'react'
import styled from 'styled-components'

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </ScoreContainer>

)
}

export default TotalScore

const ScoreContainer = styled.div`
    width: 100px;
    text-align: center;
    h1{
        font-size: 4vw;
        font-weight: 500;
        line-height: 0.9;
    }
    p{
        font-size: 1.2vw;
    }
`;