import axios from "../api/axios";

export type singleTeam = {
  id: number;
  name: string;
  logo: string;
};

export type singleTeamStatistic = {
  country: {
    id: number;
    name: string;
    code: string;
    flag: string;
  };
  team: singleTeam;
  games: {
    played: {
      home: number;
      away: number;
      all: number;
    };
    wins: {
      home: {
        total: number;
      };
      away: {
        total: number;
      };
      all: {
        total: number;
      };
    };
    loses: {
      home: {
        total: number;
      };
      away: {
        total: number;
      };
      all: {
        total: number;
      };
    };
  };
};

type singleTeamResponse = {
  response: singleTeam[];
};
type singleTeamStatisticResponse = {
  response: singleTeamStatistic;
};

export const getTeams = async (league: string, season: string) => {
  const { data } = await axios.get<singleTeamResponse>("/teams", {
    params: { league, season },
  });
  return data.response;
};

export const getTeamStats = async (
  league: string,
  season: string,
  team: string
) => {
  const { data } = await axios.get<
    singleTeamStatisticResponse
  >("/teams/statistics", {
    params: { league, season, team },
  });
  return data.response;
};
