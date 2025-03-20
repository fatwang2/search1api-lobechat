{
  "$schema": "../node_modules/@lobehub/chat-plugin-sdk/schema.json",
  "api": [
    {
      "name": "search",
      "url": "https://lobehub.search1api.com/api/search",
      "description": "Web search tool",
      "parameters": {
        "properties": {
          "query": {
            "description": "Search query in natural language. Be specific and concise for better results",
            "type": "string"
          },
          "search_service": {
            "description": "Specify the search engine to use. Choose based on your specific needs",
            "type": "string",
            "default": "google",
            "enum": ["google", "bing", "duckduckgo", "yahoo", "github", "youtube", "arxiv", "wechat", "bilibili", "imdb", "wikipedia"]
          },
          "max_results": {
            "description": "Maximum number of results to return",
            "type": "number",
            "default": 10
          },
          "crawl_results": {
            "description": "Number of results to crawl for full webpage content, useful when search result summaries are insufficient for complex queries",
            "type": "number",
            "default": 0
          },
          "include_sites": {
            "description": "List of sites to include in search. Only use when you need special results from sites not available in search_service",
            "type": "array",
            "items": {
              "type": "string"
            },
            "default": []
          },
          "exclude_sites": {
            "description": "List of sites to exclude from search. Only use when you need to explicitly filter out specific domains from results",
            "type": "array",
            "items": {
              "type": "string"
            },
            "default": []
          },
          "time_range": {
            "description": "Time range for search results, only use when specific time constraints are required",
            "type": "string",
            "enum": ["day", "month", "year"]
          }
        },
        "required": ["query"],
        "type": "object"
      }
    },
    {
      "name": "crawl",
      "url": "https://lobehub.search1api.com/api/crawl",
      "description": "Web content crawler tool",
      "parameters": {
        "properties": {
          "url": {
            "description": "URL to crawl for content",
            "type": "string"
          }
        },
        "required": ["url"],
        "type": "object"
      }
    },
    {
      "name": "sitemap",
      "url": "https://lobehub.search1api.com/api/sitemap",
      "description": "Sitemap retrieval tool",
      "parameters": {
        "properties": {
          "url": {
            "description": "URL to get sitemap or related links from",
            "type": "string"
          }
        },
        "required": ["url"],
        "type": "object"
      }
    }
  ],
  "author": "fatwang2",
  "homepage": "https://x.com/fatwang2ai",
  "identifier": "search1api",
  "meta": {
    "avatar": "https://pics.fatwang2.com/56912e614b35093426c515860f9f2234.svg",
    "tags": ["web", "search", "crawl", "sitemap"],
    "title": "Search1API",
    "description": "一站式搜索服务，专为大模型优化"
  },
  "systemRole": "This plugin provides three functions: web search, web content crawling, and sitemap retrieval. The tools can be used individually or combined to accomplish complex tasks. For example, use the search tool to find web pages related to a keyword, then use the sitemap tool to retrieve the structure and links of the website, and finally use the crawl tool to extract detailed content from the target page",
  "settings": {
    "type": "object",
    "required": ["SEARCH1API_KEY"],
    "properties": {
      "SEARCH1API_KEY": {
        "title": "Search1API API Key",
        "description": "we use [Search1API](https://search1api.com) as backend service | 该插件使用 Search1API 作为搜索服务",
        "type": "string",
        "format": "password"
      }
    }
  },
  "version": "1"
}
