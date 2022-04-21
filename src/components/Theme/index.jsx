import React, { useEffect, useState } from "react";
import { ImCog } from "react-icons/im";
import setTheme from "../../helpers/SetTheme";
import "./style.scss";

const colors = [
  {
    id: "yellow",
    bgColor: "#ffdd40",
  },
  {
    id: "red",
    bgColor: "#E82A2A",
  },
  {
    id: "green",
    bgColor: "#6ac045",
  },
  {
    id: "purple",
    bgColor: "#5078FF",
  },
];

const Theme = () => {
  const [theme, setCurrentTheme] = useState("yellow");
  const [toggle, setToggle] = useState(false);

  const toggleThemes = (id) => {
    setCurrentTheme(id);
    setToggle(false)
  };

  useEffect(()=>{
   setTheme(theme)
  },[theme]);

  return (
    <div className={`theme-wrapper ${toggle ? "active" : ""}`}>
      <div className="theme-wrapper__toggle-btn">
        <ImCog color={(colors.find(item=>item.id ===theme)).bgColor} onClick={()=>setToggle(!toggle)} size={40} />
      </div>
      <div className="theme-wrapper__menu">
        <div>
          <h4>Choose Theme</h4>
          <ul>
            {colors.map((color) => (
              <li
                style={{ background: color.bgColor }}
                onClick={() => toggleThemes(color.id)}
                key={color}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Theme;
