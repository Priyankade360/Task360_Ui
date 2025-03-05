import React, { useState } from "react";
import Sidebar from "./component/Sidebar";
import ChatBoard from "./component/ChatBoard";
import RightPanel from "./component/RightPanel";
import LoginForm from "./component/LoginForm";
import Task from "./component/Task";
import Project from "./component/Project";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState("chat");

  return (
    <div className="app-container">
      {isLoggedIn ? (
        <>
          <Sidebar setActivePage={setActivePage} />
          <div className="main-content">
            {activePage === "task" ? <Task /> : activePage === "project" ? <Project /> : <ChatBoard />}
          </div>
          {activePage !== "task" && <RightPanel />}
        </>
      ) : (
        <LoginForm onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
};

export default App;
