export interface SearchParameters {
  crawl_results?: number;
  gl?: string;
  hl?: string;
  image?: boolean;
  max_results?: number;
  query: string;
  search_service?: string;
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
  title: string;
  link: string;
  content: string;
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
