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
