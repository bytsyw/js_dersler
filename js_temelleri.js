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


let mezuniyet = "üniversite"
yas = 20;
if(yas >= 18 && mezuniyet =="lise" || mezuniyet == "üniversite")
{
    console.log("Ehliyet alabilir")
} 
else{
    console.log("ehliyet alamaz")
}

// and
// true , true = true
// true , false = false

// or
// true , true = true
// true , false = true