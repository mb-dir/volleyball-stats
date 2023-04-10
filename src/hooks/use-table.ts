import { useEffect, useState } from "react";
import { getGames, singleGame } from "../services/games";

type TeamPoints = {
  [key: string]: number;
};
type TeamData = {
  team: string;
  points: number;
};

const calculatePoints = (scores: {
  home: number | null;
  away: number | null;
}): number => {
  if (scores.home === 3 && scores.away === 2) {
    return 2;
  } else if (scores.home === 3) {
    return 3;
  }
  return 0;
};

const updateTablePoints = (
  tablePoints: TeamPoints,
  team: string,
  points: number,
  opposingTeam: string
): void => {
  tablePoints[team] += points;
  if (opposingTeam) {
    tablePoints[opposingTeam] += points === 2 ? 1 : 0;
  }
};

const useTable = () => {
  const [ games, setGames ] = useState<singleGame[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await getGames("113", "2022");
        setGames(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGames();
  }, []);

  const teams = [ ...new Set(games.map(game => game.teams.home.name)) ];

  const teamPoints: TeamPoints = {};
  teams.forEach(team => {
    teamPoints[team] = 0;
  });

  teams.forEach(team => {
    games.forEach(game => {
      if (game.week.length >= 3) {
        return;
      }
      if (team === game.teams.home.name) {
        const points = calculatePoints(game.scores);
        updateTablePoints(teamPoints, team, points, game.teams.away.name);
      } else if (team === game.teams.away.name) {
        const points = calculatePoints({
          home: game.scores.away,
          away: game.scores.home,
        });
        updateTablePoints(teamPoints, team, points, game.teams.home.name);
      }
    });
  });

  const sortedTable: TeamData[] = Object.entries(teamPoints)
    .sort(([ , pointsA ], [ , pointsB ]) => pointsB - pointsA)
    .map(([ team, points ]) => ({ team, points }));

  return sortedTable;
};

export default useTable;
