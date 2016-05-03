var audioFormat;

function setFormat() {
    var audio = new Audio();
    if (audio.canPlayType("audio/mp3")) {
        audioFormat = ".mp3";
    } else {
        audioFormat = ".ogg";
    }
}

function SoundOverlap(fileNameWithPath) {
    
    setFormat();

    var altSoundTurn = false;

    var mainSound = new Audio(`${fileNameWithPath}${audioFormat}`);
    var altSound = new Audio(`${fileNameWithPath}${audioFormat}`);
    

    this.play = function() {
        if (altSoundTurn) {
            altSound.currentTime = 0;
            altSound.play();
        } else {
            mainSound.currentTime = 0;
            mainSound.play();
        }
        altSoundTurn = !this.altSoundTurn; //toggle true and false
    }


}