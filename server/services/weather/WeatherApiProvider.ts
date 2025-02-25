import IWeather from './IWeather';
import ApiService from '../api/ApiService';

export class WeatherApiProvider implements IWeather {
  async getHumidity(lat: string, lon: string, date: string) {
    const url = process.env.WEATHER_API_URL || ''
    const endpoint = process.env.WEATHER_API_ENDPOINT || ''
    const apiKey = process.env.WEATHER_API_API_KEY || ''

    const fullEndpoint = `${endpoint}/history.json`;
    const apiService = new ApiService(url, fullEndpoint);

    const params = {
      key: apiKey,
      q: `${lat},${lon}`,
      dt: date,
    };

    try {
      const response = await apiService.makeRequest(params);
      return response?.forecast?.forecastday?.[0]?.day?.avghumidity;
    } catch (error) {
      console.error('Get Humidity Error:', error);
      throw error;
    }

  }
}