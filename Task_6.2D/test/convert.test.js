const { celsiusToFahrenheit, fahrenheitToCelsius } = require('./convert');

test('Convert 0°C to 32°F', () => {
  expect(celsiusToFahrenheit(0)).toBe(32);
});

test('Convert 100°C to 212°F', () => {
  expect(celsiusToFahrenheit(100)).toBe(212);
});

test('Convert 32°F to 0°C', () => {
  expect(fahrenheitToCelsius(32)).toBeCloseTo(0);
});

test('Convert 212°F to 100°C', () => {
  expect(fahrenheitToCelsius(212)).toBeCloseTo(100);
});
