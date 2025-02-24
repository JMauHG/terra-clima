import IWeather from './IWeather';
import ApiService from '../api/ApiService';

export class VisualCrossingProvider implements IWeather {
  async getHumidity(lat: string, lon: string, date: string) {
    const url = process.env.VISUAL_CROSSING_URL || ''
    const endpoint = process.env.VISUAL_CROSSING_ENDPOINT || ''
    const apiKey = process.env.VISUAL_CROSSING_API_KEY || ''

    const fullEndpoint = `${endpoint}/rest/services/timeline/${lat},${lon}/${date}`;
    const apiService = new ApiService(url, fullEndpoint);

    const params = {
      key: apiKey
    };

    try {
      const response = await apiService.makeRequest(params);
      return response?.days?.[0]?.humidity;
    } catch (error) {
      console.error('Get Humidity Error:', error);
      throw error;
    }

  }
}