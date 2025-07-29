export interface StockData {
  ticker: string;
  company: string;
  price: number;
  percent_change: number;
  net_change: number;
  bid: number;
  ask: number;
  high: number;
  low: number;
  open: number;
  low_circuit_limit: number;
  up_circuit_limit: number;
  volume: number;
  close: number;
  overall_rating: string;
  short_term_trend: string;
  long_term_trend: string;
  ['52_week_low']: number;
  ['52_week_high']: number;
}
