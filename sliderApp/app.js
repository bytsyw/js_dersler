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
showSlide(index)

var slaytCount = models.length;

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



