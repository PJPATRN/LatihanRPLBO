const namaSaya = "Paulus Ungirwalu";
let Umur = 21;

function generateBiodata() {
    console.log(`Nama saya adalah ${namaSaya} dan usia saya ${Umur} tahun`);


    if (Umur < 25 && Umur > 10){
        console.log("Anda Remaja");
    } else {
        console.log("Unavailable");
    }

}

generateBiodata()