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
    }
]

var index = 0;
document.querySelector(".card-title").textContent = models[index].name;

document.querySelector(".card-img-top").setAttribute('src',models[index].image);
document.querySelector(".card-link").setAttribute('href',models[index].link);