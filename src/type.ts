export enum SearchService {
  GOOGLE = "google",
  BING = "bing",
  DUCKDUCKGO = "duckduckgo",
  YAHOO = "yahoo",
  GITHUB = "github",
  YOUTUBE = "youtube",
  ARXIV = "arxiv",
  WECHAT = "wechat",
  BILIBILI = "bilibili",
  IMDB = "imdb",
  WIKIPEDIA = "wikipedia",
}

export enum TimeRange {
  DAY = "day",
  MONTH = "month",
  YEAR = "year"
}

export interface SearchParameters {
  crawl_results?: number;
  max_results?: number;
  query: string;
  search_service?: SearchService | string;
  include_sites?: string[];
  exclude_sites?: string[];
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
