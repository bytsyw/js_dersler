// console.log(5000 + (5000 * 0.3));
// console.log(6000 + (5000 * 0.3)); // Değişkensiz tanımlama

// var maasAli = 7000;
// var maasCan = 6000;
// var zam = 0.3;

// console.log(maasAli + (maasAli * zam));
// console.log(maasCan + (maasCan * zam));  //Değişkenler ile konsola çıktı alma

//Türkçe karakter kullanılmaz
//Arada boşluk bırakılmaz
//Sayı ile başlayamaz
//Kendine ait yazım şekli ile tek düze yazmalısın kod okunabilirliği açısından

//Değişken Türleri

// var urunAdi = "iphone 13"; //String
// let urunFiyati = "15000"; // String: Tırnak içine aldığımız herşey string dir.

// let sayi2 = "10";
// let sayi1 = "20"; // String bir ifadeyi içinde sadece sayı değeri var ise bu değişkeni sayıya çevirmek için Number() i kullanıyoruz

// console.log(Number(sayi1) + Number(sayi2));

// let sayi2 = 10;
// let sayi1 = 20; // Number bir değişkende veriyi stringe çevirmek için toString() komutunu kullanıyoruz

// console.log(sayi1.toString() + sayi2.toString());

// let isim = "Beytullah";
// let soyad = "Soy";  " " karakteri ile bir değişkene verilen kelimeleri ayırmak için bu karakter kullanılabilir tek + operatörü ile string değişkenler birleştirilir integer değişkenler toplanır

// console.log(isim + " " + soyad)

// let sinavNotu = 70;
// let basarilimi = (sinavNotu >50);

// console.log(basarilimi)
// console.log(typeof basarilimi) // Boolean veri türü true veya false dönderir

// let yas;

// console.log(yas);
// console.log(typeof yas); // Burada yas içinde bir veri yok ike veri undefined döner

// yas = "";
// console.log(yas);
// console.log(typeof yas); // Burada ise yas'a bir "" gönderirken bunu karakter ve yas'ı içi dolu olarak görür ve bu değer string olur

// Uygulama ödevi

// 1. soru

// 1. Öğrenci

// let isim1 = "Ada Bilgi";
// let dogumTarihi1 = "2012";
// let dersNot1 = 70;
// let dersNot2 = 70;
// let dersNot3 = 80;

// // 2. Öğrenci
// let isim2 = "Yiğit Bilgi";
// let dogumTarihi2 = "2010";
// let dersNot4 = 40;
// let dersNot5 = 40;
// let dersNot6 = 50;

// 2. soru

// let simdikiZaman = new Date().getFullYear(); // Bununla birlikte şimdiki zamanda içinde bulunduğumuz yılı alıyoruz

// let yasbilgiBir = simdiZaman - dogumTarihi1;
// let yasbilgiBir = simdiZaman - dogumTarihi2;

// let BirinciYasbilgi = 2023 - Number(dogumTarihi1);
// let ikinciYasbilgi = 2023 - Number(dogumTarihi2);

// 3. soru

// let birinciOrt = (dersNot1 + dersNot2 + dersNot3)/3;
// let ikinciOrt = (dersNot4 + dersNot5 + dersNot6)/3; // parseInt ile sayıyı ondalıklı kısmından kurtarıp direk tam sayı şeklinde yazabiliyoruz

// 4. soru

// let gectiKaldibirinci = (birinciOrt >50 ? "gecti": "kaldi");
// let gectiKaldiikinci = (ikinciOrt >50 ? "gecti": "kaldi");
// console.log(gectiKaldibirinci)

// Operatörler

// let sonuc;

// let a = 10,
// b= 20
// c = 30;

// 1. Aritmetik operatörler

// sonuc = a + b;
// sonuc = a - b;
// sonuc = a * b;
// sonuc = a / b;
// sonuc = a % b;

// sonuc = a++;
// sonuc = a--;
// sonuc = --a;

// 2. Atama Operatörleri

// sonuc = a;

// sonuc += a; // sonuc = sonuc + a
// sonuc -= a; // sonuc = sonuc - a
// sonuc *= a; // sonuc = sonuc * a
// sonuc /= a; // sonuc = sonuc / a
// sonuc %= a; // sonuc = sonuc + a

// 3. Karşılaştırma Operatörleri

// sonuc = (a == b) // Boolean değer döndürür
// sonuc = (a != b) // Boolean değer döndürür
// sonuc = (a === b) // bu üç eşittir hem tip hem de değer kontrollü yapar
// sonuc = (a<b) //küçüklük kontrolü yappıyor
// sonuc = (a>b) // Büyüklük kontrolü yapıyor
// sonuc = (a<=b) // küçük eşit mi kontrolü yappıyor
// sonuc = (a>=b) // Büyük eşit mi kontrolü yapıyor

// console.log(sonuc)

//             İf-Else

// let username = "Beytullah";

// let isLoggedin = username == "Beytullah";
// password = "1234";

// if (isLoggedin) {
//   if (password == "1234") {
//     console.log(`Giriş başarılı ${username} Hoşgeldin`);
//   }
//   else{
//     console.log("Parola hatalı tekrar deneyiniz")
//   }
// } 
// else {
//   console.log("Hatalı giriş yaptınız");
// }


// let mezuniyet = "üniversite"
// yas = 20;
// if(yas >= 18 && mezuniyet =="lise" || mezuniyet == "üniversite")
// {
//     console.log("Ehliyet alabilir")
// } 
// else{
//     console.log("ehliyet alamaz")
// }

// and
// true , true = true
// true , false = false

// or
// true , true = true
// true , false = true


//              İf else uygulama 

// 1. soru 

// let sayi1 = 39;
// let x = 10
// y= 13
// z= 34;

// if(sayi1 >= 10 && sayi1 <= 50)
// {
//     console.log("sayı 10 ile 50 arasında")
// }
// else{
//     console.log("sayı 10 ile 50 arasında değil")
// }

// 2. soru

// if(sayi1 %2 == 0){
//     console.log("sayı çifttir")
// }
// else{
//     console.log("sayı tektir")
// }

// //  3. Soru
// if( x> y && x>z){
//     console.log("x büyük")
// }
// else if(y> x && y>z){
//     console.log("y en büyük")
// }
// else if(z >y && z>x){
//     console.log("z büyük")
// }
// else{
//     console.log("hepsi eşit")
// }


// 4. soru

// let vize1 = 40;
// let vize2 = 70;
// let final = 86;
// let vizeOrt = (vize1+vize2)*0.40;
// let finOrt = final*0.60;
// let ortalama = (finOrt+vizeOrt);
// // A şıkkı 

// if(ortalama < 50){
//     console.log(`ortalamanız 50 altı. Notunuz: ${ortalama} GEÇEMEDİNİZ`);
// }
// else{
//     console.log(`Sonucunuz ${ortalama} Geçtiniz`)
// }


// B şıkkı 

// if((ortalama >= 50) && (final >= 50))
// {
//     console.log("Dersi başarıyla geçtiniz");
// }
// else if((ortalama >= 50) && (final < 50)){
//     console.log("Ortalamanız geçti ama final notunuz 50 den düşük KALDINIZ");
// }
// else{
//     console.log("Kaldınız");
// }

// C şıkkı

// if(ortalama <=49 && final >=70){
//     console.log("Dersi başarılı ile geçtiniz");
// }
// else{
//     console.log("kaldınız");
// }



//          String ifadeler

// let ad = "Beytullah",
// soyad = "Soy",
// yas = 22,
// sehir = "Samsun";


// let mesaj = "Benim adım "+ ad + ' Soyadım ' + soyad + '.' + sehir + ' \'da Yaşıyorum.' + ' Emekliliğe ' + (65 - yas) + ' yıl Kaldı';

//    Backtick ` ` Bu iki karekter arasına istediğimiz şeyleri + operatörü kullanmadan tanımlama yapabiliyoruz Mesela ' "benim adım " + ad' Yerine ' `Merhaba benim adım ${ad}`' şeklinde yazabiliyoruz 

// mesaj = `Merhaba benim adım ${ad} Soyadım ${soyad}. ${sehir} 'da yaşıyorum Emekliliğime ${65 - yas} yıl kaldı.`;


// ternary operatörü

// let emeklilik = (65 - yas>0) ? "Emekliliğe "+ (65 - yas)+ " yıl kaldı" : "Zaten emekli oldunuz";

//  let mesaj = `Merhaba benim adım ${ad} Soyadım ${soyad}. ${sehir} 'da yaşıyorum ${emeklilik}.`;

// console.log(mesaj);

                                            // String Metotları



let metin = "Sadık Turan İle Komple Uygulamalı Web Geliştirme";

let sonuc;

sonuc = metin.toLowerCase();
sonuc = metin.length;
sonuc = metin.slice(0,10);
sonuc = metin.slice(-12,-10);
sonuc = metin.substring(0,10);
sonuc = metin.replace("Geliştirme", "gelişimi");
sonuc = metin.trim();
sonuc = metin.trimStart();
sonuc = metin.trimEnd();
sonuc = metin.indexOf("İle");
sonuc = metin.split(" ");
sonuc = metin.split(" ")[0];
sonuc = metin.split(" ")[3];


console.log(sonuc)

