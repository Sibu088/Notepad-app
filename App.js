import React from "react";
import Notepad from "./Components/Notepad";
import TaskList from "./Components/Tasklist";
import CalendarView from "./Components/CalendarView";
import Reminder from "./Components/Reminder";
import './App.css';
;

function App() {
  return (
    <div className="app">
      <h1>📝 My Notepad</h1>
      <Reminder />
      <CalendarView />
      <Notepad />
      <TaskList />
    </div>
  );
}

export default App;
