import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

interface ClubCardProps {
  name: string;
  logo: string;
  id: number;
  className?: string;
}

const ClubCard: React.FC<ClubCardProps> = ({ className, logo, name, id }) => {
  return (
    <Link to={`${id}`}>
      <div className={`clubCard ${className || ""}`}>
        <img src={logo} alt={`${name} logo img`} />
        <p className="clubCard__name">{name}</p>
      </div>
    </Link>
  );
};

export default ClubCard;
