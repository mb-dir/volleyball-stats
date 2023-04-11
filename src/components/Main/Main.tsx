import React from "react";
import "./style.css";

interface MainProps {
  className?: string;
}

const Main: React.FC<MainProps> = ({ className }) => {
  return (
    <div className={`mainContent ${className || ""}`}>
      <h2 className="mainContent__header">Volley-Stats</h2>
      <p className="mainContent__content">
        Wszystkie najważniejsze dane dotyczące{" "}
        <span className="green">PlusLigi</span> w jednym miejscu
      </p>
    </div>
  );
};

export default Main;
