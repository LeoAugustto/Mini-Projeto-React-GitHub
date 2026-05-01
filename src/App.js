import { useEffect, useState } from "react";
import Button from "./components/button";
import TaskList from "./components/task-list";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("Lista atualizada:", tasks);
  }, [tasks]);

  function addTask() {
    const text = input.trim();

    if (text === "") {
      alert("Digite uma tarefa antes de adicionar.");
      return;
    }

    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInput("");
  }

  function removeTask(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  function toggleTask(taskId) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  return (
    <main className="app">
      <section className="card">
        <div className="header">
          <p className="subtitle">Mini Projeto React + GitHub</p>
          <h1>Lista de Tarefas</h1>
          <p className="description">
            Aplicação simples feita com componentes, useState e useEffect.
          </p>
        </div>

        <div className="form">
          <input
            type="text"
            value={input}
            placeholder="Digite uma nova tarefa"
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                addTask();
              }
            }}
          />

          <Button onClick={addTask}>Adicionar</Button>
        </div>

        <div className="counter">
          <span>Total: {tasks.length}</span>
          <span>Pendentes: {pendingTasks}</span>
          <span>Concluídas: {completedTasks}</span>
        </div>

        <TaskList
          tasks={tasks}
          onToggleTask={toggleTask}
          onRemoveTask={removeTask}
        />
      </section>
    </main>
  );
}

export default App;
