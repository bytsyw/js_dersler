

var model = [
    {
        "img":"img/audi.jpg",
        "author":"BYT",
        "description":"description",
        "des":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
        "topic":"Car",
        "title":"Audi",
    },
    {
        "img":"img/dodgeChalenger.jpg",
        "author":"BYT",
        "description":"description",
        "des":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
        "topic":"Car",
        "title":"Dodge",
    },
    {
        "img":"img/ferrari.jpg",
        "author":"BYT",
        "des":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
        "description":"description",
        "topic":"Car",
        "title":"ferrari",
    },
    {
        "img":"img/fordMustang.jpg",
        "description":"description",
        "des":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?",
        "topic":"Car",
        "title":"Ford",
    }
]


var div = document.getElementById('Thumbnail');
var div1 = document.getElementById('List');

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
let baseList = `<div class="item">
<img src="${models.img}">
<div class="content">
    <div class="author">${models.author}</div>
    <div class="title">${models.title}</div>
    <div class="topic">${models.topic}</div>
    <div class="des">${models.des}</div>
    <div class="buttons">
        <button>SEE MORE</button>
        <button>SUBSCRIBE</button>
    </div>
</div>
</div>`
div.insertAdjacentHTML('beforeend',list);
div1.insertAdjacentHTML('beforeend',baseList);
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