import React from "react";
import "./styles/RightPanel.css";

const tasks = [
  { date: "2025-04-02", title: "Simply Dummy ...", status: "Pending", priority: "Urgent", project: "Pizza Hut" },
  { date: "2025-04-02", title: "Simply Dummy ...", status: "Pending", priority: "High", project: "Canal" },
  { date: "2025-04-02", title: "Simply Dummy ...", status: "Pending", priority: "Medium", project: "Starbucks" },
  { date: "2025-04-02", title: "Simply Dummy ...", status: "Pending", priority: "Low", project: "Adidas" }
];

// Function to get priority color
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

const RightPanel = () => {
  return (
    <div className="right-panel">
      <h4>Assigned by Abhijeet</h4>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Project</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.date}</td>
                <td>{task.title}</td>
                <td>{task.status}</td>
                <td>
                  <span className="priority-dot" style={{ backgroundColor: getPriorityColor(task.priority) }}></span>
                  {task.priority}
                </td>
                <td>{task.project}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>No tasks available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RightPanel;
