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

//Diziler kullanarak buradaki listeyi dizide kaç adet eleman var ise ona göre arttırıyoruz.

// let sonuc;

// let gorevListesi = ["Görev 1","Görev 2", "Görev 3","Görev 4"]
// ul = document.getElementById("task-list")

// let count = ul.children.length;

// for(let index in gorevListesi){
//     let li =`<li class="task list-group-item">
//                  <div class="form-check">
//                     <input type="checkbox" name="" id="${index + 1}" class="form-check-input">
//                     <label for="${index + 1}" class="form-check-label">${gorevListesi[index]}</label>
//                  </div>
//             </li>`;

//         ul.insertAdjacentHTML("beforeend",li);
// }

//create ile obje üzerinde kullanım

// let gorevListesi = [
//     {"id":1,"gorevAdi":"Görev 1"},
//     {"id":2,"gorevAdi":"Görev 2"},
//     {"id":3,"gorevAdi":"Görev 3"},
//     {"id":4,"gorevAdi":"Görev 4"}

// ];

// ul = document.getElementById("task-list");

// for(let gorev of gorevListesi){
//     let li = `<li class="task list-group-item">
//                     <div class="form-check">
//                         <input type="checkbox" name="" id="${gorev.id}" class="form-check-input">
//                         <label for="${gorev.id}" class="form-check-label">${gorev.gorevAdi}</label>
//                     </div>
//                 </li>`;
//     ul.insertAdjacentHTML("beforeend",li);
// }

//Update kullanımı

// let gorevListesi = [
//     {"id":1,"gorevAdi":"Görev 1"},
//     {"id":2,"gorevAdi":"Görev 2"},
//     {"id":3,"gorevAdi":"Görev 3"},
//     {"id":4,"gorevAdi":"Görev 4"}

// ];

// ul = document.getElementById("task-list");

// for(let gorev of gorevListesi){
//     let li = `<li class="task list-group-item">
//                     <div class="form-check">
//                         <input type="checkbox" name="" id="${gorev.id}" class="form-check-input">
//                         <label for="${gorev.id}" class="form-check-label">${gorev.gorevAdi}</label>
//                     </div>
//                 </li>`;
//     ul.insertAdjacentHTML("beforeend",li);
// }

// let sonuc;
// document.querySelector("#task-list").parentElement.remove();
//  document.querySelector("#task-list").children[0].remove();
//  document.querySelector("#task-list").children[1].remove();

// document.querySelector("#task-list").removeAttribute("class"); //class attributune sahip verileri siler
// document.querySelector("#task-list").children[1].removeAttribute("class"); // ilgili id nin 1. childindeki class ı siler
// sonuc = document.querySelector("#task-list").children[1].getAttribute("class"); // id nin ilgili childinin classına sahip veriyi getirir
// document.querySelector("#task-list").children[1].setAttribute("class","aaaa");// classa yeni özellik Ekleme yapar
// sonuc = document.querySelector("#task-list").children[1].classList[1];class ı listeler
// document.querySelector("#task-list").children[1].classList.add("bg-danger"); // classı günceller yeni bir class ekler
// document.querySelector("#task-list").children[1].classList.remove("bg-danger");
// document.querySelector("#task-list").children[1].classList.contains("bg-danger"); // Bu özelliğe sahip bir class var mı onu kontrol eder Bu bilgi bize true mu false mu onu döner
// console.log(sonuc);

// let gorevListesi = [
//     {"id":1,"gorevAdi":"Görev 1"},
//     {"id":2,"gorevAdi":"Görev 2"},
//     {"id":3,"gorevAdi":"Görev 3"},
//     {"id":4,"gorevAdi":"Görev 4"}

// ];

// ul = document.getElementById("task-list");

// for(let gorev of gorevListesi){
//     let li = `<li class="task list-group-item">
//                     <div class="form-check">
//                         <input type="checkbox" name="" id="${gorev.id}" class="form-check-input">
//                         <label for="${gorev.id}" class="form-check-label">${gorev.gorevAdi}</label>
//                     </div>
//                 </li>`;
//     ul.insertAdjacentHTML("beforeend",li);
// }

// document.querySelector("#btnAddNewTask").addEventListener("click",newTask); // Burada queryselector ile ilgili id nin butonuna gidip tıklandığında şu fonksiyonu çalıştırıp bize konsola click event yazdırdık. Butonumuzun type si button olunca sayfa yenilenmez ancak submit olunca her tıkladığımızda buton bir veri gönderiyormuş gibi her seferinde sayfa yenilenir bunu engellemek için fonksiyona bir even gönderiyoruz ve bu eventin metodundan davranışını zorunlu durduruyoruz.

// document.querySelector("#btnClear").addEventListener("click",function(event){
//         console.log("Event Clear")
//         event.preventDefault();
//         });

// function newTask(event){
// console.log("click Event: Add")
// console.log(event.target)
// event.target.classList.add("btn-lg")
// event.preventDefault();
// } // Burada eventin özelliklerine erişim sağladığımızda ne oluyor onu öğrendik burada fonksiyonu çağırdığımız yerdeki class a btn-lg veya herhangi bir class özelliği verirsek o ekleniyor


            // Listeye eleman nasıl eklenir 


// let gorevListesi = [
//   { id: 1, gorevAdi: "Görev 1" },
//   { id: 2, gorevAdi: "Görev 2" },
//   { id: 3, gorevAdi: "Görev 3" },
//   { id: 4, gorevAdi: "Görev 4" },
// ];
// displayTask();
// function displayTask() {
//   ul = document.getElementById("task-list");
//   ul.innerHTML = "";
//   for (let gorev of gorevListesi) {
//     let li = `<li class="task list-group-item">
//                     <div class="form-check">
//                         <input type="checkbox" name="" id="${gorev.id}" class="form-check-input">
//                         <label for="${gorev.id}" class="form-check-label">${gorev.gorevAdi}</label>
//                     </div>
//                 </li>`;
//     ul.insertAdjacentHTML("beforeend", li);
//   }
// }

// document.querySelector("#btnAddNewTask").addEventListener("click", newTask);
// document.querySelector("btnNewTask").addEventListener("keypress",function(){
//     if(event.key == "Enter"){
//         document.getElementById("#btnAddNewTask").click();
//     }
// })

// function newTask(event) {
//   let taskInput = document.querySelector("#txtTaskName");
//   if (taskInput.value == "") {
//     alert("Görev giriniz");
//   } else {
//     gorevListesi.push({
//       id: gorevListesi.length + 1,
//       gorevAdi: taskInput.value,
//     });
//     taskInput.value ="";
//     displayTask();
//   }

//   event.preventDefault();
// }