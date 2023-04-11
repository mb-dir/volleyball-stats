import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

interface NotFoundProps {
  className?: string;
}

const NotFound: React.FC<NotFoundProps> = ({ className }) => {
  const navigate = useNavigate();
  return (
    <div className={`container ${className || ""}`}>
      <p className="info">Not Found</p>
      <button className="button" onClick={() => navigate(-1)}>
        Powrót
      </button>
    </div>
  );
};

export default NotFound;
