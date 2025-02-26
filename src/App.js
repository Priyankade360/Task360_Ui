import React from "react";
import Sidebar from "./component/Sidebar";
import ChatBoard from "./component/ChatBoard";
import RightPanel from "./component/RightPanel";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">

        <ChatBoard />
      </div>
      <RightPanel />
    </div>
  );
};

export default App;
