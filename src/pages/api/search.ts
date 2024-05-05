import {
  PluginErrorType,
  createErrorResponse,
  getPluginSettingsFromRequest,
} from '@lobehub/chat-plugin-sdk';

import { SearchParameters, SearchResponse, Settings } from '@/type';

export const config = {
  runtime: 'edge',
};

export default async (req: Request) => {
  if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  const settings = getPluginSettingsFromRequest<Settings>(req);
  if (!settings)
    return createErrorResponse(PluginErrorType.PluginSettingsInvalid, {
      message: 'Plugin settings not found.',
    });

  try {
    const { query, search_service, max_results, crawl_results, image, gl, hl } =
      (await req.json()) as SearchParameters;
    const searchParameters: SearchParameters = {
      crawl_results: crawl_results ?? 0,
      gl: gl ?? '',
      hl: hl ?? '',
      image: image ?? false,
      max_results: max_results ?? 5,
      query,
      search_service: search_service ?? 'google',
    };
    const apiKey = settings.SEARCH1API_KEY;
    console.log('API Key:', apiKey);

    const response = await fetch('https://api.search1api.com/search', {
      body: JSON.stringify(searchParameters),
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const results = (await response.json()) as SearchResponse;

    return new Response(JSON.stringify(results));
  } catch (error) {
    return createErrorResponse(PluginErrorType.PluginServerError, error as object);
  }
};
