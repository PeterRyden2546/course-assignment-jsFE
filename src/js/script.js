"use strict";
const urlApi = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=lu84MhMhuGMXAycirATqgGz3iTmGOv8g';

let data = fetch(urlApi)
  .then(response => response.json())
  .then(data => console.log(data))