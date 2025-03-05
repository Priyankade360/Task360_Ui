import React , { useState } from "react";
import "./styles/Task.css";

// import backarrow from "./Assets/back-arrow.svg";
import searchIcon from "./Assets/search.svg";
import filterIcon from "./Assets/filter.svg";
// import plusIcon from "./Assets/add new.svg";

const tasksData = [
    {
      
        tasks: [
          { title: "UI Design", From: "Priyanka Roy",project: "Pizza Hut",  priority: "Urgent", date: "21-02-2025"  },
          { title: "Graphics work", From: "Priyanka Roy",project: "Chanel",  priority: "High", date: "21-02-2025" },
            { title: "UI Design", From: "Priyanka Roy",project: "Pizza Hut",  priority: "Medium", date: "21-02-2025" },
            { title: "UI Design", From: "Priyanka Roy",project: "Starbucks",  priority: "Low", date: "21-02-2025" },
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

    const filteredTasksData = tasksData.map((section) => ({
        ...section,
        tasks: section.tasks.filter((task) =>
          [task.title, task.project, task.From].some((field) =>
            field.toLowerCase().includes(searchTerm.toLowerCase())
          )
        ),
    }));
    return (
            <div className="task-page">
                {/* <div className="task-header">
                    <img src={backarrow} alt=" " className="back-arrow" /> Task
                </div> */}
                <div className="task-container">
                    <div className="task-icons">
            <div className="left-icons">
            <div className="filter-box" >
                                <img src={filterIcon} alt="Filter" className="icon" />
                            {/* <span>Filter</span> */}
                            
                        </div>
                           
                        </div>
                        <div className="right-icons">
                            <div className="search-box">
    <div className="search-icon-wrapper">
        <img src={searchIcon} alt="Search" className="search-icon" />
    </div>
    <input 
        type="text" 
        // placeholder="Search tasks" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
    />
</div>

                            {/* <button className="add-new" >
                                <img src={plusIcon} alt="Add" className="icon" />
                            </button> */}
                        </div>
                    </div>
    
                    {filteredTasksData.map((section, index) => (
                        <div key={index} className="task-section">
                            <h2>{section.section}</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>From</th>
                                        <th>Project Name</th>
                                        <th>Priority</th>
                                        <th>Due Date</th>
                                        {/* <th>Time</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {section.tasks.length > 0 ? (
                                        section.tasks.map((task, idx) => (
                                          <tr key={idx}>
                                            <td>{task.title}</td>
                                            <td>{task.From}</td>
                                                <td>{task.project}</td>
                                                
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
                {/* <div className="task-preview">
                    <div className="task-preview-header">
                        <h2>Title</h2>
                    </div>
                </div> */}
            </div>
        );
    };
    export default TaskPage;