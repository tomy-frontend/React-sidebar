import { createContext, StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const myInfo = {
  name: "BOSS",
  age: 27,
  hobby: "プログラミング",
};
const MyContext = createContext(myInfo);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyContext.Provider value={myInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MyContext.Provider>
);

export default MyContext;

reportWebVitals();
