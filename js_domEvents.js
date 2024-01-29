let sonuc;

sonuc = document.getElementById("title");
sonuc = document.getElementById("title").className;
sonuc = document.getElementById("title").classList;

document.getElementById("title").style.fontSize ="33px";
document.getElementById("title").style.color ="Red";   // Burada getElementById ile ilgili elementin id sini kullanarak stillerine erişebiliyoruz böylelikle script üzerinden de sayfa içerisinde değişiklikler yapabiliyoruz

document.getElementById("title").innerText ="TodoApp 2";
document.getElementById("title").innerHTML ="<p>TodoApp 2</p>"; // innerhtml nin innertext ten farkı içerisinde html kodları kullanabiliyoruz ilgili id nin 

sonuc = document.querySelector("#title"); 
sonuc = document.querySelector(".card-header"); 
sonuc = document.querySelector("div");     // burada querySelector ile hem id ye  hemde classlara erişebiliyoruz aynı css gibi özellik verebiliyoruz 

sonuc = document.querySelector("li");     
sonuc = document.querySelector("li:first-child");
sonuc = document.querySelector("li:last-child");
sonuc = document.querySelector("li:nth-child(2)");

console.log(sonuc);