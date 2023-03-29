import React from "react";

interface GamesProps {
  className?: string;
}

const Games: React.FC<GamesProps> = ({ className }) => {
  return <div className={` ${className || ""}`}>Mecze</div>;
};

export default Games;
