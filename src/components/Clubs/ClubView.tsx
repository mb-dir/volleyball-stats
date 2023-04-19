import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import { singleTeamStatistic, getTeamStats } from "../../services/teams";
import useLoader from "../../hooks/use-loader";
import Loader from "../Loader/Loader";
import { PLUSLIGA_DATA } from "../../enums";
interface ClubViewProps {
  className?: string;
}

const ClubView: React.FC<ClubViewProps> = ({ className }) => {
  const { id } = useParams();
  const [ stats, setStats ] = useState<singleTeamStatistic>();
  const {isLoading, fetchData} = useLoader();

  useEffect(() => {
    const fetchTeamStats = async () => {
      await fetchData(async()=>{
        const data = await getTeamStats(PLUSLIGA_DATA.ID, PLUSLIGA_DATA.SEASON, id + "");
        setStats(data);
      })
    };
    fetchTeamStats();
  }, []);

  return (
    <div className={`clubs ${className || ""}`}>
      {isLoading ? <Loader /> : <div className="clubInfo">
        <h2 className="clubInfo__name">{stats?.team.name || ""}</h2>
        <div className="clubInfo__imgContainer">
          <img
            className="clubInfo__img"
            src={stats?.team.logo}
            alt={`${stats?.team.name} logo img`}
          />
          <img
            className="clubInfo__img clubInfo__img--small"
            src={stats?.country.flag}
            alt={`${stats?.country.name} flag`}
          />
        </div>
        <p>
          Played(home/away/all): {`${stats?.games.played.home ?? ""}/${stats?.games.played
            .away ?? ""}/${stats?.games.played.all ?? ""}`}
        </p>
        <p>
          Wins(home/away/all): {`${stats?.games.wins.home.total ?? ""}/${stats?.games.wins
            .away.total ?? ""}/${stats?.games.wins.all.total ?? ""}`}
        </p>
        <p>
          Loses(home/away/all): {`${stats?.games.loses.home.total ?? ""}/${stats?.games.loses
            .away.total ?? ""}/${stats?.games.loses.all.total ?? ""}`}
        </p>
      </div>}
    </div>
  );
};

export default ClubView;
