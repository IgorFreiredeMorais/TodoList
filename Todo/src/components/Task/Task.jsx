import * as T from "./StyleTask";

const Task = ({ task, onToggleTask, onRemoveTask }) => (
  <T.Lista key={task.id}>
    <h4
      style={{
        textDecoration: task.completed ? "line-through" : "none",
        color: task.completed ? "#6c757d" : "inherit",
        marginBottom: "0.5rem",
      }}
    >
      {task.name}
    </h4>
    <div>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          color: task.completed ? "#6c757d" : "inherit",
        }}
      >
        {task.description}
      </span>
    </div>
    <T.Buttons>
      <T.Button onClick={() => onToggleTask(task.id)}>
        {task.completed ? "Desfazer" : "Concluir"}
      </T.Button>
      <T.Button onClick={() => onRemoveTask(task.id)}>Remover</T.Button>
    </T.Buttons>
  </T.Lista>
);

export default Task;
