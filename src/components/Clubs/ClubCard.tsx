import React from "react";
import "./style.css";

interface ClubCardProps {
  name: string;
  logo: string;
  className?: string;
}

const ClubCard: React.FC<ClubCardProps> = ({ className, logo, name }) => {
  return (
    <div className={`clubCard ${className || ""}`}>
      <img src={logo} alt={`${name} logo img`} />
      <p className="clubCard__name">{name}</p>
    </div>
  );
};

export default ClubCard;
