

var model = [
    {
        "img":"img/audi.jpg",
        "author":"BYT",
        "description":"description",
        "title":"Audi",
    },
    {
        "img":"img/dodgeChalenger.jpg",
        "author":"BYT",
        "description":"description",
        "title":"Dodge",
    },
    {
        "img":"img/ferrari.jpg",
        "author":"BYT",
        "description":"description",
        "title":"ferrari",
    },
    {
        "img":"img/fordMustang.jpg",
        "description":"description",
        "title":"Ford",
    }
]

var div = document.getElementById('Thumbnail');

for(let models of model){
    let list = `
    <div class="item">
    <img src="${models.img}">
    <div class="content">
        <div class="title">
            ${models.title}
        </div>
        <div class="description">
            ${models.description}
        </div>
    </div>
</div>`
div.insertAdjacentHTML('beforeend',list);
}
console.log(div)



//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}