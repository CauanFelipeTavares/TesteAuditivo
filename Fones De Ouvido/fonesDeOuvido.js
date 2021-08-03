const audioDireito = document.getElementById('foneDireito')
const audioEsquerdo = document.getElementById('foneEsquerdo')

var time = 6

localStorage.setItem("audioModo", "fonesDeOuvido")
audioEsquerdo.volume = 0.5
audioDireito.volume = 0.5

var visualVolume = 5

diminuirVolume()
aumentarVolume()
audioEsquerdo.play()
setInterval(() => {
    if(time % 10 == 0){
        audioDireito.play()
    }else if(time % 5 == 0){
        audioEsquerdo.play()
    }

    time = time + 1

}, 1000)

function diminuirVolume() {
    if(audioDireito.volume > 0.11 && audioEsquerdo.volume > 0.11){
        audioDireito.volume = audioDireito.volume - 0.1
        audioEsquerdo.volume = audioEsquerdo.volume  - 0.1

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
    if(audioDireito.volume < 0.91 && audioEsquerdo.volume < 0.91){
        audioDireito.volume = audioDireito.volume + 0.1
        audioEsquerdo.volume = audioEsquerdo.volume  + 0.1

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

