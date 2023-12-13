import "./header.css";
import React, { useState } from "react";
import { GiMoon } from "react-icons/gi";
import MyContext from "../contextAPI/myContext";

const Header: React.FC = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <MyContext.Provider value={theme}>
      <header>
        <div className="title-review">
          <h1>Review TA</h1>
          <button
            onClick={() => {
              if (theme == "dark") {
                setTheme("light");
              } else {
                setTheme("dark");
              }
            }}
            className="icon"
          >
            <GiMoon />
          </button>
        </div>
      </header>
    </MyContext.Provider>
  );
};
export default Header;
