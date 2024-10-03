import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <main className="main">
        <button
          className={`toggleButton ${isSidebarOpen ? "open" : ""}`}
          onClick={toggleSidebar}
          aria-label="サイドバーを開閉"
          aria-expanded={isSidebarOpen}
          aria-controls="Sidebar"
        >
          {isSidebarOpen ? "Close" : "Open"}
        </button>

        <Sidebar isOpen={isSidebarOpen} />
      </main>
    </div>
  );
}

export default App;
