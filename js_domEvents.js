                    //single-elements

// let sonuc;

// sonuc = document.getElementById("title");
// sonuc = document.getElementById("title").className;
// sonuc = document.getElementById("title").classList;

// document.getElementById("title").style.fontSize ="33px";
// document.getElementById("title").style.color ="Red";   // Burada getElementById ile ilgili elementin id sini kullanarak stillerine erişebiliyoruz böylelikle script üzerinden de sayfa içerisinde değişiklikler yapabiliyoruz

// document.getElementById("title").innerText ="TodoApp 2";
// document.getElementById("title").innerHTML ="<p>TodoApp 2</p>"; // innerhtml nin innertext ten farkı içerisinde html kodları kullanabiliyoruz ilgili id nin 

// sonuc = document.querySelector("#title"); 
// sonuc = document.querySelector(".card-header"); 
// sonuc = document.querySelector("div");     // burada querySelector ile hem id ye  hemde classlara erişebiliyoruz aynı css gibi özellik verebiliyoruz 

// sonuc = document.querySelector("li");     
// sonuc = document.querySelector("li:first-child");
// sonuc = document.querySelector("li:last-child");
// sonuc = document.querySelector("li:nth-child(2)");

// console.log(sonuc);



                        // Multiple Elements

// let sonuc;

// sonuc = document.getElementsByClassName("task")[0];   
// sonuc = document.getElementsByClassName("task")[1];

// taskList = document.getElementsByClassName("task");
// ul = document.getElementById("task-list");
// taskList = ul.getElementsByTagName("li");

// taskList = document.querySelectorAll("#task-list li"); // Burada bu etiket ile yukarıda iki işlem yapmak yerine tek satırda css kullanır gibi yazarak kapsayıcı yapabiliyoruz

// for(let i = 0;i<taskList.length;i++){
//     console.log(taskList[i])
// }

// for(let task of taskList){
//     task.style.color="red"
//     task.style.fontSize="20px"
//     console.log(task)
// }

// console.log(sonuc); 

                        //travercing elements

// ul = document.getElementById("task-list");


// sonuc = ul.children;
// sonuc = ul.children[0].children[0].children[0].checked=true; // Burada elementlerin çocukları arasında gezinip bilgi alabiliyoruz veya bilgi atayabiliyoruz

// sonuc = ul.firstElementChild; //ul deki task-list elemanlarından ilk elemente erişim sağlayabiliyoruz last ile de son elemente erişim sağlıyoruz
// sonuc = ul.lastElementChild;

// sonuc = document.getElementById("title").parentElement; // ana elemente erişim sağlıyoruz
// sonuc = document.querySelector(".task").nextElementSibling;   // Sonraki elementlere geçiş yapabiliyoruz böylelikle diğer elementler üzerinde de kontrolümüz var oluyor

// console.log(sonuc)
 