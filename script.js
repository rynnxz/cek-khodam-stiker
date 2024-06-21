const items = [
    { name: "ada ada saja negro", probability: 0.5, imgSrc: "img/ada saja negro.jpg"}, 
    { name: "admin", probability: 0.5, imgSrc: "img/admin.jpg" },
    { name: "aduhai dongonya", probability: 0.5, imgSrc: "img/aduhai dongo.jpg"}, 
    { name: "air susu dibalas air strike", probability: 0.5, imgSrc: "img/air susu dibalas air strike.jpg"},
    { name: "aku bluarsip", probability: 0.5, imgSrc: "img/aku bluarsip.jpg"},
    { name: "aku mau lima", probability: 0.5, imgSrc: "img/aku mau lima.jpg"},
    { name: "aku remas nih", probability: 0.5, imgSrc: "img/aku remas.jpg"},
    { name: "ampun dj", probability: 0.5, imgSrc: "img/ampun dj.jpg"},
    { name: "apa apaan ini bung", probability: 0.5, imgSrc: "img/apa apaan ini bung.jpg"},
    { name: "apa coba", probability: 0.5, imgSrc: "img/apa coba.jpg"},
    { name: "apa cona", probability: 0.5, imgSrc: "img/apa cona.jpg"},
    { name: "arif seluncur", probability: 0.5, imgSrc: "img/arif seluncur.jpg"},
    { name: "arisu marah", probability: 0.5, imgSrc: "img/arisu marah.jpg"},
    { name: "admin datang", probability: 0.5, imgSrc: "img/atmin datang.jpg"},
    { name: "bajindul", probability: 0.5, imgSrc: "img/bajindul.jpg"},
    { name: "bakwan goreng", probability: 0.5, imgSrc: "img/bakwan goreng.jpg"},
    { name: "bakwan jagung", probability: 0.5, imgSrc: "img/bakwan jagung.jpg"},
    { name: "belum kepikiran", probability: 0.5, imgSrc: "img/belum kepikiran.jpg"},
    { name: "bengong", probability: 0.5, imgSrc: "img/bengong.jpg"},
    { name: "bisa kita maklumi", probability: 0.5, imgSrc: "img/bisa kita maklumi.jpg"},
    { name: "bola meledak", probability: 0.5, imgSrc: "img/bola meledak.jpg"},
    { name: "cek notip", probability: 0.5, imgSrc: "img/cek notip.jpg"},
    { name: "code perpanjang pe-", probability: 0.5, imgSrc: "img/code perpanjang.jpg"},
    { name: "dark banget", probability: 0.5, imgSrc: "img/dark banget.jpg"},
    { name: "dasar lu lol", probability: 0.5, imgSrc: "img/dasar lu lol.jpg"},
    { name: "farhan kebab", probability: 0.5, imgSrc: "img/farhan kebab.jpg"},
    { name: "fening ancrit", probability: 0.5, imgSrc: "img/fening ancrit.jpg"},
    { name: "gak tawu", probability: 0.5, imgSrc: "img/gak tawu.jpg"},
    { name: "gk", probability: 0.5, imgSrc: "img/gk.jpg"},
    { name: "hanya bercanda", probability: 0.5, imgSrc: "img/hanya bercanda.jpg"},
    { name: "hitamnya aku", probability: 0.5, imgSrc: "img/hitamnya aku.jpg"},
    { name: "jangan percaya", probability: 0.5, imgSrc: "img/jangan percaya.jpg"},
    { name: "kami adalah", probability: 0.5, imgSrc: "img/kami adalah.jpg"},
    { name: "kampret", probability: 0.5, imgSrc: "img/kampret.jpg"},
    { name: "kekebalan tubuh", probability: 0.5, imgSrc: "img/kekebalan tubuh.jpg"},
    { name: "kasi nafas dulu gasi", probability: 0.5, imgSrc: "img/kasi nafas.jpg"},
    { name: "keliatannya asik yh", probability: 0.5, imgSrc: "img/keliatannya asik yh.jpg"},
    { name: "kenapa dengan awak ni", probability: 0.5, imgSrc: "img/kenapa dengan awak ni.jpg"},
    { name: "kucing meledak", probability: 0.5, imgSrc: "img/kucing meledak.jpg"},
    { name: "kucing sigma", probability: 0.5, imgSrc: "img/kucing sigma.jpg"},
    { name: "ligma", probability: 0.5, imgSrc: "img/ligma.jpg"},
    { name: "loh gabahaya ta", probability: 0.5, imgSrc: "img/loh gabahaya ta.jpg"},
    { name: "lu hitam", probability: 0.5, imgSrc: "img/lu hitam.jpg"},
    { name: "mau bagaimana lagi", probability: 0.5, imgSrc: "img/mau bagaimana lagi.jpg"},
    { name: "melihat karbit", probability: 0.5, imgSrc: "img/melihat karbit.jpg"},
    { name: "member", probability: 0.5, imgSrc: "img/member.jpg"},
    { name: "menggoda", probability: 0.5, imgSrc: "img/menggoda.jpg"},
    { name: "menuju lokasi", probability: 0.5, imgSrc: "img/menuju lokasi.jpg"},
    { name: "menyala abangkuh", probability: 0.5, imgSrc: "img/menyala abangkuh.jpg"},
    { name: "miaw", probability: 0.5, imgSrc: "img/miaw.jpg"},
    { name: "ngeri kali", probability: 0.5, imgSrc: "img/ngeri kali.jpg"},
    { name: "njir coek", probability: 0.5, imgSrc: "img/njir coek.jpg"},
    { name: "nguawor", probability: 0.5, imgSrc: "img/nguawor.jpg"},
    { name: "nugroho", probability: 0.5, imgSrc: "img/nugroho.jpg"},
    { name: "nyata atau palsu", probability: 0.5, imgSrc: "img/nyata atau palsu.jpg"},
    { name: "ofkors", probability: 0.5, imgSrc: "img/ofkors.jpg"},
    { name: "part 2", probability: 0.5, imgSrc: "img/part 2.jpg"},
    { name: "pasrah", probability: 0.5, imgSrc: "img/pasrah.jpg"},
    { name: "pembohonk publik", probability: 0.5, imgSrc: "img/pembohonk publik.jpg"},
    { name: "penasaran", probability: 0.5, imgSrc: "img/penasaran.jpg"},
    { name: "pisang goreng", probability: 0.5, imgSrc: "img/pisang goreng.jpg"},
    { name: "raja iblis mau lewat", probability: 0.5, imgSrc: "img/raja iblis mau lewat.jpg"},
    { name: "ramaikan lalu hitamkan", probability: 0.5, imgSrc: "img/ramaikan.jpg"},
    { name: "ranto aerodinamis", probability: 0.5, imgSrc: "img/ranto aerodinamis.jpg"},
    { name: "reflek bosku", probability: 0.5, imgSrc: "img/reflek bosku.jpg"},
    { name: "reza kecap", probability: 0.5, imgSrc: "img/reza kecap.jpg"},
    { name: "riski komputer", probability: 0.5, imgSrc: "img/riski komputer.jpg"},
    { name: "sabuk hitam", probability: 0.5, imgSrc: "img/sabuk hitam.jpg"},
    { name: "sahabat hitam", probability: 0.5, imgSrc: "img/sahabat hitam.jpg"},
    { name: "sengaja ya bikin aku marah", probability: 0.5, imgSrc: "img/sengaja ya bikin aku marah.jpg"},
    { name: "siapa sangka", probability: 0.5, imgSrc: "img/siapa sangka.jpg"},
    { name: "sigma dulu", probability: 0.5, imgSrc: "img/sigma dulu.jpg"},
    { name: "stiker negro lagi", probability: 0.5, imgSrc: "img/stiker negro lagi.jpg"},
    { name: "tewas dihitamkan", probability: 0.5, imgSrc: "img/tewas dihitamkan.jpg"},
    { name: "topik panas", probability: 0.5, imgSrc: "img/topik panas.jpg"},
    { name: "xd", probability: 0.5, imgSrc: "img/xd.jpg"},
    { name: "xenia abu bakar", probability: 0.5, imgSrc: "img/xenia abu bakar.jpg"},

];
    const cekKhodamBtn = document.getElementById("cekKhodamBtn");
    const resultDiv = document.getElementById("result");
    const img = document.getElementById("image");

document.getElementById('cekKhodamBtn').addEventListener('click', function() {
    var nama = document.getElementById('nama').value;
    if (nama === '') {
        document.getElementById('popup').style.display = 'block';
    } else {
        cekKhodamBtn.addEventListener("click", function() {
            const result = khodamGacha();

            resultDiv.innerHTML = `<p>${nama}, Khodam kamu : ${result.name}</p>`;
            img.innerHTML = `<img src="${result.imgSrc}"></img>`;
            document.getElementById('nama').value = '';
        });
    }
});

document.getElementById('closePopupBtn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

const totalProbability = items.reduce((acc, item) => acc + item.probability, 0);

function khodamGacha() {
    const randomNumber = Math.random() * totalProbability;
    let cumulativeProbability = 0;

    for (const item of items) {
        cumulativeProbability += item.probability;
        if (randomNumber <= cumulativeProbability) {
            return item;
        }
    }

    return null;
}