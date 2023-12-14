import * as S from "./Style";
import { useState } from "react";

const Search = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      onAddTask(newTask);
      setNewTask("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
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
        <S.Button onClick={handleAddTask}>Adicionar</S.Button>
      </S.Container>
    </S.Search>
  );
};

export default Search;
