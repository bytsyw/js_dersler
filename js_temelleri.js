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



// let metin = "Sadık Turan İle Komple Uygulamalı Web Geliştirme";

// let sonuc;

// sonuc = metin.toLowerCase(); // Bu metot ile metin içindeki tüm karakterleri küçük harfe dönüştürüyoruz

// sonuc = metin.length;  // Metin içindeki cümlenin uzunluğunu bu metot ile buluyoruz

// sonuc = metin.slice(0,10); // Başlangıç ve bitiş değeri vererek buradaki kelimeyi belirli bir alana göre alıyoruz

// sonuc = metin.slice(-12,-10); // Aynı şekilde tersen almak istersek - vermemiz yeterli

// sonuc = metin.substring(0,10); // Tersten başlamak istersek Bu metotu kullanmamız yeterli

// sonuc = metin.replace("Geliştirme", "gelişimi"); // Bu metot metindeki cümlenin içindeki bir kelimeyi değiştirmemize yarıyor 

// sonuc = metin.trim(); // Bu metot ile cümlenin başındaki ve sonundaki boşlukları siliyoruz bir kullanıcıdan veri alırken başında veya sonunda boşluk varsa onları alarak veritabanına kayıt edebiliriz
// sonuc = metin.trimStart();// Baştaki boşlukları alır

// sonuc = metin.trimEnd(); // Sondaki boşlukları alır

// sonuc = metin.indexOf("İle"); // Bu kelimenin hangi indexte olduğunu bulmamıza yarar aynı zamanda böyle bir kelime var mı diye de bakabilir

// sonuc = metin.split(" "); // Bu metot Cümleyi boşluklara göre diziye dönüştürür ve her birini bir indexe atar

// sonuc = metin.split(" ")[0]; // Bu metot diziye dönüştürülen değerleri indexine göre ekrana getirir

// sonuc = metin.split(" ")[3]; // Aynı şekilde bu da indexteki elemanı ekrana getirir

// console.log(sonuc)



                            // Stringlerle uygulamalar


// 1. Soru: Url kaç karakterlidir
// 2. Soru: KursAdi kaç kelimeden oluşmaktadır
// 3. Soru: KursAdi içerisinde Eğitimi kelimesi var mı
// 4. Soru: her iki değişkeni kullanarak link ve kelimeleri oluşturalım

// let url = "https://ww.bytsyw.com";
// let kursAdi = "Komple Uygulamalı Web Geliştirme Kursu";

 // 1. Cevap

// sonuc = url.length;


// console.log(`Bu url ${sonuc} karakterlidir`);

// 2. Cevap

// sonuc = kursAdi.split(" ").length;

// console.log(`kurs adı ${sonuc} kelimeden oluşmaktadır`);


 // 3. Cevap

// sonuc = kursAdi.indexOf("Eğitimi") > -1 ? "var": "yok";

// console.log(`Bu kelime ${sonuc} `);


 // 4. Soru 


// kursAdi = kursAdi.replace("ş","s").replace("ı","i")
// boslukDonusturme = kursAdi.toLocaleLowerCase().replaceAll(" ","-");


// sonuc = `${url}/${boslukDonusturme}`;
// console.log(sonuc)


                                    


                                                    // Numbers veri türleri



// let sonuc;

// sonuc = 10; // Number veri türü döner 
// sonuc = "10"// String veri türü döner 
// sonuc = Number("10") // String veri türünü numbere çevirir
// sonuc = parseInt("10.12") // Aynı şekilde Number gibi string veri türünü numbere çevirir burada tek fark sadece tam sayı olarak döndürür
// sonuc = parseFloat("10.12") // Aynı şekilde Number gibi string veri türünü numbere çevirir burada tek fark sadece tam sayı olarak döndürmez ondalıklı kısmını da alır
// sonuc = parseInt ("10a") // baştan başlayarak sayıyı numbere çevirir string değeri almaz
// sonuc = parseInt("a10") // baştan başlayarak numbere dönüştürmeye çalışır ama NaN olarak döner çünkü veri string ifade ile
// sonuc = isNaN("10");

// let sayi = 14.1235561312;

// sonuc = sayi.toPrecision(5); // soldan 5 sayıyı alır ve yazar eğer 6. sayı 5 veya büyükse 5. sayıyı bir arttırır değilse aynı kalır
// sonuc = sayi.toFixed(5); // burada ondalıklı sayıda 5 arar ve bulursa ekrana o sayıya kadarki kısmı verir

// sonuc = Math.round(2.4); // en yakın sayıya yuvarlar
// sonuc = Math.round(2.6);
// sonuc = Math.ceil(2.2);// her zaman üste yuvarlar 2.1 bile olsa 3 olur
// sonuc = Math.floor(2.2); // her zaman alta yuvarlar

// sonuc = Math.sqrt(2,3); // karekökünü alır

// sonuc = Math.pow(2,4); // bir sayının karesini alır 2 üzeri 3 şeklinde olur  
// sonuc = Math.abs(-1); // Mutlak değer işlemleri için kullanılır

// sonuc = Math.min(4,5,7,3,2) // buradaki sayının minimum değerini alır

// sonuc = Math.max(12,2,4,5,657,2133); // buradaki sayıların en büyük değerini alır

// sonuc = Math.floor(Math.random()*110+50); // bize 0 ile 1 arasında bir sayı üretir biz bu sayı değerini arttırmak istiyorsak *10 veya 20 yapabiliriz
// console.log(typeof (sonuc))                                                    
// console.log(sonuc)                                                    


// let simdi = new Date();

// sonuc = simdi;

// Get metotlarımız
// sonuc = simdi.getDate(); //gün

// sonuc = simdi.getDay(); // Günü index olarak verir

// sonuc = simdi.getFullYear(); // Yıl 

// sonuc = simdi.getHours(); // saat

 // set metotları

// simdi.setFullYear(2025); // şimdiki yılı değiştirmeye yarıyor
// simdi.setMonth(7); // şimdiki ayı değiştirmeye yarıyor indexe göre ayrılıyor 
// sonuc = simdi;


// let dogumTarihi = new Date(1990,5,12);

// sonuc = simdi.getFullYear()-dogumTarihi.getFullYear();


// let milisec = simdi - dogumTarihi;

// let saniye = milisec/1000;
// let dakika = saniye/60;
// let saat = dakika/60;
// let day = saat/24;

// sonuc = day

// console.log(sonuc);
// console.log(typeof sonuc);




                          //Diziler


// let urun1 = "Iphone 12",
// urun2 = "Iphone 13",
// urun3 = "Iphone 14";

// let urunler = ["Iphone 12", "Iphone 13", "Ihone 14"]

// let fiyat = [9000,12000,20000];

// let renkler = ["gold", "siyah", "Beyaz"];

// let urun1 = ["Iphone 12",9000,"Gold"]; //Burada bir ürünü böyle bir dizi içinde tutarak tüm bilgilerine erişebiliyoruz
// let urun2 = ["Iphone 14",12000,"Beyaz"];
// let urun3 = ["Iphone 13",20000,"Siyah"];


// let urun4 = []
//     urun4[0]="Iphone 12",
//     urun4[1]=9000,
//     urun4[2]="Gold"; // Aynı şekilde genel bir tanım yapıp bu tanımları tek tek indislere atayanbiliyoruz
// let urun5 = []
//     urun5[0]="Iphone 14",
//     urun5[1]=12000,
//     urun5[2]="Beyaz";
// let urun6 = []
//     urun6[0]="Iphone 13",
//     urun6[0]=20000,
//     urun6[0]="Siyah";
//     let urun7 = [
//         "Iphone 13",
//         20000,
//         ["Siyah","Beyaz","Kırmızı"]];
    
// urun6[2]="Mavi"; // Bu şekilde de ürünü dışarıdan da indexine erişebilir ve değiştirebiliriz
// console.log(urun7[2][2]);
// console.log(urunler[0]);
// console.log(urunler[1]);
// console.log(urunler[2]);

// console.log(`${urunler[0]}-${fiyat[0]}-${renkler[0]}`)
// console.log(`${urunler[1]}-${fiyat[1]}-${renkler[1]}`)
// console.log(`${urunler[2]}-${fiyat[2]}-${renkler[2]}`)


// let kursAdi = "Komple web geliştirme";

// console.log(kursAdi[5]);
// console.log(kursAdi.split(" ")[2]);// geçen derste öğrendiğimiz bu metot ile boşlukları referans alıp bir diziye dönüştürebiliyoruz


                // Dizi metotları 

// let ogrenciler = ["Çınar","yiğit", "ada"];

// sonuc = ogrenciler.length;

// array to string bir diziyi stringe çevirebiliriz

// sonuc = ogrenciler.toString();

// sonuc = ogrenciler.join(" "); // Bu metot diziyi boşluklarla ayırıyor
// sonuc = ogrenciler.pop(); // Son eleman silinir ve silinen eleman geri döndürülür ve silinen eleman ana diziden de silinir

// sonuc = ogrenciler.shift(); // ilk eleman silinir


// eleman eklemek için 

// sonuc = ogrenciler.push("Sena"); // sona ekler
// sonuc = ogrenciler.unshift("sena"); // ilk diziye ekler


// let marka1 =["mazda", "toyota"];
// let marka2 =["opel", "renault"];
// let marka3 =["koessing"]
 
// sonuc = marka1.concat(marka2,marka3); // Bu metot ayrı ayrı yazılan dizileri birleştirir. Birleştirildikten sonra diziler değişmiyor dizileri teker teker çağırsak bile elemanlarını getirir 

// sonuc = marka1.splice(0,0,marka2);// Burada eklenen elemanlar 0. indexten eklemeye başlayarak elemanları ekler ilk girilen 0 nereden başlayacağını 2. 0 ise kaç tane eleman silineceğini belirtir illa bir eleman ekleme zorunluluğumuz yok
// console.log(marka1)



// console.log(sonuc)



// 1- "Elma, Armut, Muz, Çilek" elemanlarınıa sahip bir dizi oluşturunuz

// let meyveler =["Elma","Armut","Muz","Çilek"];

// 2- Dizi kaç elemanlıdır
// let sonuc;
// sonuc = meyveler.length;

// console.log(sonuc)

// 3- Dizinin ilk ve son elemanı nedir

// console.log(meyveler[0]);
// console.log(meyveler[meyveler.length-1]);

// 4- Elma dizinin bir elemanı mıdır

// sonuc = meyveler.includes("Elma")
// console.log(sonuc)

// 5- Kiraz meyvesini dizinin sonuna ekleyiniz

// meyveler[meyveler.length] = "kiraz"; //Burada dizinin sırasını alıyoruz ve sona bir tane eleman ekliyoruz
// meyveler.push("Kiraz")// Burada ise metot kullanarak diziye bir eleman ekliyoruz

// 6- Dizinin son iki elemanını siliniz

// meyveler.pop()
// meyveler.pop()
// sonuc = meyveler.splice(meyveler.length -2)
// console.log(sonuc)


// 7- Aşşağıdaki bilgileri dizi içerisinda saklayıınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız

/*
Öğrenci 1: Yiğit Bilgi 2010 (12,23,34)
Öğrenci 2: ada Bilgi 2012 (90,93,100)
Öğrenci 3: ada Bilgi 2015 (90,43,100)
*/


// ogr1 = [
//     "yigit",
//     "Bilgi",
//     2010,
//     [12,23,34]
// ]
// ogr2 = [
//     "Ada",
//     "Bilgi",
//     2012,
//     [90,93,100]
// ]
// ogr3 = [
//     "Ada",
//     "Turan",
//     2015,
//     [90,43,100]
// ]
// ogrenciler = [ogr1,ogr2,ogr3]

// sonuc = ogrenciler[0][2]

// let yigitYas = new Date().getFullYear() - ogrenciler[0][2]
// let adaBYas = new Date().getFullYear() - ogrenciler[1][2]
// let adaTYas = new Date().getFullYear() - ogrenciler[2][2]

// let yigitNotOrt = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) /3;
// let adaBNotOrt = (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2])/3;
// let adaTNotOrt = (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2])/3;
// console.log(yigitYas, adaBYas,adaTYas);
// console.log(yigitNotOrt.toFixed(3), adaBNotOrt.toFixed(3), adaTNotOrt.toFixed(3))

// let kullaniciA = {
//     "ad": "Sahhak",
//     "soyad":"ahhak",
//     "yas":22,
//     "adres":{
//         "sehir":"Samsun",
//         "ilce":"Çarşamba"
//     },
//     "hobiler": ["sinema","spor"]
// }
// let kullaniciB = {
//     "ad": "kahre",
//     "soyad":"ahhak",
//     "yas":23,
//     "adres":{
//         "sehir":"Samsun",
//         "ilce":"Çarşamba"
//     },
//     "hobiler": ["sinema","spor"]
// }
// let sonuc;


// sonuc = kullaniciA.ad;
// sonuc = kullaniciA.soyad;
// sonuc = kullaniciA["yas"];
// sonuc = kullaniciA.adres.sehir;
// sonuc = kullaniciA.hobiler[0];
// sonuc = kullaniciA.hobiler[1];

// let kullanicilar = [
//     kullaniciA,
//     kullaniciB
    
// ]
// sonuc = kullanicilar[1].ad


// let urunler = [
//     {
//         "urun_adi":"Samsung s22",
//         "urun_fiyati":19999
//     },
//     {
//         "urun_adi":"Samsungs23",
//         "urun_fiyati": 23900
//     }
// ]

// console.log(sonuc)

                        //Objeler ile Örnek alıştırmalar yapıldı

// let siparis = {
//     "siparisId": 100,
//     "siparisTarihi": "20.10.2024",
//     "odemeSekli": "Kredi Kartı",
//     "kargoAdresi":{
//         "mahalle":" Küçükkolpuınar",
//         "ilce":"Atakum",
//         "il":"Samsun"
//     },

//     "urunler":
//     [
//          {
//           "urunId": 1,
//           "urunAd": "Iphone 15 Pro Max",
//           "urunUrl": "hhtp://beytullahsoy.com",
//           "urunFiyat": 110000
//          }, 
//          {
//             "urunId": 2,
//             "urunAd": "Iphone 14 Pro Max",
//             "urunUrl": "hhtp://beytullahsoy.com",
//             "urunFiyat": 80000
//            },  
//     ],
// }

// let siparis1 = {
//     "siparisId": 101,
//     "siparisTarihi": "20.10.2024",
//     "odemeSekli": "Kredi Kartı",
//     "kargoAdresi":{
//         "mahalle":" Küçükkolpuınar",
//         "ilce":"Atakum",
//         "il":"Samsun"
//     },

//     "urunler":
//     [ 
//          {
//             "urunId": 2,
//             "urunAd": "Iphone 14 Pro ",
//             "urunUrl": "hhtp://beytullahsoy.com",
//             "urunFiyat": 79000
//            },  
//     ],
// }


// let siparisToplam = (siparis.urunler[0].urunFiyat + siparis.urunler[1].urunFiyat)*1.18;
// let siparis1Toplam = (siparis.urunler[0].urunFiyat + siparis.urunler[1].urunFiyat)*1.18; 

// let toplamSiparis = siparis1Toplam + siparisToplam;



// console.log("sipariş 1:" + siparisToplam)
// console.log("sipariş 2:" + siparis1Toplam)
// console.log("Toplam ödenecek miktar: " , toplamSiparis)

// let siparisler = [siparis,siparis1];



                    //Döngülere giriş 




// Birden çok veriyi tek tek yazmaktansa for ile bir döngü kurarak daha hızlı bir şekilde yapabiliriz 
// let toplam =0;


// for(let i =1;i<=10;i++){
//     toplam +=i
// }
// console.log(toplam)    Burada For ile 1 den başlayıp 10 a kadar olan sayıları toplayıp toplam değişkenine atıyoruz ve ekrana yazdırıyoruz.

// Mesela sayilar adında bir dizimiz var diyelim 

// let sayilar = [1,4,2,3,5,6,3,2,6,8,23];

// let toplam =0;

// for(let i = 0;i<sayilar.length;i++){
//     toplam+=sayilar[i];
// }
// console.log(toplam)


// Buradaki tüm sayıları tek tek toplamak için console.log(sayilar[0]+sayilar[1]+sayilar[2]+sayilar[3]+) Şeklinde yapmamız gerekirdi. Çoklu veri olunca bu pek mümkün olmuyor malesef o yüzden bu şekilde for kullanarak veya forEach, while, do while kullanarak bu işi daha kısa kod yapısı ile yapabiliyoruz.


// for un bazı kullanımları var içeride in of gibi bazı terimler kullanarak farklı işlevlerle de yapabiliyoruz

// for(let sayi in sayilar){
//     toplam+= sayi; // Burada in ilw sayiler dizisindeki sayıların index numaralarını alıyoruz
// }
// şeklinde yazabiliyoruz


// for(let sayi of sayilar){
//     toplam += sayi // of ile de indexleri yerine direk sayılara erişiyoruz ve böylelikle indexleri kullanmamıza gerek kalmıyor
// }

// console.log(toplam)


// let user = {
//     "name":"Beytullah Soy",
//     "userName": "bytsy",
//     "password":"12345",
//     "email":"beyt649@gmail.com"
// };
// for(let key in user){
//     console.log(key)
//     console.log(user[key])
// }


                        // Döngüler alıştırma soruları






// let toplam = 1;
// let sayilar = [1,5,7,15,3,25];

// 1- Sayilar listesindeki her bir elemanın karesini yazdırma


// for(let sayi of sayilar){
//     toplam *=sayi
// }
// console.log(toplam)


//2- sayilar listesindeki hangi sayılar 5 in katıdır?

// for(let sayi in sayilar){
//     if(sayilar[sayi]%5 ==0){
//         console.log("beşin katı olan sayılar: " + sayilar[sayi])
//     }
// }

// 3- sayılar listesindeki çift sayiların toplamı kaçtır?


// for(let sayi of sayilar){
//     if(sayi%2 == 0){
//         toplam += sayi
//     }
// }
// console.log(toplam)


//  let urunler = ["iphone 12","samsung s22","iphone 13","samsung s23"];

//4- urunler listesindeki tüm ürünelri büyük harf ile yazdırınız


// for(let i =0; i<urunler.length;i++){
//     console.log(urunler[i].toUpperCase());
// }

//5- urunler listesinde içinde samsung geçen kaç adet ürün vardır


// let adet = 0;

// for(let urun of urunler){
//     if(urun.includes("samsung")){
//         adet++;
//     }
// }
// console.log(adet)

// let ogrenciler = [
//     {"ad":"yiğit", "soyad": "Bİlgi", "notlar":[60,70,100]},
//     {"ad":"ada", "soyad": "Bİlgi", "notlar":[60,70,10]},
//     {"ad":"çınar", "soyad": "Bİlgi", "notlar":[5,5,66]}
// ];

//6- ogrenciler listesindeki her öğrencinin not ortalamasını ve başarı durumlarını yazdırma


// for(let ogrenci in ogrenciler){
//     let notOrt=   ((ogrenciler[ogrenci].notlar[0]+ogrenciler[ogrenci].notlar[1]+ogrenciler[ogrenci].notlar[2])/3).toFixed(2);
//     let bilgi = ogrenciler[ogrenci].ad +" "+ ogrenciler[ogrenci].soyad
// if(notOrt >80){
//     console.log(`AA ${bilgi} ${notOrt}`)
// }
// else if(notOrt>70){
//     console.log(`BB ${bilgi} ${notOrt}`);
// }
// else if(notOrt > 50){
//     console.log(`BC ${bilgi} ${notOrt}`)
// }
// else if(notOrt > 40){
//     console.log(`CC ${bilgi} ${notOrt}`)
// }
// else if(notOrt<40){
//     console.log(`FF ${bilgi} ${notOrt}`)
// }
// }
