let firstName = prompt("Adınız:") // prompt() ile sayfa açıldığında isim sorar.
let lastName = prompt("Soyadınız:") // prompt() ile ilk sorudan sonra soy isim sorar.
let fullName = `${firstName} ${lastName}` // sayfa açıldığında kişinin girdiği bilgiler ile tam isim oluşturur.

// paragrafın başında ismi yazdırır.
let shownName = document.querySelector("#full-name")
shownName.innerHTML = fullName

function updateClock() { // saatin her saniye güncellenmesi için yazılan function
    // bilgisayarın tarihini alır.
    let now = new Date();
    // bilgisayardan aldığı tarih bilgisini string e çevirir.
    let dateString = now.toDateString();
    // bilgisayardan aldığı saat bilgisini string e çevirir.
    let timeString = now.toLocaleTimeString();

    document.querySelector("#clock").innerHTML = timeString // saat bilgisini DOM da göster
    document.querySelector("#date").innerHTML = dateString // tarih bilgisini DOM da göster
}

