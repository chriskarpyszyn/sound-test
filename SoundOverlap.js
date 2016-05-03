var audioFormat;

function setFormat() {
    var audio = new Audio();
    if (audio.canPlayType("audio/mp3")) {
        audioFormat = ".mp3";
    } else {
        audioFormat = ".ogg";
    }
}

function SoundOverlap() {
    
    this.load = function(fileNameWithPath) {
        setFormat();

        this.altSoundTurn = false;
        this.mainSound = new Audio(`${fileNameWithPath}${audioFormat}`);
        this.altSound = new Audio(`${fileNameWithPath}${audioFormat}`);
    }

    this.play = function() {
        if (this.altSoundTurn) {
            this.altSound.currentTime = 0;
            this.altSound.play();
        } else {
            this.mainSound.currentTime = 0;
            this.mainSound.play();
        }
        this.altSoundTurn = !this.altSoundTurn; //toggle true and false
    }


}