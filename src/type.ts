export enum SearchService {
  ARXIV = "arxiv",
  BILIBILI = "bilibili",
  BING = "bing",
  DUCKDUCKGO = "duckduckgo",
  GITHUB = "github",
  GOOGLE = "google",
  IMDB = "imdb",
  WECHAT = "wechat",
  WIKIPEDIA = "wikipedia",
  YAHOO = "yahoo",
  YOUTUBE = "youtube",
}

export enum TimeRange {
  DAY = "day",
  MONTH = "month",
  YEAR = "year"
}

export interface SearchParameters {
  crawl_results?: number;
  exclude_sites?: string[];
  include_sites?: string[];
  max_results?: number;
  query: string;
  search_service?: SearchService | string;
  time_range?: TimeRange | string;
}

export interface SearchResult {
  content: string;
  link: string;
  snippet: string;
  title: string;
}

export interface SearchResponse {
  results: SearchResult[];
  searchParameters: SearchParameters;
}

export interface CrawlParameters {
  url: string;
}

export interface CrawlResult {
  content: string;
  link: string;
  title: string;
}

export interface CrawlResponse {
  crawlParameters: CrawlParameters;
  results: CrawlResult;
}

export interface SitemapParameters {
  url: string;
}

export interface SitemapResponse {
  links: string[];
}

export interface Settings {
  SEARCH1API_KEY?: string;
}
