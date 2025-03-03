import React, { useState } from "react";
import Sidebar from "./component/Sidebar";
import ChatBoard from "./component/ChatBoard";
import RightPanel from "./component/RightPanel";
import LoginForm from "./component/LoginForm";
import Task from "./component/Task";
import "./App.css";



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState("chat");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="app-container">
      {isLoggedIn ? (
        <>
          <Sidebar setActivePage={setActivePage} /> {/* Pass function to Sidebar */}
          <div className="main-content">
            {activePage === "task" ? <Task /> : <ChatBoard />}
          </div>
          {activePage !== "task" && <RightPanel />}
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;


