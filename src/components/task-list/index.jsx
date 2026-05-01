import Task from "../task";
import "./style.css";

function TaskList({ tasks, onToggleTask, onRemoveTask }) {
  if (tasks.length === 0) {
    return <p className="empty-message">Nenhuma tarefa adicionada ainda.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onRemoveTask={onRemoveTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
