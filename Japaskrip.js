const namaSaya = "Paulus Ungirwalu";
let Umur = 21;

const biodata = document.getElementById('biodata');
console.log(biodata);

function generateBiodata() {
    console.log(`Nama saya adalah ${namaSaya} dan usia saya ${Umur} tahun`);   

    let generasi;

    if (Umur < 18 && Umur > 10){
        generasi = "gen Alpha";
    } else if (Umur > 18 && Umur < 25) {
        generasi = "gen Z";
    } else {
        generasi = "gen apa bjir";
    }
    return console.log(`Generasi anda adalah : ${generasi}`);
}

generateBiodata()