import React from "react";
import styled from "styled-components";

const MoneyItem = ({ id, item }) => {
  return (
    <>
      <ParagraphStyle
        className={`money-item${id} money-item`}
      >{`${id} : ${item}`}</ParagraphStyle>
    </>
  );
};

const ParagraphStyle = styled.p`
  width: 90%;
  margin: 0.2rem;
  text-align: center;
  border-radius: 2rem;
  padding: 0.2rem 0 0.4rem 0;
  position: relative;
  &:is(.money-item10, .money-item5)::after {
    content: "";
    margin-left: 1rem;
    width: 50px;
    background: white;
    height: 3px;
    right: 5%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    @media screen and (max-width: 550px) {
      width: 10px;
    }
  }
  &:is(.money-item10, .money-item5)::before {
    content: "";
    margin-right: 1rem;
    width: 50px;
    background: white;
    height: 3px;
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    @media screen and (max-width: 550px) {
      width: 10px;
    }
  }
`;

export default MoneyItem;
