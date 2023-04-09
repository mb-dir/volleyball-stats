import React, { useState, useEffect } from "react";
import ClubCard from "./ClubCard";
import { getTeams, singleTeam } from "../../services/teams";
interface ClubsProps {
  className?: string;
}

const Clubs: React.FC<ClubsProps> = ({ className }) => {
  const [ teams, setTeams ] = useState<singleTeam[]>([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const data = await getTeams("113", "2022");
        setTeams(data);
      } catch (error) {
        console.error(error);
      }
    };
    // fetchTeams();
  }, []);

  return (
    <div className={`clubs ${className || ""}`}>
      {(teams || []).map(team => {
        return (
          <ClubCard
            key={team.id}
            name={team.name}
            logo={team.logo}
            id={team.id}
          />
        );
      })}
    </div>
  );
};

export default Clubs;
