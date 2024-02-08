const models = [
    {
        "name": "Daccia Duster",
        "image": "img/dac1.png",
        "link":"https://www.dacia.com.tr/",
    },
    {
        "name": "Renault Clio",
        "image": "img/ren1.jpg",
        "link":"https://www.renault.com.tr",
    },
    {
        "name": "Pagani Zonda",
        "image": "img/pagani-zonda.jpg",
        "link":"https://www.pagani.com",
    },
    {
        "name": "Wolkswagen Transporter",
        "image": "img/porterww.jpg",
        "link":"https://www.vw.com.tr",
    }
]

var index = 0;

var slaytCount = models.length;
var interval;
var settings = {
    duration:'1000',
    random: true
}
init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener("click",function(){
    index--;
    showSlide(index)
    console.log(index)
});

document.querySelector('.fa-arrow-circle-right').addEventListener("click",function(){
    index++;
    showSlide(index)
    console.log(index)
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings)
    })
})

function init(settings){
    
    var prev;

   interval = setInterval(function(){

        if(settings.random){
            
        do{

            index = Math.floor(Math.random() * slaytCount);
        }while(index == prev)
        prev = index;
        }
        else{
            if(slaytCount == index+1){
                index=-1;
            }
            showSlide(index);
            index++;

        }
        showSlide(index);
    },settings.duration)
}


function showSlide(i){
    index = i;

    if(i<0){
        index = slaytCount-1;
    }
    if(i>=slaytCount){
        index = 0;
    }

    document.querySelector(".card-title").textContent = models[index].name;
    document.querySelector(".card-img-top").setAttribute('src',models[index].image);
    document.querySelector(".card-link").setAttribute('href',models[index].link);
}



