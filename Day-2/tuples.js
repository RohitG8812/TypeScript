"use strict";
// type Details = readonly [string, number, boolean]; //? this is tuples
const WeatherData = [
    ["Mumbai", 10, "Cold"],
    ["Delhi", 2, "Extreme Cold"],
    ["JK", -3, "Very Extreme Cold"],
];
const displayWeather = (weatherData) => {
    return weatherData.map((weather, i) => {
        let [city, temp, weatherCondition] = weather;
        return `${city} has a ${weatherCondition} weather with ${temp}℃ temperature`;
    });
};
console.log(displayWeather(WeatherData));
//? output
// [
//   "Mumbai has a Cold weather with 10℃ temperature",
//   "Delhi has a Extreme Cold weather with 2℃ temperature",
//   "JK has a Very Extreme Cold weather with -3℃ temperature",
// ];
