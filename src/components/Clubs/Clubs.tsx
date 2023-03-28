import React from "react";

interface ClubsProps {
  className?: string;
}

const Clubs: React.FC<ClubsProps> = ({ className }) => {
  return <div className={`${className || ""}`}>Kluby</div>;
};

export default Clubs;
