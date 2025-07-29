export interface Coin {
  name: string;
  code: string;
  png32: string;
  rate: number;
  cap: number;
  volume: number;
  liquidity: number;
  allTimeHighUSD: number;
  delta: {
    hour: number;
    day: number;
    week: number;
  };
}
