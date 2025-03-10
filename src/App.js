import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import "./component/styles/Global.css";

// import Sidebar from "./component/Sidebar";
// import ChatBoard from "./component/ChatBoard";
// import RightPanel from "./component/RightPanel";
import LoginForm from "./component/LoginForm";
import Task from "./component/Task";
import "./App.css";
import Navbar from "./component/Navbar";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [activePage, setActivePage] = useState("chat");

//   return (
//     <div className="app-container">
//       {isLoggedIn ? (
//         <>
//           <Sidebar setActivePage={setActivePage} />
//           <div className="main-content">
//             {activePage === "task" ? <Task /> : activePage === "project" ? <Project /> : <ChatBoard />}
//           </div>
//           {activePage !== "task" && <RightPanel />}
//         </>
//       ) : (
//         <LoginForm onLogin={() => setIsLoggedIn(true)} />
//       )}
//     </div>
//   );
// };

// export default App;
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/task" element={<Task />} />
        </Routes>
      </div>
    </BrowserRouter>
  ) : (
    <LoginForm onLogin={() => setIsLoggedIn(true)} />
  );
};

export default App;
