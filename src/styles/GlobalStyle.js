import styled, { createGlobalStyle } from 'styled-components';
import { fadeIn, bounceIn } from '../styles/animations';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: #1a1a2e;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
  }
`;

export const Container = styled.div`
  background-color: #16213e;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 400px;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 600px) {
    padding: 15px;
    width: 90%;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
  color: #e94560;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 400;
  color: #e94560;
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  background-color: #0f3460;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border: 2px solid #e94560;
    transform: scale(1.05);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #e94560;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  animation: ${bounceIn} 1s ease;

  &:hover {
    background-color: #ff6f91;
  }
`;
