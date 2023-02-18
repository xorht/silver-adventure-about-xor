export interface Rank {
  rank: number;
  name: string;
  color: string;
  score: number;
}

export interface Ranks {
  overall: Rank;
  languages: Map<string, Rank>;
}

export interface CodeChallenges {
  totalAuthored: number;
  totalCompleted: number;
}

export interface User {
  username: string;
  name: string;
  honor: number;
  clan: string;
  leaderboardPosition: number;
  skills: string[];
  ranks: Ranks;
  codeChallenges: CodeChallenges;
}
