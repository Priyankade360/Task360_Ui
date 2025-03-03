import { useState } from "react";
import "./styles/TaskManager.css";
// import { useNavigate } from "react-router-dom";

function TaskPage({ onClose }){
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
//   const navigate = useNavigate();

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div className="task-page">
      <button onClick={onClose} className="close-btn">Close</button>
      <h2>Task Manager</h2>

      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskPage;
