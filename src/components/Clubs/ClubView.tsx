import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";

interface ClubViewProps {
  className?: string;
}

const res = {
  country: {
    id: 34,
    name: "Poland",
    code: "PL",
    flag: "https://media-2.api-sports.io/flags/pl.svg",
  },
  team: {
    id: 910,
    name: "Zawiercie",
    logo: "https://media-1.api-sports.io/volley/teams/910.png",
  },
  games: {
    played: {
      home: 19,
      away: 15,
      all: 34,
    },
    wins: {
      home: {
        total: 18,
        percentage: "94.74",
      },
      away: {
        total: 10,
        percentage: "66.67",
      },
      all: {
        total: 28,
        percentage: "82.35",
      },
    },
    loses: {
      home: {
        total: 1,
        percentage: "5.26",
      },
      away: {
        total: 5,
        percentage: "33.33",
      },
      all: {
        total: 6,
        percentage: "17.65",
      },
    },
  },
};

const ClubView: React.FC<ClubViewProps> = ({ className }) => {
  const { id } = useParams();
  return (
    <div className={`clubs ${className || ""}`}>
      <div className="clubInfo">
        <h2 className="clubInfo__name">{res.team.name}</h2>
        <div className="clubInfo__imgContainer">
          <img
            className="clubInfo__img"
            src={res.team.logo}
            alt={`${res.team.name} logo img`}
          />
          <img
            className="clubInfo__img clubInfo__img--small"
            src={res.country.flag}
            alt={`${res.country.name} flag`}
          />
        </div>
        <p>
          Played(home/away/all):{`${res.games.played.home}/${res.games.played
            .away}/${res.games.played.all}`}
        </p>
        <p>
          Wins(home/away/all):{`${res.games.wins.home.total}/${res.games.wins
            .away.total}/${res.games.wins.all.total}`}
        </p>
        <p>
          Loses(home/away/all):{`${res.games.loses.home.total}/${res.games.loses
            .away.total}/${res.games.loses.all.total}`}
        </p>
      </div>
    </div>
  );
};

export default ClubView;
