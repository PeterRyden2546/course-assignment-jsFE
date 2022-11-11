"use strict"

let btnDelete;
let dropdown;
let observer;
let readButton;
let toggle;
let nav;
let liDropdown;
let date;
let dateKey;
let news;


function removeLocalstorage(){
    Object.keys(localStorage).forEach(function (key) {
        dateKey = localStorage.getItem(key);
        news = JSON.parse(dateKey);
        console.log(dateKey);
        console.log(news);
        console.log(date[1].innerText);
        console.log(key);
        if(key === date){
        localStorage.removeItem(news);
        }
})
}

nav = document.getElementById('nav');
dropdown = document.getElementById('dropdown-menu')
toggle = document.getElementById('dropdown-toggle');
        observer = new MutationObserver(entries => {
        if(document.getElementsByClassName('liDropdown')
        ,document.getElementsByClassName('btnDelete')
        ,document.getElementsByClassName('date')){
        liDropdown = document.getElementsByClassName('liDropdown');
        btnDelete = document.getElementsByClassName('btnDelete');
        date = document.getElementsByClassName('date');
        observer.disconnect();
        console.log(date);
        
//function remove one item for localstorage and same item for dropdown menu
        function deleteArticale() {
            for(let i = 0; i < liDropdown.length; i++){

            if (confirm("Are your sure? That will delete saved articles.")) {
                
                Object.keys(localStorage).forEach(function (key) {
                    dateKey = localStorage.getItem(key);
                    news = JSON.parse(dateKey);
                    console.log(news);
                liDropdown[i].remove();
                key[i] = localStorage.removeItem(key);
            })
            }
        }
        }
    
            if(btnDelete.length > 0){
                    for(let i = 0; i < btnDelete.length; i++){
                
                    btnDelete[i].addEventListener('click', deleteArticale);
                }
            }
   }
});
observer.observe(nav, {attributes: true, childList: true, subtree: true })
