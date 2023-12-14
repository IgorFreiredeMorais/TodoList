import * as T from "./Style";

const Task = ({ task, onToggleTask, onRemoveTask }) => (
  <T.Lista key={task.id}>
    <h4
      style={{
        textDecoration: task.completed ? "line-through" : "none",
        color: task.completed ? "#6c757d" : "inherit",
      }}
    >
      {task.name}
    </h4>
    <div>
      <T.Button onClick={() => onToggleTask(task.id)}>
        {task.completed ? "Desfazer" : "Concluir"}
      </T.Button>
      <T.Button onClick={() => onRemoveTask(task.id)}>Remover</T.Button>
    </div>
  </T.Lista>
);

export default Task;
