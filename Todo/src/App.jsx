import * as A from "./App.js";
import Search from "./components/Search/Search.jsx";
import List from "./components/List/List.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        "https://657a03561acd268f9afa92f5.mockapi.io/api/v1/todos"
      );
      setTasks(response.data);
    } catch (error) {
      console.error("Erro ao obter tarefas:", error);
    }
  };

  const addTask = async (newTask) => {
    try {
      const response = await axios.post(
        "https://657a03561acd268f9afa92f5.mockapi.io/api/v1/todos",
        {
          name: newTask,
          completed: false,
        }
      );
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
    }
  };

  const toggleTask = async (taskId) => {
    try {
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
      await axios.put(
        `https://657a03561acd268f9afa92f5.mockapi.io/api/v1/todos/${taskId}`,
        {
          completed: !tasks.find((task) => task.id === taskId).completed,
        }
      );
    } catch (error) {
      console.error("Erro ao alterar o estado da tarefa:", error);
    }
  };

  const removeTask = async (taskId) => {
    try {
      await axios.delete(
        `https://657a03561acd268f9afa92f5.mockapi.io/api/v1/todos/${taskId}`
      );
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Erro ao remover tarefa:", error);
    }
  };

  return (
    <>
      <A.App>
        <A.Title>Lista de Tarefas</A.Title>
        <Search onAddTask={addTask} />
        <List
          tasks={tasks}
          onToggleTask={toggleTask}
          onRemoveTask={removeTask}
        />
      </A.App>
    </>
  );
}

export default App;
