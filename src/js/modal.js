"use strict"
//console.log(data);
let btn1;
let showModal;
let modalWrap;
let title;
let img;
let section;
let subsection;
let publishedTime;
let articleUrl;
let reporter;
let moreInfo;
let updatedTime;
let observer = new MutationObserver(entries => {

    if(document.getElementsByClassName('btn')
        ,document.getElementsByClassName('card-title')
        ,document.getElementsByClassName('card-img-top')
        ,document.getElementsByClassName('item2')
        ,document.getElementsByClassName('item3')
        ,document.getElementsByClassName('item4')
        ,document.getElementsByClassName('card-link')
        ,document.getElementsByClassName('item1')
        ,document.getElementsByClassName('moreInfo')
        ,document.getElementsByClassName('updatedTime'))
        {
        moreInfo = document.getElementsByClassName('moreInfo');
        updatedTime = document.getElementsByClassName('updatedTime');
        btn1 = document.getElementsByClassName('btn');
        title = document.getElementsByClassName('card-title');
        img = document.getElementsByClassName('card-img-top');
        section  = document.getElementsByClassName('item2');
        subsection = document.getElementsByClassName('item3');
        publishedTime = document.getElementsByClassName('item4');
        articleUrl = document.getElementsByClassName('card-link');
        reporter = document.getElementsByClassName('item1');

        console.log(articleUrl[5].href);

        observer.disconnect();

    for(let i = 0; i < entries.length; i++){
        btn1[i].addEventListener('click', showModal = ()=>{
            modalWrap = document.createElement('div');
            modalWrap.innerHTML = `<div class="modal" tabindex="-1">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">${title[i].innerHTML}</h5>
                </div>
                <div class="card">
                <img src=" ${img[i].currentSrc}" class="card-img-top" alt="${title}">
                <div class="modal-body">
                  <p>${moreInfo[i].innerHTML}</p>
                </div>
                <div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item item1">${reporter[i].innerHTML}</li>
                    <li class="list-group-item item2">${section[i].innerHTML}</li>
                    <li class="list-group-item item3">${subsection[i].innerHTML}</li>
                    <li class="list-group-item item4">${publishedTime[i].innerHTML}</li>
                    <li class="list-group-item item4">${updatedTime[i].innerHTML}</li>
              </ul>
                </div>
                <div>
                    <form>
                        <label for="comment" class="headlineForm">${title[i].innerHTML}</label><br><br>
                        <input type="text" id="comment" name="haedline" value=><br><br>
                        <textarea id="fname" name="fname" rows="10" cols="40" value=></textarea>
                    </form>
                </div>
                </div>
                <div class="modal-footer button-paddning">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Post comment</button>
                  <button type="button" class="btn btn-primary">Article to read later</button>
                  <a href="${articleUrl[i].href}" class="card-link btn btn-primary">Read now</a>
                </div>
              </div>
            </div>
          </div>`;
          document.body.append(modalWrap);
        
          const modal = new bootstrap.Modal(modalWrap.querySelector('.modal'))
          modal.show();
        })
    }
    }
})


observer.observe(container, {attributes: true, childList: true, subtree: true })