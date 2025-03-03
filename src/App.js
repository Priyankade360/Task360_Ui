import React, { useState } from "react";
import Sidebar from "./component/Sidebar";
import ChatBoard from "./component/ChatBoard";
import RightPanel from "./component/RightPanel";
import LoginForm from "./component/LoginForm";
import "./App.css";



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="app-container">
      {isLoggedIn ? (
        <>
          <Sidebar />
          <div className="main-content">
            <ChatBoard />
          </div>
          <RightPanel />
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;


