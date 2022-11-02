"use strict";
const urlApi = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=lu84MhMhuGMXAycirATqgGz3iTmGOv8g';

let data = fetch(urlApi)
  .then(response => response.json())
  .then(data => {
    data.results.forEach(element => {
   if(element.multimedia == null){
   element.multimedia = [{url: 'https://upload.wikimedia.org/wikipedia/commons/2/26/512pxIcon-sunset_photo_not_found.png'}]; 
 }
 console.log(element);
 let title = element.title;
 let img = element.multimedia[0].url;
 let section = element.section;
 let subsection = element.subsection;
 let publishedTime = element.published_date;
 let updatedTime = element.updated_date;
 let articleUrl = element.url;
 let moreInfo = element.abstract;
 let reporter = element.byline;
 });
});