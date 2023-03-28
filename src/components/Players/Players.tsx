import React from "react";

interface PlayersProps {
  className?: string;
}

const Players: React.FC<PlayersProps> = ({ className }) => {
  return <div className={`${className || ""}`}>Zawodnicy</div>;
};

export default Players;
