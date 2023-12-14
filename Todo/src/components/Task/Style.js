import styled from "styled-components";

export const Button = styled.button`
  padding: 0.6rem;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background-color: #0e1129;
  margin-left: 1rem;
`;

export const Lista = styled.div`
  background-color: rgb(43, 53, 102);
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  h4 {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${(props) => (props.completed ? "#6c757d" : "inherit")};
    transition: color 0.3s ease;
  }

  > div {
    display: flex;
    align-items: center;
  }
`;
