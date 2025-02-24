import { getWeatherProvider } from "~/server/services/weather/WeatherProviderFactory";
import { getHumidityWarning } from "~/server/services/weather/humidityWarning";

export default defineEventHandler(async (event) => {
    const { lat, lon, date, weather_provider } = getQuery(event);
    const validProviders = ['visualcrossing', 'weatherapi'];

    if (!lat || !lon || !date || !weather_provider) {
        return createError({
            statusCode: 400,
            statusMessage: 'lat, lon, date and weather_provider are required',
        });
    }

    if (typeof lat !== 'string' || typeof lon !== 'string' || typeof date !== 'string' || typeof weather_provider !== 'string') {
        return createError({
            statusCode: 400,
            statusMessage: 'lat, lon, date and weather_provider must be strings',
        });
    }

    if (typeof lat !== 'string' || typeof lon !== 'string' || typeof date !== 'string' || typeof weather_provider !== 'string') {
        return createError({
            statusCode: 400,
            statusMessage: 'Latitude, longitude, date and weather_provider must be strings',
        });
    }

    if (!validProviders.includes(weather_provider)) {
        return createError({
            statusCode: 400,
            statusMessage: 'weather_provider must be a valid provider',
        });
    }

    const weatherProvider = getWeatherProvider(weather_provider);

    try {
        const humidity = await weatherProvider.getHumidity(lat, lon, date);
        const message = getHumidityWarning(humidity);

        return {
            date: new Date().toISOString().split('T')[0],
            humidity: `${humidity}%`,
            message,
        };
    } catch (error) {
        return createError({
            statusCode: 500,
            statusMessage: 'Error getting humidity',
        });
    }
});