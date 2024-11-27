/* Esercizio
  Mostriamo in due liste diverse gli elementi dell’array tasks. 
  Nella prima lista mostriamo solo i task (title, priority e estimatedTime) che hanno stato “backlog” o “in_progress”. 
  Nella seconda lista mostriamo i task che hanno stato “completed”. Infine riprodurre il layout lasciato in allegato.
  BONUS
  Mostrare lo stato di ogni task in un piccolo tag di fianco al titolo, associando però ad ogni stato un colore diverso.
  Buon lavoro!
 */

import { useState } from "react";
import { tasks } from "./data/tasks";
import "./App.css";

const currentTasks = tasks.filter(
  (task) => task.state == "backlog" || task.state == "in_progress"
);
const completedTasks = tasks.filter((task) => task.state == "completed");

function App() {
  return (
    <>
      <header>
        <h1>Task Manager</h1>
      </header>

      <section className="current-tasks">
        <h3>Completed Tasks ({currentTasks.length})</h3>
        <ul>
          {currentTasks.map((task, index) => {
            return (
              <li key={index}>
                <p>{task.title}</p>
                <p>Priority: {task.priority}</p>
                <p>Est. time: {task.estimatedTime}</p>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="completed-tasks">
        <h3>Completed Tasks ({completedTasks.length})</h3>
        <ul>
          {completedTasks.map((task, index) => {
            return (
              <li key={index}>
                <p>{task.title}</p>
                <p>Priority: {task.priority}</p>
                <p>Est. time: {task.estimatedTime}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default App;
