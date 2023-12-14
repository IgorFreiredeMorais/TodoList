import styled from "styled-components";

export const Lista = styled.div`
  background-color: rgb(43, 53, 102);
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 1.5rem;

  h4 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.2rem;
`;

export const Button = styled.button`
  padding: 0.6rem;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background-color: #0e1129;
  margin-left: 1rem;
`;
