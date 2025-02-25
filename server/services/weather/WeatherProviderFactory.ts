import IWeather from './IWeather';
import { VisualCrossingProvider } from './VisualCrossingProvider';
import { WeatherApiProvider } from './WeatherApiProvider';

export function getWeatherProvider(providerName = 'visualcrossing'): IWeather {
  switch (providerName) {
    case 'visualcrossing':
      return new VisualCrossingProvider();
    case 'weatherapi':
    default:
      return new WeatherApiProvider();
  }
}