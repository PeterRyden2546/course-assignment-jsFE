"use strict"
let readButton;
let clearAllArticle;
let observer;
let btn;
let modal;
let click;
let title;
let articleUrl;
let news;
let publishedTime;
let liDropdown;
let dropdown;
let dropdownMenu;
let dateKey;
let cuont = 0;

clearAllArticle = document.getElementById('clearAllArticle');
dropdown = document.getElementById('dropdown-toggle');
dropdownMenu  = document.getElementById('dropdown-menu');

//remove data for localstorage and delete saved articale
function clearLocLStorage() {
    if (confirm("Are your sure? That will delete all saved articles.")) {
        liDropdown.remove();
        localStorage.clear();
    }

    location.reload();
    cuont = 0;
}

clearAllArticle.addEventListener('click', clearLocLStorage);
dropdown.addEventListener('click', addItem);

observer = new MutationObserver(entries => {
    if(document.getElementsByClassName('btnMore')
    ,document.getElementsByClassName('modal')
    ,document.getElementsByClassName('card-title')
    ,document.getElementsByClassName('card-link')
    ,document.getElementsByClassName('item4')){
    btn = document.getElementsByClassName('btnMore');
    modal = document.getElementsByClassName('modal');
    title = document.getElementsByClassName('card-title');
    articleUrl = document.getElementsByClassName('card-link');
    publishedTime = document.getElementsByClassName('item4');
            observer.disconnect();

    for(let i = 0; i < btn.length; i++){ 
        btn[i].addEventListener('click', modal = ()=>{
//function for building object to store to localstorage
            function click(){
                news = {
                    headline: `${title[i].innerHTML}`,
                    link: `${articleUrl[i].href}`,
                    date: `${publishedTime[i].innerHTML}`
                }
                localStorage.setItem(publishedTime[i].innerHTML, JSON.stringify(news));
                location.reload();
            }

            if(document.getElementsByClassName('readButton')){
            readButton = document.getElementsByClassName('readButton');

            if(readButton.length > 0){
                for(let i = 0; i < readButton.length; i++){
                    readButton[i].addEventListener('click', click)     
                }
            }
            }
        })
    }
    }   
})
//addning all contanit for localstorage to dropdown menu
function addItem(){
    if(cuont === 0){
    if (localStorage.length !== 0) {
        Object.keys(localStorage).forEach(function (key) {
            dateKey = localStorage.getItem(key);
            news = JSON.parse(dateKey);
            liDropdown = document.createElement('li');
            liDropdown.setAttribute('class', 'liDropdown');
            liDropdown.innerHTML =`<a href="${news.link}" class="aDropdown">${news.headline}</a><br>
            <p class="date">${news.date}</p>
            <button type="button" class="btn-close btnDelete" aria-label="Close"></button>`;
            dropdownMenu.appendChild(liDropdown);
            cuont++ 
        }); 
        }
        }
    }
    observer.observe(container, {attributes: true, childList: true, subtree: true })
