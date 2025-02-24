export function getHumidityWarning(humidity: number) {
    if (humidity < 20) {
      return 'Danger. Humidity is too low for cultivation.';
    } else if (humidity >= 20 && humidity <= 60) {
      return 'Humidity is suitable for cultivation.';
    } else {
      return 'Warning: Humidity is too high for cultivation.';
    }
  }
  