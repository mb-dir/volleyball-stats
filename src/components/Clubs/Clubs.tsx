import React, { useState, useEffect } from "react";
import ClubCard from "./ClubCard";
import { getTeams, singleTeam } from "../../services/teams";
import useLoader from "../../hooks/use-loader";
import Loader from "../Loader/Loader";
interface ClubsProps {
  className?: string;
}

const Clubs: React.FC<ClubsProps> = ({ className }) => {
  const [ teams, setTeams ] = useState<singleTeam[]>([]);
  const { isLoading, fetchData } = useLoader();

  useEffect(() => {
    const fetchTeams = async () => {
      await fetchData(async () => {
        const data = await getTeams("113", "2022");
        setTeams(data);
      });
    };
    fetchTeams();
  }, []);

  return (
    <div className={`clubs ${className || ""}`}>
      <h2 className="clubs__header">Kluby</h2>
      {isLoading ? (
        <Loader />
      ) : (
        (teams || []).map(team => {
          return (
            <ClubCard
              key={team.id}
              name={team.name}
              logo={team.logo}
              id={team.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Clubs;
