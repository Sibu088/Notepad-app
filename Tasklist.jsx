// src/components/TaskList.jsx
import React, { useState } from "react";
import { format } from "date-fns";

function TaskList() {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (!task.trim()) return;
    const newTask = {
      id: Date.now(),
      text: task,
      date: dueDate,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTask("");
    setDueDate("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div>
      <h2>✅ Task List</h2>
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((t) => (
          <li
            key={t.id}
            style={{
              textDecoration: t.completed ? "line-through" : "none",
            }}
          >
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleComplete(t.id)}
            />
            {t.text} {t.date && ` (Due: ${format(new Date(t.date), "MMM dd")})`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
