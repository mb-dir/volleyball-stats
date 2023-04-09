import React, {useState, useEffect} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { getGames, singleGame } from "../../services/games";

interface GamesProps {
  className?: string;
}

const Games: React.FC<GamesProps> = ({ className }) => {
  const [games, setGames] = useState<singleGame[]>([]);

  useEffect(()=>{
    const fetchGames = async () => {
      try {
        const data = await getGames("113", "2022");
        setGames(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGames();
  },[])

  const uniqueMatchweeks = [ ...new Set(games?.map(game => game.week)) ];
  return (
    <div className={className || "games"}>
      {uniqueMatchweeks.map(matchweek => (
        <div key={matchweek} className="games__matchweek">
          <h2>{matchweek.length > 2 ? matchweek : `Kolejka ${matchweek}`}</h2>
          {games
            ?.filter(el => el.week === matchweek)
            .map(({ id, teams, scores }) => {
              return (
                <div className="results" key={id}>
                  <Link className="results__link" to={`/kluby/${teams.home.id}`}>
                    <img
                      className="games__logo"
                      src={teams.home.logo}
                      alt={`${teams.home.logo} logo`}
                    />
                    <p>{`${teams.home.name}`}</p>
                  </Link>{" "}
                  <Link className="results__link" to={`/kluby/${teams.away.id}`}>
                    <img
                      className="games__logo"
                      src={teams.away.logo}
                      alt={`${teams.away.logo} logo`}
                    />
                    <p>{teams.away.name}</p>
                  </Link>{" "}
                  <span>
                    {" - "}
                    {`${scores.home ?? "?"}:${scores.away ?? "?"}`}
                  </span>
                </div>
              );
            })}
        </div>
      ))}
    </div>
  );
};

export default Games;
