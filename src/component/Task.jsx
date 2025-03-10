import React, { useState } from "react";
import "./styles/Task.css";

import searchIcon from "./Assets/search.svg";
import filterIcon from "./Assets/filter.svg";
import checkIcon from "./Assets/teenyicons_tick-circle-solid.svg";
import cross_icon from "./Assets/cross_icon.svg";
import assignedIcon_P from "./Assets/P_icon.svg";
import assignedIcon_I from "./Assets/I_icon.svg";
import projectIcon1 from "./Assets/Starbucks.png";
import projectIcon2 from "./Assets/Adidas.png";
import projectIcon3 from "./Assets/Crocs.png";
import projectIcon4 from "./Assets/PizzaHut.png";
import subtaskIcon from "./Assets/subtask_icon.svg";
import sidearrow from "./Assets/taskpanel_visible_arrow.svg";

import abhijeet_avatar from "./Assets/abhijeet_avatar.svg";
import R_avatar from "./Assets/R_avatar.svg";
import avatar_3 from "./Assets/avatar_3.svg";
import avatar_4 from "./Assets/avatar_4.svg";
import calendarIcon from "./Assets/calender_icon.svg";
import userIcon from "./Assets/R_avatar.svg"; // Replace with your user icon
import ArrowDownIcon from "./Assets/todo_arrow.svg";
import bellIcon from "./Assets/Lock.svg";

const tasksData = [
  {
    tasks: [
      {
        Task_Name: "Starbucks - [ APP UI ]",
        Status: "Pending",
        Due_Date: "04 FEB 2025",
        Collaborators: "R +3",
        Priority: "High",
        Project: <><img src={projectIcon1} alt=" " className="project-icon" /> Starbucks</>,
        Assigned_By: <img src={assignedIcon_P} alt=" " className="assigned-icon" />,
        Created_on: "04 FEB 2025",
        Description: "Lorem Ipsum is simply dummy text...",
        Assignee: "Priyanka Roy", // ✅ Added this field
      },
      {
        Task_Name: "Starbucks - [ Content Creation ]",
        Status: "Completed ",
        Due_Date: "04 FEB 2025",
        Collaborators: "R",
        Priority: "Urgent",
        Project: <><img src={projectIcon2} alt=" " className="project-icon" /> Adidas</>,
        Assigned_By: <img src={assignedIcon_P} alt=" " className="assigned-icon" />,
        Assigned_By: <img src={assignedIcon_I} alt=" " className="assigned-icon" />,
        Created_on: "04 FEB 2025",
        Description: "Lorem Ipsum is simply dummy text...",
        Assignee: "Sucharita Saha", // ✅ Added this field
      },
      {
        Task_Name: "Starbucks - [ Frontend Development ]",
        Status: "Overdue",
        Due_Date: "04 FEB 2025",
        Collaborators: "R",
        Priority: "Medium",
        Project: <><img src={projectIcon3} alt=" " className="project-icon" /> Crocs</>,
        Assigned_By: <img src={assignedIcon_P} alt=" " className="assigned-icon" />,
        Assigned_By: <img src={assignedIcon_P} alt=" " className="assigned-icon" />,
        Created_on: "04 FEB 2025",
        Description: "Lorem Ipsum is simply dummy text...",
        Assignee: "Priyanka Roy", // ✅ Added this field
      },
      {
        Task_Name: "Starbucks - [ Backend Development ]",
        Status: "Ongoing",
        Due_Date: "04 FEB 2025",
        Collaborators: "R +4",
        Priority: "Low",
        Project: <><img src={projectIcon4} alt=" " className="project-icon" /> Pizza Hut</>,
        Assigned_By: <img src={assignedIcon_P} alt=" " className="assigned-icon" />,
        Assigned_By: <img src={assignedIcon_P} alt=" " className="assigned-icon" />,
        Created_on: "04 FEB 2025",
        Description: "Lorem Ipsum is simply dummy text...",
        Assignee: "Sucharita Saha", // ✅ Added this field
      },
    ],
  },
];

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
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [selectedTask, setSelectedTask] = useState({ Assignee: "Priyanka Roy" },);
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [selectedMarks, setSelectedMarks] = useState([]); // Track selected mark
    const [isComplete, setIsComplete] = useState(false);
    
  const filteredTasks = tasksData[0].tasks.filter((task) =>
    [task.Task_Name, task.Project, task.Assigned_By].some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleSearchClick = () => {
    setIsSearching(true);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsSearching(false);
    }
  };

  const openTaskDetails = (task) => {
    setSelectedTask(task);
    setIsPanelOpen(true);
    
  };

  const closePanel = () => {
    setIsPanelOpen(false);
    setSelectedTask(null);
  };
  const toggleMark = (idx) => {
    setSelectedMarks((prev) =>
      prev.includes(idx) ? prev.filter((id) => id !== idx) : [...prev, idx]
    );
  };
  const handleRemoveAssignee = () => {
    // Update selectedTask state to remove Assignee
    setSelectedTask((prevTask) => ({
      ...prevTask,
      Assignee: null, // Or an empty string "" if that works better for your logic
    }));
  };
 
  

  return (
    <div className="task-page">
      <div className="task-header">
  {isSearching ? (
    <div className="search-bar-expanded">
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-input-expanded"
      autoFocus
      placeholder="Search tasks..."
    />
    <button className="close-search-btn" onClick={() => setIsSearching(false)}>
      <img src={cross_icon} alt=" " className="close-icon-img" />
    </button>
  </div>
  
  ) : (
    <div className="task-icons">
      <div className="left-icons">
        <img 
          src={filterIcon} 
          alt="Filter" 
          className="filter-box-icon" 
        />
      </div>
      <div className="right-icons">
        <div className="search-icon-wrapper" onClick={() => setIsSearching(true)}>
          <img src={searchIcon} alt="Search" className="search-box-icon" />
        </div>
      </div>
    </div>
  )}
</div>


      <table className="task-table">
        <thead>
            <tr>
           {/* Mark icon column */}
            <th>Task Name</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Collaborators</th>
            <th>Priority</th>
            <th>Projects</th>
            <th>Assigned By</th>
            <th>Created on</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
  {filteredTasks.length > 0 ? (
    filteredTasks.map((task, idx) => (
      <tr key={idx}>
        <td onClick={() => openTaskDetails(task)} className="clickable-task">
          {/* SVG Checkmark Icon */}
          <img
            src={checkIcon}
            alt=" "
            className="mark-icon"
            onClick={(e) => {
              e.stopPropagation(); // Prevent opening task details
              toggleMark(idx);
            }}
            style={{
              filter: selectedMarks.includes(idx) ? "invert(23%) sepia(99%) saturate(2843%) hue-rotate(206deg) brightness(93%) contrast(92%)" : "grayscale(100%)",
            }}
          />
          {task.Task_Name}
         
          {(idx === 2 || idx === 3) && (
            // {(idx === 0 || idx === 2 || idx === 3) && (
  <span className="subtask-container">
              <span className="subtask-number">
              {idx === 2 ? 2 : 3}
                {/* {idx === 0 ? 1 : idx === 2 ? 2 : 3} */}
              </span>
    <img src={subtaskIcon} alt=" " className="subtask-icon" />
  </span>
)}


          <span className="task-arrow"><img src={sidearrow} alt=" " /></span> {/* Arrow */}
        </td>
        <td>{task.Status}</td>
        <td>{task.Due_Date}</td>

        <td className="collaborators-cell">
  <div className="collaborators-container">
    {idx === 0 && (
      <>
                <img src={abhijeet_avatar} alt=" " className="collaborator-avatar" />
                <img src={R_avatar} alt=" " className="collaborator-avatar" />
                <img src={avatar_3} alt=" " className="collaborator-avatar" />
      </>
    )}
    {idx === 1 && (
      <>
        <img src={R_avatar} alt=" " className="collaborator-avatar" />
        <img src={avatar_4} alt=" " className="collaborator-avatar" />
      </>
    )}
    {idx === 2 && (
      <>
        <img src={R_avatar} alt=" " className="collaborator-avatar" />
        <img src={abhijeet_avatar} alt=" " className="collaborator-avatar" />
        <img src={avatar_4} alt=" " className="collaborator-avatar" />
      </>
    )}
    {idx === 3 && (
      <>
                <img src={abhijeet_avatar} alt=" " className="collaborator-avatar" />
                <img src={avatar_3} alt=" " className="collaborator-avatar" />
        
      </>
    )}
  </div>
</td>



        
        <td>
          <span className="priority-dot" style={{ backgroundColor: getPriorityColor(task.Priority) }}></span>
          {task.Priority}
        </td>
        <td>{task.Project}</td>
        <td>{task.Assigned_By}</td>
        <td>{task.Created_on}</td>
        <td>{task.Description}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="9" className="no-tasks">No tasks found</td>
    </tr>
  )}
</tbody>
      </table>

      {/* Sliding Panel for Task Details */}
      <div className={`task-details-panel ${isPanelOpen ? "open" : ""}`}>
      <div className="task-details-header">
      <button 
  className="mark-complete-button" 
  onClick={() => setIsComplete(!isComplete)}
>
  {isComplete ? "✔️ Complete" : "✔️ Mark Complete"}
</button>
          <button onClick={closePanel} className="close-btn"> <img src={cross_icon} alt=" " /></button>
         
  </div>
  {selectedTask && (
  <>
    <h2>{selectedTask.Task_Name}</h2>
    
    {/* ✅ Properly show Assignee value */}
    {/* ✅ Assignee Section */}
<div className="assignee-container">
  <span className="assignee-label">Assignee </span>
  <div className="assignee-box">
                <div className="assignee-info">
                <button className="clear-assignee" onClick={() => handleRemoveAssignee()}>
        ✖
      </button>
      <img src={userIcon} alt="User" className="assignee-avatar" />
      <span className="assignee-name">{selectedTask.Assignee || "Not Assigned"}</span>
    </div>
    {selectedTask.Assignee && (
      <button className="clear-assignee" onClick={() => handleRemoveAssignee()}>
        ✖
      </button>
    )}
                <span className="assignee-status">Collaborators </span>
                <img src={ArrowDownIcon} alt="Dropdown" className="dropdown-icon" />
  </div>
  
</div>

    
    {/* <p><strong>Due Date:</strong> {selectedTask.Due_Date}</p> */}
    <div className="due-date-container">
  <span className="due-date-label">Due date </span>
  <div className="due-date-box">
    <img src={calendarIcon} alt="Calendar" className="calendar-icon" />
    <span className="due-date-value">{selectedTask.Due_Date || "Not Set"}</span>
    <button className="clear-due-date" onClick={() => setSelectedTask({ ...selectedTask, Due_Date: "" })}>
      ✖
    </button>
  </div>
            </div>
            
    <p><strong>Projects </strong> <span className="project-section">{selectedTask.Project}</span></p>

    <p><strong>Dependencies </strong> {selectedTask.Dependencies || "None"}</p>

    <p><strong>Description </strong> {selectedTask.Description || "What is this task about?"}</p>
  </>
)}
      {/* Description Section */}
      <div className="task-description">
        <label className="section-title">Description</label>
        <p className="description-text">What is this task about?</p>
      </div>

      {/* Comment Box */}
      <div className="comment-section">
        <div className="user-avatar">PR</div>
        <input 
  type="text" 
  placeholder="Add a comment" 
  className="comment-input" 
  onClick={(e) => e.target.focus()} 
/>
      </div>

      {/* Collaborators Section */}
      <div className="collaborators">
        <span>Collaborators</span>
        <div className="collaborator-avatars">
          <div className="user-avatar">PR</div>
          
          <button className="add-collaborator">+</button>
        </div>
      </div>

      {/* Leave Task Button */}
      <button className="leave-task">
        <img src={bellIcon} alt=" " /> Leave task
      </button>
      </div>
    </div>
  );
};

export default TaskPage;
