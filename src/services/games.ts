import axios from "../api/axios";
import { singleTeam } from "./teams";

export type singleGame = {
  id: number;
  teams: {
    away: singleTeam;
    home: singleTeam;
  };
  scores: {
    home: number;
    away: number;
  };
  week: string;
};

type gamesResponse = {
  response: singleGame[];
};

export const getGames = async (league: string, season: string) => {
  const { data } = await axios.get<gamesResponse>("/games", {
    params: { league, season },
  });
  return data.response;
};
