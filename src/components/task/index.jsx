import Button from "../button";
import "./style.css";

function Task({ task, onToggleTask, onRemoveTask }) {
  return (
    <li className={`task ${task.completed ? "task-completed" : ""}`}>
      <label className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />
        <span>{task.text}</span>
      </label>

      <Button variant="danger" onClick={() => onRemoveTask(task.id)}>
        Remover
      </Button>
    </li>
  );
}

export default Task;
