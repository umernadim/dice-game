import React from "react";
import styled from "styled-components";

const NumberSelector = ({setError ,error, selectedNumber, setSelectedNumber}) => {
  const aryNumber = [1, 2, 3, 4, 5, 6];

  const numbSelectorHandler = (value)=>{
    setSelectedNumber(value)
    setError("")
  }

  return (
    <Container>
      <p className="error">{error}</p>
      <Boxes>
        {aryNumber.map((value, i) => (
          <Box
            key={i}
            $isSelected={value === selectedNumber}
            onClick={()=> numbSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </Boxes>
      <p>Select Number</p>
    </Container>
  );
};

export default NumberSelector;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  /* gap: 0.8rem; */
  .error{
    color: red;
  }
  `;

const Boxes = styled.div`
  display: flex;
  gap: 10px;
`;

const Box = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #000;
  display: grid;
  place-items: center;
  font-size: 1.3vw;
  cursor: pointer;
  background-color: ${(props) => (props.$isSelected ? "#000" : "#fff")};
  color: ${(props) => (props.$isSelected ? "#fff" : "#000")};
  transition: all 0.1s ease;
`;
