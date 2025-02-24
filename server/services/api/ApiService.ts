export default class ApiService {
    private baseUrl: string;
    private endpoint: string;

    constructor(url: string, endpoint: string) {
      this.baseUrl = url;
      this.endpoint = endpoint;
    }
  
    async makeRequest(params: Record<string, string>) {
      try {
        const url = new URL(`${this.baseUrl}${this.endpoint}`);
        
        Object.keys(params).forEach(key => {
          url.searchParams.append(key, params[key]);
        });
  
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Bad request');
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Bad request', error);
        throw error;
      }
    }
  }
  