export interface Standing {
  rank: number;
  team: {
    id: number;
    logo: string;
    name: string;
  };
  all: {
    played: number;
    win: number;
    lose: number;
    draw: number;
  };
  away: {
    played: number;
    win: number;
    lose: number;
    draw: number;
  };
  home: {
    played: number;
    win: number;
    lose: number;
    draw: number;
  };
  goalsDiff: number;
  points: number;
}

export interface LeagueData {
  leagueId: number;
  teamId: number;
}

export interface StandingsResponse {
  response: Response;
  errors: Record<string, string>;
}

interface Response {
  league: {
    standings: Standing[];
  };
}
