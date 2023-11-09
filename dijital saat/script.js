let p = document.querySelector('p')
let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let h3 = document.querySelector('h3')
let body = document.querySelector('body')

function random(){
    let random1 = Math.floor(Math.random() * 255) + 1
    let random2 = Math.floor(Math.random() * 255) + 1
    let random3 = Math.floor(Math.random() * 255) + 1
    
    return `rgb(${random1},${random2},${random3}, 0.3)`
}
const zaman = () => {
    let tarih = new Date()
    let ayinKacinciGunu = tarih.getDate()
    let haftaninKacinciGunu = tarih.getDay()
    let gunler = ['pazar', 'pazartesi', 'salı', 'çarşamba', 'perşembe', 'cuma', 'cumartesi']
    let aylar = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
    let yil = tarih.getFullYear()
    let saat = tarih.getHours()
    let dakika = tarih.getMinutes()
    let saniye = tarih.getSeconds()
    let salise = tarih.getMilliseconds()

    if (saat < 10){
        saat = '0' + saat
    }
    if (dakika < 10){
        dakika = '0' + dakika
    }
    if (saniye < 10){
        saniye = '0' + saniye
    }
    p.innerHTML = `${saat}:${dakika}:${saniye}`
    box1.style.backgroundColor = random()
    h3.innerHTML = `${gunler[haftaninKacinciGunu].toUpperCase()} ${aylar[ayinKacinciGunu].toUpperCase()} ${yil}`
    box2.style.backgroundColor = random()
    body.style.backgroundColor = random()
}
setInterval(zaman, 1000)









































