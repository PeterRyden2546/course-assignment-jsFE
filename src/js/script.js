"use strict";
//import * as bootstrap from 'bootstrap';
//window.bootstrap = bootstrap;

let container = document.getElementById('container');
let output = "";

const urlApi = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=lu84MhMhuGMXAycirATqgGz3iTmGOv8g';

let cuonter = 0;

let data = fetch(urlApi)
  .then(response => response.json())
  .then(data => {
    data.results.forEach(element => {
    if(element.multimedia == null){
   element.multimedia = [{url: 'https://upload.wikimedia.org/wikipedia/commons/2/26/512pxIcon-sunset_photo_not_found.png'}]; 
 }
 //console.log(element);
 let title = element.title;
 let img = element.multimedia[0].url;
 let section = element.section;
 let subsection = element.subsection;
 let publishedTime = element.published_date;
 let updatedTime = element.updated_date;
 let articleUrl = element.url;
 let moreInfo = element.abstract;
 let reporter = element.byline;

if(cuonter === 0){

 output += `
<div class="row">
<div class="paddning-card col-lg-3 col-sm-6 col-12">
<div class="card">
<img src=" ${img}" class="card-img-top" alt="...">
<div class="card-body">
      <h5 class="card-title">${title}</h5>
  </div>  
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${reporter}</li>
      <li class="list-group-item">Section: ${section}</li>
      <li class="list-group-item">Subsection: ${subsection}</li>
      <li class="list-group-item">Published time <br>${publishedTime}</li>
    </ul>
  <div class="card-body">
  <div class="button-paddning">
    <a href="${articleUrl}" class="card-link">Read now</a>
  </div>
  <div class="button-paddning">
    <button class="btn">more info</button>
  </div>
  </div>
</div>
</div>`;
container.innerHTML = output;
cuonter++;
console.log(cuonter);
}
else{
  if(cuonter === 3){
  output += `
  <div class="paddning-card col-lg-3 col-sm-6 col-12">
  <div class="card"> 
  <img src=" ${img}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${title}</h5>
</div> 
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${reporter}</li>
        <li class="list-group-item">Section: ${section}</li>
        <li class="list-group-item">Subsection: ${subsection}</li>
        <li class="list-group-item">Published time <br>${publishedTime}</li>
      </ul>
    <div class="card-body">
    <div class="button-paddning">
    <a href="${articleUrl}" class="card-link">Read now</a>
  </div>
  <div class="button-paddning">
    <button class="btn">more info</button>
  </div>
    </div>
  </div>
  </div>
  </div>`;
  container.innerHTML = output;
  cuonter++;
    cuonter = 0;
  }
  else{
    output += `
    <div class="paddning-card col-lg-3 col-sm-6 col-12">
    <div class="card">  
    <img src=" ${img}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${title}</h5>
    </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${reporter}</li>
          <li class="list-group-item">Section: ${section}</li>
          <li class="list-group-item">Subsection: ${subsection}</li>
          <li class="list-group-item">Published time <br>${publishedTime}</li>
        </ul>
      <div class="card-body">
      <div class="button-paddning">
      <a href="${articleUrl}" class="card-link">Read now</a>
    </div>
    <div class="button-paddning">
      <button class="btn">more info</button>
    </div>
      </div>
    </div>
    </div>`;
    container.innerHTML = output;
    cuonter++;
  }
}

 });
});
