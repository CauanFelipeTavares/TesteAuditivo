const audio = document.getElementById('audio')

var time = 4

localStorage.setItem("audioModo", "autoFalantes")
audio.volume = 0.5

var visualVolume = 5

diminuirVolume()
aumentarVolume()
setInterval(() => {
    if(time % 5 == 0){
        audio.play()
    }

    time = time + 1

}, 1000)

function diminuirVolume() {
    if(audio.volume > 0.11){
        audio.volume = audio.volume - 0.1

        for(x=10; x>=visualVolume; x--){
            document.getElementById('volumeLevel' + visualVolume).style.backgroundColor = 'transparent'
        }

        //localStorage.clear()

        visualVolume = visualVolume - 1
        document.getElementById('volumeLevel' + visualVolume).style.backgroundColor = 'green'

        localStorage.setItem("volume", visualVolume)
        console.log(visualVolume)
    }
}

function aumentarVolume() {
    if(audio.volume < 0.91){
        audio.volume = audio.volume + 0.1

        //localStorage.clear()


        visualVolume = visualVolume + 1
        document.getElementById('volumeLevel' + visualVolume).style.backgroundColor = 'green'
        
        localStorage.setItem("volume", visualVolume)
        console.log(visualVolume)
    }
}

for(x=1; x <=visualVolume; x++){
    var volumeLevel = document.getElementById('volumeLevel' + x).style.backgroundColor = 'green'
}



