export interface GainerStock {
  company_name: string;
  price: string;
  percent_change: string;
}

export interface TrendingStocks {
  top_gainers: GainerStock[];
}

export interface IndiaTrendingResponse {
  trending_stocks: TrendingStocks;
}

export interface UpcomingIpo{
    name:string;
    status:string;
    bidding_start_date:string;
    additional_text:string;

}

export interface IndianIpoResponse{
    upcoming:UpcomingIpo[]
}