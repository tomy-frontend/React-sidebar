import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MyContext from "./index";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [count, setCount] = useState(0);
  const myInfo = useContext(MyContext);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("useEffectで呼ばれました");
  }, [count]);

  return (
    <div className="App">
      <div className="aside">
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
      </div>

      <div className="main">
        <button className="button" onClick={handleClick}>
          Click me
        </button>
        <p>{count}</p>

        <hr />
        <h1>useContextで表示された内容</h1>
        <p>{myInfo.name}</p>
        <p>{myInfo.age}</p>
        <p>{myInfo.hobby}</p>
      </div>
    </div>
  );
}

export default App;
