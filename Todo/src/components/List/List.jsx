import Task from "../Task/Task";

const List = ({ tasks, onToggleTask, onRemoveTask }) => (
  <div>
    {tasks.map((task) => (
      <Task
        key={task.id}
        task={task}
        onToggleTask={onToggleTask}
        onRemoveTask={onRemoveTask}
      />
    ))}
  </div>
);

export default List;
