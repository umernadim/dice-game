import React from "react";
import styled from "styled-components";
import mainImg from "/assets/mainImg.png";

const StartGame = ({toggle}) => {
  return (
    <>
      <Container>
        <Img src={mainImg} alt="home-img" />
        <Content>
          <H1>Dice Game</H1>
          <Button onClick={toggle}>Play Now</Button>
        </Content>
      </Container>  
    </>
  );
};

export default StartGame;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  background-color: #efe7de;
`;

const Content = styled.div`
  text-align: end;
`;

const Img = styled.img`
  width: 600px;
`;

const H1 = styled.h1`
  font-size: 6vw;
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

  &:hover {
    transition: all 0.4s ease;
    background-color: transparent;
    border: 1.5px solid #000;
    color: #000;
  }
`;
