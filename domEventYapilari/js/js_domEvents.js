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

//delete fonksiyonunun kodları

// "use strict";

// let gorevListesi = [
//     {"id": 1, "gorevAdi": "Görev 1"},
//     {"id": 2, "gorevAdi": "Görev 2"},
//     {"id": 7, "gorevAdi": "Görev 3"},
//     {"id": 4, "gorevAdi": "Görev 4"},
// ];

// displayTasks();

// function displayTasks() {
//     let ul = document.getElementById("task-list");
//     ul.innerHTML = "";

//     for(let gorev of gorevListesi) {

//         let li = `
//             <li class="task list-group-item">
//                 <div class="form-check">
//                     <input type="checkbox" id="${gorev.id}" class="form-check-input">
//                     <label for="${gorev.id}" class="form-check-label">${gorev.gorevAdi}</label>
//                 </div>
//                 <div class="dropdown">
//                     <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                         <i class="fa-solid fa-ellipsis"></i>
//                     </button>
//                     <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                         <li><a onclick="deleteTask(${gorev.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Sil</a></li>
//                         <li><a class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Düzenle</a></li>
//                     </ul>
//                 </div>
//             </li>
//         `;

//         ul.insertAdjacentHTML("beforeend", li);

//     }
// }

// document.querySelector("#btnAddNewTask").addEventListener("click", newTask);
// document.querySelector("#btnAddNewTask").addEventListener("keypress", function(){
//     if (event.key == "Enter") {
//         document.getElementById("btnAddNewTask").click();
//     }
// });

// function newTask(event) {

//     let taskInput = document.querySelector("#txtTaskName");

//     if(taskInput.value == "") {
//         alert("görev girmelisiniz");
//     } else {
//         gorevListesi.push({"id": gorevListesi.length + 1, "gorevAdi": taskInput.value});
//         taskInput.value = "";
//         displayTasks();
//     }

//     event.preventDefault();
// }

// function deleteTask(id) {

//     let deletedId;

//     for(let index in gorevListesi) {
//         if(gorevListesi[index].id == id) {
//             deletedId = index;
//         }
//     }

// deletedId = gorevListesi.findIndex(function(gorev) {
//     return gorev.id == id;
// });

// arrow function
// deletedId = gorevListesi.findIndex(gorev => gorev.id == id);

//     gorevListesi.splice(deletedId, 1);
//     displayTasks();
// }

// Update fonksiyonunun kodları

// "use strict";

// let gorevListesi = [
//     {"id": 1, "gorevAdi": "Görev 1"},
//     {"id": 2, "gorevAdi": "Görev 2"},
//     {"id": 7, "gorevAdi": "Görev 3"},
//     {"id": 4, "gorevAdi": "Görev 4"},
// ];

// let editId;
// let isEditTask = false;
// let taskInput = document.querySelector("#txtTaskName");

// displayTasks();

// function displayTasks() {
//     let ul = document.getElementById("task-list");
//     ul.innerHTML = "";

//     for(let gorev of gorevListesi) {

//         let li = `
//             <li class="task list-group-item">
//                 <div class="form-check">
//                     <input type="checkbox" id="${gorev.id}" class="form-check-input">
//                     <label for="${gorev.id}" class="form-check-label">${gorev.gorevAdi}</label>
//                 </div>
//                 <div class="dropdown">
//                     <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                         <i class="fa-solid fa-ellipsis"></i>
//                     </button>
//                     <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                         <li><a onclick="deleteTask(${gorev.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Sil</a></li>
//                         <li><a onclick='editTask(${gorev.id}, "${gorev.gorevAdi}")' class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Düzenle</a></li>
//                     </ul>
//                 </div>
//             </li>
//         `;

//         ul.insertAdjacentHTML("beforeend", li);

//     }
// }

// document.querySelector("#btnAddNewTask").addEventListener("click", newTask);
// document.querySelector("#btnAddNewTask").addEventListener("keypress", function(){
//     if (event.key == "Enter") {
//         document.getElementById("btnAddNewTask").click();
//     }
// });

// function newTask(event) {

//     if(taskInput.value == "") {
//         alert("görev girmelisiniz");
//     } else {
//         if(!isEditTask){
//         gorevListesi.push({"id": gorevListesi.length + 1, "gorevAdi": taskInput.value});
//         }
//         else{
//             for(let gorev of gorevListesi){
//                 if(gorev.id==editId){
//                     gorev.gorevAdi =taskInput.value;
//                 }
//                 isEditTask=false;
//             }
//         }
//         taskInput.value = "";
//         displayTasks();
//     }

//     event.preventDefault();
// }

// function deleteTask(id) {

//     let deletedId;

//     for(let index in gorevListesi) {
//         if(gorevListesi[index].id == id) {
//             deletedId = index;
//         }
//     }
//     gorevListesi.splice(deletedId, 1);
//     displayTasks();
// }
// function editTask(taskId,taskName){
//     editId =taskId;
//     isEditTask =true;
//     taskInput.value =taskName;
//     taskInput.focus();
//     taskInput.classList.add("active");
// }

//Tüm hepsini silme

// "use strict";

// let gorevListesi = [
//     {"id": 1, "gorevAdi": "Görev 1"},
//     {"id": 2, "gorevAdi": "Görev 2"},
//     {"id": 7, "gorevAdi": "Görev 3"},
//     {"id": 4, "gorevAdi": "Görev 4"},
// ];

// let editId;
// let isEditTask = false;
// const taskInput = document.querySelector("#txtTaskName");
// const btnClear = document.querySelector("#btnClear");

// displayTasks();

// function displayTasks() {
//     let ul = document.getElementById("task-list");
//     ul.innerHTML = "";

//     if(gorevListesi.length == 0){
//         ul.innerHTML = "<p class='p-3 m-0'>Görev listeniz boş</p>"
//     }
//     else{

//     for(let gorev of gorevListesi) {

//         let li = `
//             <li class="task list-group-item">
//                 <div class="form-check">
//                     <input type="checkbox" id="${gorev.id}" class="form-check-input">
//                     <label for="${gorev.id}" class="form-check-label">${gorev.gorevAdi}</label>
//                 </div>
//                 <div class="dropdown">
//                     <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                         <i class="fa-solid fa-ellipsis"></i>
//                     </button>
//                     <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                         <li><a onclick="deleteTask(${gorev.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Sil</a></li>
//                         <li><a onclick='editTask(${gorev.id}, "${gorev.gorevAdi}")' class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Düzenle</a></li>
//                     </ul>
//                 </div>
//             </li>
//         `;

//         ul.insertAdjacentHTML("beforeend", li);

//     }
// }
// }

// document.querySelector("#btnAddNewTask").addEventListener("click", newTask);
// document.querySelector("#btnAddNewTask").addEventListener("keypress", function(){
//     if (event.key == "Enter") {
//         document.getElementById("btnAddNewTask").click();
//     }
// });

// function newTask(event) {

//     if(taskInput.value == "") {
//         alert("görev girmelisiniz");
//     } else {
//         if(!isEditTask){
//         gorevListesi.push({"id": gorevListesi.length + 1, "gorevAdi": taskInput.value});
//         }
//         else{
//             for(let gorev of gorevListesi){
//                 if(gorev.id==editId){
//                     gorev.gorevAdi =taskInput.value;
//                 }
//                 isEditTask=false;
//             }
//         }
//         taskInput.value = "";
//         displayTasks();
//     }

//     event.preventDefault();
// }

// function deleteTask(id) {

//     let deletedId;

//     for(let index in gorevListesi) {
//         if(gorevListesi[index].id == id) {
//             deletedId = index;
//         }
//     }
//     gorevListesi.splice(deletedId, 1);
//     displayTasks();
// }
// function editTask(taskId,taskName){
//     editId =taskId;
//     isEditTask =true;
//     taskInput.value =taskName;
//     taskInput.focus();
//     taskInput.classList.add("active");
// }

// btnClear.addEventListener("click",function(){
//     gorevListesi.splice(0,gorevListesi.length);
//     displayTasks();
// })

// "use strict";
        
// let gorevListesi = [
//     {"id": 1, "gorevAdi": "Görev 1", "durum": "completed"},
//     {"id": 2, "gorevAdi": "Görev 2", "durum": "completed"},
//     {"id": 7, "gorevAdi": "Görev 3", "durum": "completed"},
//     {"id": 4, "gorevAdi": "Görev 4", "durum": "pending"}
// ];

// let editId;
// let isEditTask = false;

// const taskInput = document.querySelector("#txtTaskName");
// const btnClear = document.querySelector("#btnClear");
// const filters = document.querySelectorAll(".filters span")

// displayTasks("all");

// function displayTasks(filter) {
//     let ul = document.getElementById("task-list");
//     ul.innerHTML = "";

//     if (gorevListesi.length == 0) {
//         ul.innerHTML = "<p class='p-3 m-0'>Görev listeniz boş.</p>"
//     } else {

//         for(let gorev of gorevListesi) {

//             let completed = gorev.durum == "completed" ? "checked": "";

//             if (filter == gorev.durum || filter == "all") {

//                 let li = `
//                     <li class="task list-group-item">
//                         <div class="form-check">
//                             <input type="checkbox" onclick="updateStatus(this)" id="${gorev.id}" class="form-check-input" ${completed}>
//                             <label for="${gorev.id}" class="form-check-label ${completed}">${gorev.gorevAdi}</label>
//                         </div>
//                         <div class="dropdown">
//                             <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                                 <i class="fa-solid fa-ellipsis"></i>
//                             </button>
//                             <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                                 <li><a onclick="deleteTask(${gorev.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Sil</a></li>
//                                 <li><a onclick='editTask(${gorev.id}, "${gorev.gorevAdi}")' class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Düzenle</a></li>
//                             </ul>
//                         </div>
//                     </li>
//                 `;
//                 ul.insertAdjacentHTML("beforeend", li);           
//             }

//         }
//     }
// }

// document.querySelector("#btnAddNewTask").addEventListener("click", newTask);
// document.querySelector("#btnAddNewTask").addEventListener("keypress", function(){
//     if (event.key == "Enter") {
//         document.getElementById("btnAddNewTask").click();
//     }
// });

// for(let span of filters) {
//     span.addEventListener("click", function() {
//         document.querySelector("span.active").classList.remove("active");
//         span.classList.add("active");
//         displayTasks(span.id);
//     })
// }

// function newTask(event) {

//     if(taskInput.value == "") {
//         alert("görev girmelisiniz");
//     } else {
//         if(!isEditTask) {
//             // ekleme
//             gorevListesi.push({"id": gorevListesi.length + 1, "gorevAdi": taskInput.value});
//         } else {
//             // güncelleme
//             for(let gorev of gorevListesi) {
//                 if(gorev.id == editId) {
//                     gorev.gorevAdi = taskInput.value;
//                 }
//                 isEditTask = false;
//             }
//         }
//         taskInput.value = "";
//         displayTasks(document.querySelector("span.active").id);
//     }

//     event.preventDefault();
// }       

// function deleteTask(id) {

//     let deletedId;
    
//     for(let index in gorevListesi) {
//         if(gorevListesi[index].id == id) {
//             deletedId = index;
//         }
//     }

//     gorevListesi.splice(deletedId, 1);
//     displayTasks(document.querySelector("span.active").id);
// }

// function editTask(taskId, taskName) {
//     editId = taskId;
//     isEditTask = true;
//     taskInput.value = taskName;
//     taskInput.focus();
//     taskInput.classList.add("active");

//     console.log("edit id:", editId);
//     console.log("edit mode", isEditTask);
// }

// btnClear.addEventListener("click", function() {
//     gorevListesi.splice(0, gorevListesi.length);
//     displayTasks();
// })

// function updateStatus(selectedTask) {
//     // console.log(selectedTask.parentElement.lastElementChild);
//     let label = selectedTask.nextElementSibling;
//     let durum;

//     if(selectedTask.checked) {
//         label.classList.add("checked");
//         durum = "completed";
//     } else {
//         label.classList.remove("checked");
//         durum = "pending";
//     }

//     for (let gorev of gorevListesi) {
//         if(gorev.id == selectedTask.id) {
//             gorev.durum = durum;
//         }
//     }
// }





// "use strict";
        
// let gorevListesi = [];

// if(localStorage.getItem("gorevListesi")!== null){
//     gorevListesi =JSON.parse(localStorage.getItem("gorevListesi"));
// }

// let editId;
// let isEditTask = false;

// const taskInput = document.querySelector("#txtTaskName");
// const btnClear = document.querySelector("#btnClear");
// const filters = document.querySelectorAll(".filters span")

// displayTasks("all");

// function displayTasks(filter) {
//     let ul = document.getElementById("task-list");
//     ul.innerHTML = "";

//     if (gorevListesi.length == 0) {
//         ul.innerHTML = "<p class='p-3 m-0'>Görev listeniz boş.</p>"
//     } else {

//         for(let gorev of gorevListesi) {

//             let completed = gorev.durum == "completed" ? "checked": "";

//             if (filter == gorev.durum || filter == "all") {

//                 let li = `
//                     <li class="task list-group-item">
//                         <div class="form-check">
//                             <input type="checkbox" onclick="updateStatus(this)" id="${gorev.id}" class="form-check-input" ${completed}>
//                             <label for="${gorev.id}" class="form-check-label ${completed}">${gorev.gorevAdi}</label>
//                         </div>
//                         <div class="dropdown">
//                             <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                                 <i class="fa-solid fa-ellipsis"></i>
//                             </button>
//                             <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                                    <li><a onclick="deleteTask(${gorev.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Sil</a></li>
//                                 <li><a onclick='editTask(${gorev.id}, "${gorev.gorevAdi}")' class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Düzenle</a></li>
//                             </ul>
//                         </div>
//                     </li>
//                 `;
//                 ul.insertAdjacentHTML("beforeend", li);           
//             }

//         }
//     }
// }

// document.querySelector("#btnAddNewTask").addEventListener("click", newTask);
// document.querySelector("#btnAddNewTask").addEventListener("keypress", function(){
//     if (event.key == "Enter") {
//         document.getElementById("btnAddNewTask").click();
//     }
// });

// for(let span of filters) {
//     span.addEventListener("click", function() {
//         document.querySelector("span.active").classList.remove("active");
//         span.classList.add("active");
//         displayTasks(span.id);
//     })
// }

// function newTask(event) {

//     if(taskInput.value == "") {
//         alert("görev girmelisiniz");
//     } else {
//         if(!isEditTask) {
//             // ekleme
//             gorevListesi.push({"id": gorevListesi.length + 1, "gorevAdi": taskInput.value,"durum":"pending"});
//         } else {
//             // güncelleme
//             for(let gorev of gorevListesi) {
//                 if(gorev.id == editId) {
//                     gorev.gorevAdi = taskInput.value;
//                 }
//                 isEditTask = false;
//             }
//         }
//         taskInput.value = "";
//         displayTasks(document.querySelector("span.active").id);
//         localStorage.setItem("gorevListesi",JSON.stringify(gorevListesi));
//     }

//     event.preventDefault();
// }       

// function deleteTask(id) {

//     let deletedId;
    
//     for(let index in gorevListesi) {
//         if(gorevListesi[index].id == id) {
//             deletedId = index;
//         }
//     }

//     gorevListesi.splice(deletedId, 1);
//     displayTasks(document.querySelector("span.active").id);
//     localStorage.setItem("gorevListesi",JSON.stringify(gorevListesi));

// }

// function editTask(taskId, taskName) {
//     editId = taskId;
//     isEditTask = true;
//     taskInput.value = taskName;
//     taskInput.focus();
//     taskInput.classList.add("active");

//     console.log("edit id:", editId);
//     console.log("edit mode", isEditTask);
// }

// btnClear.addEventListener("click", function() {
//     gorevListesi.splice(0, gorevListesi.length);
//     localStorage.setItem("gorevListesi",JSON.stringify(gorevListesi));
    
//     displayTasks();

// })

// function updateStatus(selectedTask) {
//     // console.log(selectedTask.parentElement.lastElementChild);
//     let label = selectedTask.nextElementSibling;
//     let durum;

//     if(selectedTask.checked) {
//         label.classList.add("checked");
//         durum = "completed";
//     } else {
//         label.classList.remove("checked");
//         durum = "pending";
//     }

//     for (let gorev of gorevListesi) {
//         if(gorev.id == selectedTask.id) {
//             gorev.durum = durum;
//         }
//     }
//     displayTasks(document.querySelector("span.active").id);
//     localStorage.setItem("gorevListesi",JSON.stringify(gorevListesi));

// }




//                      Bu yapılardan sonra projeler ile devam edeceğiz 
