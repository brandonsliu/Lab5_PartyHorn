// main.js
var volNum = document.getElementById("volume-number");
volNum.addEventListener('input', editVol);

var volSlider = document.getElementById("volume-slider");
volSlider.addEventListener('input', editVol);

var volImage = document.getElementById("volume-image");

var hornSound = document.getElementById("horn-sound");

var hornImage = document.getElementById("sound-image");

var radAir = document.getElementById("radio-air-horn");
radAir.addEventListener('click', editSound);

var radCar = document.getElementById("radio-car-horn");
radCar.addEventListener('click', editSound);

var radParty = document.getElementById("radio-party-horn");
radParty.addEventListener('click', editSound);

var honk = document.getElementById("honk-btn");
honk.addEventListener("submit", playHonk);

function editVol(e){
    let newVol = e.target.value;
    aud.volume = newVol / 100;
    volNum.value = newVol;
    volSlider.value = newVol;
    if(newVol > 66){
        volImage.src = "./assets/media/icons/volume-level-3.svg";
    }
    else if(newVol > 33){
        volImage.src = "./assets/media/icons/volume-level-2.svg";
    }
    else if(newVol > 0){
        volImage.src = "./assets/media/icons/volume-level-1.svg";
    }
    else{
        volImage.src = "./assets/media/icons/volume-level-0.svg";
        honk.disabled = true;
    }
}

function editSound(e){
    if(radAir.checked){
        hornSound.src = "./assets/media/audio/air-horn.mp3";
        hornImage.src = "./assets/media/images/air-horn.svg";
        hornImage.alt = "Air Horn";
    }
    else if(radCar.checked){
        hornSound.src = "./assets/media/audio/car-horn.mp3";
        hornImage.src = "./assets/media/images/car.svg";
        hornImage.alt = "Car Horn";
    }
    else{
        hornSound.src = "./assets/media/audio/party-horn.mp3";
        hornImage.src = "./assets/media/images/party-horn.svg";
        hornImage.alt = "Party Horn";
    }
}

function playHonk(e){
    hornSound.play();
}
// TODO
