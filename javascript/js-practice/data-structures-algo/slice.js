let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']

console.log(weatherConditions);
console.log(todaysWeather);


function forecast(arr) {
  // Only change code below this line
    res = arr.slice(2,4);
console.log(res)

  return arr;
}

// Only change code above this line
forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']);