import styled from "styled-components";

export const Search = styled.div`
  background-color: #2b3566;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Button = styled.button`
  padding: 0.6rem;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background-color: #0e1129;
`;

export const Input = styled.input`
  padding: 0.6rem;
  border-radius: 3px;
  border: none;
  color: #2b3566;
`;

export const TextArea = styled.textarea`
  padding: 0.6rem;
  border-radius: 3px;
  border: none;
  color: #2b3566;
  resize: vertical;
`;

export const ErrorMessage = styled.div`
  color: white;
  background-color: #ff5a5f;
  padding: 1rem;
  border-radius: 5px;
  margin-top: 0.5rem;
  text-align: center;
`;
