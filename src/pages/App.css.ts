// imports
import styled from "styled-components";

// local imports
import { CardProps } from "../helper/common.interfaces";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Card = styled.img<CardProps>`
  width: 400px;
  height: 550px;
  object-fit: cover;
  margin: 5px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #2ecc71;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #27ae60;
  }
`;
