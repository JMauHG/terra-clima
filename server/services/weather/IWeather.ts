export default interface IWeather {
    getHumidity(lat: string, lon: string, date: string): Promise<any>;
}