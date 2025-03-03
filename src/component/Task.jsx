import React , { useState } from "react";
import "./styles/Task.css";

import backarrow from "./Assets/back-arrow.svg";
import todoarrow from "./Assets/todo_arrow.svg";
import rectangle from "./Assets/Rectangle.svg";
import plus from "./Assets/task_plus.svg";

import timelineIcon1 from "./Assets/timeline1.svg";
import timelineIcon2 from "./Assets/timeline2.svg";
import searchIcon from "./Assets/search.svg";
import filterIcon from "./Assets/filter.svg";
import plusIcon from "./Assets/add new.svg";

const tasksData = [
    {
        section: (
          <span className="section-title">
                <img src={todoarrow} alt=" " className="section-icon" />
                <img src={rectangle} alt=" " className="rectangle" />
                To-do
                <span className="tooltip-container">
          <img src={plus} alt=" " className="plus" />
          <span className="tooltip-text">Edit</span>
        </span>
          </span>
        ),
        tasks: [
          { project: "Pizza Hut", title: "UI Design", provider: "Purna Pramanik", priority: "Urgent", date: "21-02-2025", time: "21-02-2025" },
          { project: "Chanel", title: "Graphics work", provider: "Purna Pramanik", priority: "High", date: "21-02-2025", time: "21-02-2025" },
          { project: "Pizza Hut", title: "UI Design", provider: "Purna Pramanik", priority: "Medium", date: "21-02-2025", time: "21-02-2025" },
        ],
      },
  
  {
    section: (
        <span className="section-title">
              <img src={todoarrow} alt=" " className="section-icon" />
              <img src={rectangle} alt=" " className="rectangle" />
              On Progress
              <span className="Progress-tooltip-container">
              <img src={plus} alt=" " className="Progress-plus" />
          <span className="tooltip-text">Edit</span>
        </span>
        </span>
      ),
    tasks: [
      { project: "Pizza Hut", title: "UI Design", provider: "Purna Pramanik", priority: "Urgent", date: "21-02-2025", time: "21-02-2025" },
      { project: "Chanel", title: "Graphics work", provider: "Purna Pramanik", priority: "High", date: "21-02-2025", time: "21-02-2025" },
    ],
  },
  {
    section: (
        <span className="section-title">
              <img src={todoarrow} alt=" " className="section-icon" />
              <img src={rectangle} alt=" " className="rectangle" />
              In Review
              <span className="Review-tooltip-container">
              <img src={plus} alt=" " className="Review-plus" />
          <span className="tooltip-text">Edit</span>
        </span>
             
        </span>
      ),
    tasks: [
      { project: "Pizza Hut", title: "UI Design", provider: "Purna Pramanik", priority: "Urgent", date: "21-02-2025", time: "21-02-2025" },
      { project: "Chanel", title: "Graphics work", provider: "Purna Pramanik", priority: "High", date: "21-02-2025", time: "21-02-2025" },
    ],
  },
];
// const handleClick = () => {
//     alert("Button clicked!");
//   };
const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case "urgent":
        return "red";
      case "high":
        return "orange";
      case "medium":
        return "yellow";
      case "low":
        return "lightgray";
      default:
        return "gray";
    }
};


const TaskPage = () => {
    const [searchTerm, setSearchTerm] = useState(""); // Moved above

    const filteredTasksData = tasksData.map((section) => ({
        ...section,
        tasks: section.tasks.filter((task) =>
          [task.title, task.project, task.provider].some((field) =>
            field.toLowerCase().includes(searchTerm.toLowerCase())
          )
        ),
    }));
    return (
            <div className="task-page">
                <div className="task-header">
                    <img src={backarrow} alt=" " className="back-arrow" /> Task
                </div>
                <div className="task-container">
                    <div className="task-icons">
                        <div className="left-icons">
                            <img src={timelineIcon1} alt=" " className="icon" />
                            <span>Timeline</span>
                            <img src={timelineIcon2} alt="" className="icon active" />
                            <span>timeline</span>
                        </div>
                        <div className="right-icons">
                            <div className="search-box">
    <div className="search-icon-wrapper">
        <img src={searchIcon} alt="Search" className="search-icon" />
    </div>
    <input 
        type="text" 
        placeholder="Search tasks" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
    />
</div>

                            <div className="filter-box">
                                <img src={filterIcon} alt="Filter" className="icon" />
                                <span>Filter</span>
                            </div>
                            <button className="add-new">
                                <img src={plusIcon} alt="Add" className="icon" />
                            </button>
                        </div>
                    </div>
    
                    {filteredTasksData.map((section, index) => (
                        <div key={index} className="task-section">
                            <h2>{section.section}</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Project Name</th>
                                        <th>Title</th>
                                        <th>Task Provider</th>
                                        <th>Priority</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {section.tasks.length > 0 ? (
                                        section.tasks.map((task, idx) => (
                                            <tr key={idx}>
                                                <td>{task.project}</td>
                                                <td>{task.title}</td>
                                                <td>{task.provider}</td>
                                                <td>
                                                    <span className="priority-dot" style={{ backgroundColor: getPriorityColor(task.priority) }}></span>
                                                    {task.priority}
                                                </td>
                                                <td>{task.date}</td>
                                                <td>{task.time}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="no-tasks">No tasks found</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
                <div className="task-preview">
                    <div className="task-preview-header">
                        <h2>Task Preview</h2>
                    </div>
                </div>
            </div>
        );
    };
    export default TaskPage;