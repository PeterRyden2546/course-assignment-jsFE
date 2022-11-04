"use strict";

let container = document.getElementById('container');
let output = "";
const urlApi = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=lu84MhMhuGMXAycirATqgGz3iTmGOv8g';
let cuonter = 0;
let id = 0;
let title;
let img;
let section;
let subsection;
let publishedTime;
let updatedTime;
let articleUrl;
let moreInfo;
let reporter;
let data = fetch(urlApi)
  .then(response => response.json())
  .then(data => {
    data.results.forEach(element => {
      id++
    if(element.multimedia == null){
   element.multimedia = [{url: 'https://upload.wikimedia.org/wikipedia/commons/2/26/512pxIcon-sunset_photo_not_found.png'}]; 
 }
 if(element.title == ""){
  element.title = "Headline is comming soon!"; 
}
 //console.log(element);
 title = element.title;
 img = element.multimedia[0].url;
 section = element.section;
 subsection = element.subsection;
 publishedTime = element.published_date;
 updatedTime = element.updated_date;
 articleUrl = element.url;
 moreInfo = element.abstract;
 reporter = element.byline;

if(cuonter === 0){

 output += `
<div class="row">
<div class="paddning-card col-lg-3 col-sm-6 col-12">
<div class="card">
<img src=" ${img}" class="card-img-top" alt="${title}">
<div class="card-body">
      <h5 class="card-title" id="card-title${id}">${title}</h5>
  </div>  
    <ul class="list-group list-group-flush">
      <li class="list-group-item item1">${reporter}</li>
      <li class="list-group-item item2">Section: ${section}</li>
      <li class="list-group-item item3">Subsection: ${subsection}</li>
      <li class="list-group-item item4">Published time <br>${publishedTime}</li>
    </ul>
  <div class="card-body">
  <div class="button-paddning">
    <a href="${articleUrl}" class="card-link btn">Read now</a>
  </div>
  <div class="button-paddning">
    <button class="btn" id="btn${id}">more info</button>
  </div>
  <div class="moreInfo">${moreInfo}</div>
    <div class="updatedTime">${updatedTime}</div>
  </div>
</div>
</div>`;
container.innerHTML = output;
cuonter++;
}
else{
  if(cuonter === 3){
  output += `
  <div class="paddning-card col-lg-3 col-sm-6 col-12">
  <div class="card"> 
  <img src=" ${img}" class="card-img-top" alt="${title}">
  <div class="card-body">
  <h5 class="card-title" id="card-title${id}">${title}</h5>
</div> 
      <ul class="list-group list-group-flush">
        <li class="list-group-item item1">${reporter}</li>
        <li class="list-group-item item2">Section: ${section}</li>
        <li class="list-group-item item3">Subsection: ${subsection}</li>
        <li class="list-group-item item4">Published time <br>${publishedTime}</li>
      </ul>
    <div class="card-body">
    <div class="button-paddning">
    <a href="${articleUrl}" class="card-link btn">Read now</a>
  </div>
  <div class="button-paddning">
    <button class="btn" id="btn${id}">more info</button>
  </div>
  <div class="moreInfo">${moreInfo}</div>
    <div class="updatedTime">${updatedTime}</div>
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
    <img src=" ${img}" class="card-img-top" alt="${title}">
    <div class="card-body">
    <h5 class="card-title" id="card-title${id}">${title}</h5>
    </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item item1">${reporter}</li>
          <li class="list-group-item item2">Section: ${section}</li>
          <li class="list-group-item item3">Subsection: ${subsection}</li>
          <li class="list-group-item item4">Published time <br>${publishedTime}</li>
        </ul>
      <div class="card-body">
      <div class="button-paddning">
      <a href="${articleUrl}" class="card-link btn">Read now</a>
    </div>
    <div class="button-paddning">
      <button class="btn" id="btn${id}">more info</button>
    </div>
    <div class="moreInfo">${moreInfo}</div>
    <div class="updatedTime">${updatedTime}</div>
      </div>
    </div>
    </div>`;
    container.innerHTML = output;
    cuonter++;
  }
}
 });
});