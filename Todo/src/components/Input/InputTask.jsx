import * as S from "./StyleInput";
import { useState } from "react";

const InputTask = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [error, setError] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "" && newDescription.trim() !== "") {
      onAddTask(newTask, newDescription);
      setNewTask("");
      setNewDescription("");
      setError("");
    } else {
      let errorMessage = "";
      if (newTask.trim() === "") {
        errorMessage = "Digite a tarefa ";
      }
      if (newDescription.trim() === "") {
        errorMessage = "Digite a descrição";
      }
      if (newTask.trim() === "" && newDescription.trim() === "")
        errorMessage = "Por favor, preencha tanto a tarefa quanto a descrição";
      setError(errorMessage);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <S.Search>
      <S.Container>
        <S.Input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Digite uma nova tarefa"
          onKeyDown={handleKeyDown}
        />
        <S.TextArea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Digite uma descrição"
          onKeyDown={handleKeyDown}
        />
      </S.Container>
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      <S.ButtonContainer>
        <S.Button onClick={handleAddTask}>Adicionar</S.Button>
      </S.ButtonContainer>
    </S.Search>
  );
};

export default InputTask;
