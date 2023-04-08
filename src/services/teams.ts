import axios from "../api/axios";

export type singleTeam = {
  id: number;
  name: string;
  logo: string;
};

type singleTeamResponse = {
  response: singleTeam[];
};

export const getTeams = async (league: string, season: string) => {
  const { data } = await axios.get<singleTeamResponse>("/teams", {
    params: { league, season },
  });
  return data.response;
};
