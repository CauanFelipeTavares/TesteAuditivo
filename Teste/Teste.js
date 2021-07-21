var audioModo = localStorage.getItem('audioModo')
var volume = localStorage.getItem('volume')

document.getElementById('numeros').style.display = 'none'

var iconOptions = 'imagens'

var acertos = 0
var errosTotal = 0
var etapa = 1

var SelectIcon1 = {
    value: false,
    id: 1
}
var SelectIcon2 = {
    value: false,
    id: 2
}
var SelectIcon3 = {
    value: false,
    id: 3
}
var SelectIcon4 = {
    value: false,
    id: 4
}
var SelectIcon5 = {
    value: false,
    id: 5
}
var SelectIcon6 = {
    value: false,
    id: 6
}
var SelectIcon7 = {
    value: false,
    id: 7
}
var SelectIcon8 = {
    value: false,
    id: 8
}
var SelectIcon9 = {
    value: false,
    id: 9
}

var SelectIcons = [SelectIcon1,SelectIcon2,SelectIcon3,SelectIcon4,SelectIcon5,SelectIcon6,SelectIcon7,SelectIcon8,SelectIcon9]


const PNV1E = {
    audio: document.getElementById('PNV1E'),
    opcoes: [5 , 6, 7]
}

const PNV2E = {
    audio: document.getElementById('PNV2E'),
    opcoes: [4 , 5, 6]
}

const PNV3E = {
    audio: document.getElementById('PNV3E'),
    opcoes: [6 , 7, 8]
}

const PNV4E = {
    audio: document.getElementById('PNV4E'),
    opcoes: [1 , 2, 6]
}

const PNV5E = {
    audio: document.getElementById('PNV5E'),
    opcoes: [1 , 4, 9]
}

const NNV1E = {
    audio: document.getElementById('NNV1E'),
    opcoes: [5 , 3, 7]
}

const NNV2E = {
    audio: document.getElementById('NNV2E'),
    opcoes: [6 , 4, 8]
}

const NNV3E = {
    audio: document.getElementById('NNV3E'),
    opcoes: [2 , 6, 8]
}

const NNV4E = {
    audio: document.getElementById('NNV4E'),
    opcoes: [8 , 6, 3]
}

const NNV5E = {
    audio: document.getElementById('NNV5E'),
    opcoes: [6 , 5, 7]
}

const PNV1D = {
    audio: document.getElementById('PNV1E'),
    opcoes: [1 , 2, 9]
}

const PNV2D = {
    audio: document.getElementById('PNV1E'),
    opcoes: [4 , 5, 8]
}

const PNV3D = {
    audio: document.getElementById('PNV1E'),
    opcoes: [6 , 7, 8]
}

const PNV4D = {
    audio: document.getElementById('PNV1E'),
    opcoes: [1 , 2, 6]
}

const PNV5D = {
    audio: document.getElementById('PNV1E'),
    opcoes: [4 , 5, 6]
}

const NNV1D = {
    audio: document.getElementById('NNV1D'),
    opcoes: [5 , 3, 7]
}

const NNV2D = {
    audio: document.getElementById('NNV2D'),
    opcoes: [3 , 2, 4]
}

const NNV3D = {
    audio: document.getElementById('NNV3D'),
    opcoes: [4 , 3, 5]
}

const NNV4D = {
    audio: document.getElementById('NNV4D'),
    opcoes: [3 , 7, 2]
}

const NNV5D = {
    audio: document.getElementById('NNV5D'),
    opcoes: [6 , 5, 7]
}



const PNV1 = {
    audio: document.getElementById('PNV1'),
    opcoes: [4 , 6, 5]
}

const PNV2 = {
    audio: document.getElementById('PNV2'),
    opcoes: [5 , 6, 7]
}

const PNV3 = {
    audio: document.getElementById('PNV3'),
    opcoes: [6 , 7, 8]
}

const PNV4 = {
    audio: document.getElementById('PNV4'),
    opcoes: [4 , 3, 5]
}

const PNV5 = {
    audio: document.getElementById('PNV5'),
    opcoes: [5 , 4, 6]
}

const NNV1 = {
    audio: document.getElementById('NNV1'),
    opcoes: [2 , 8, 3]
}

const NNV2 = {
    audio: document.getElementById('NNV2'),
    opcoes: [8 , 5, 7]
}

const NNV3 = {
    audio: document.getElementById('NNV3'),
    opcoes: [7 , 5, 2]
}

const NNV4 = {
    audio: document.getElementById('NNV4'),
    opcoes: [8 , 6, 3]
}

const NNV5 = {
    audio: document.getElementById('NNV5'),
    opcoes: [4 , 8, 3]
}


if(audioModo == 'fonesDeOuvido'){
    var audios = [PNV1E,PNV2E,PNV3E,PNV4E,PNV5E,NNV1E,NNV2E,NNV3E,NNV4E,NNV5E,PNV1D,PNV2D,PNV3D,PNV4D,PNV5D,NNV1D,NNV2D,NNV3D,NNV4D,NNV5D]
}

if(audioModo == 'autoFalantes'){
    var audios = [PNV1,PNV2,PNV3,PNV4,PNV5,NNV1,NNV2,NNV3,NNV4,NNV5]
}

console.log(audios)
console.log(audioModo)

var errosEmSequencia = 0

var selectedOptions = 0

for(i=0; i<audios.length; i++){
    audios[i].audio.volume = volume / 10
}

resetOptions()
repeatSound()


function icone1() {
    if(document.getElementById('icone1' + iconOptions).style.border ==  '3px solid black'){
        document.getElementById('icone1' + iconOptions).style.border = '3px solid transparent'
        selectedOptions--
        SelectIcon1.value = false
        console.log(SelectIcons.value)
    }else{
        document.getElementById('icone1' + iconOptions).style.border = '3px solid black'
        selectedOptions++
        SelectIcon1.value = true
        console.log(SelectIcons)
        console.log(SelectIcon1.value)
        verifyOptionsNumber()
    }
}

function icone2() {
    if(document.getElementById('icone2' + iconOptions).style.border == '3px solid black'){
        document.getElementById('icone2' + iconOptions).style.border = '3px solid transparent'
        selectedOptions--
        SelectIcon2.value = false
    }else{
        document.getElementById('icone2' + iconOptions).style.border = '3px solid black'
        selectedOptions++
        SelectIcon2.value = true
        verifyOptionsNumber()
    }
}

function icone3() {
    if(document.getElementById('icone3' + iconOptions).style.border == '3px solid black'){
        document.getElementById('icone3' + iconOptions).style.border = '3px solid transparent'
        selectedOptions--
        SelectIcon3.value = false
    }else{
        document.getElementById('icone3' + iconOptions).style.border = '3px solid black'
        selectedOptions++
        SelectIcon3.value = true
        verifyOptionsNumber()
    }
}

function icone4() {
    if(document.getElementById('icone4' + iconOptions).style.border == '3px solid black'){
        document.getElementById('icone4' + iconOptions).style.border = '3px solid transparent'
        selectedOptions--
        SelectIcon4.value = false
    }else{
        document.getElementById('icone4' + iconOptions).style.border = '3px solid black'
        selectedOptions++
        SelectIcon4.value = true
        verifyOptionsNumber()
    }
}

function icone5() {
    if(document.getElementById('icone5' + iconOptions).style.border == '3px solid black'){
        document.getElementById('icone5' + iconOptions).style.border = '3px solid transparent'
        selectedOptions--
        SelectIcon5.value = false
    }else{
        document.getElementById('icone5' + iconOptions).style.border = '3px solid black'
        selectedOptions++
        SelectIcon5.value = true
        verifyOptionsNumber()
    }
}

function icone6() {
    if(document.getElementById('icone6' + iconOptions).style.border == '3px solid black'){
        document.getElementById('icone6' + iconOptions).style.border = '3px solid transparent'
        selectedOptions--
        SelectIcon6.value = false
    }else{
        document.getElementById('icone6' + iconOptions).style.border = '3px solid black'
        selectedOptions++
        SelectIcon6.value = true
        verifyOptionsNumber()
    }
}

function icone7() {
    if(document.getElementById('icone7' + iconOptions).style.border == '3px solid black'){
        document.getElementById('icone7' + iconOptions).style.border = '3px solid transparent'
        selectedOptions--
        SelectIcon7.value = false
    }else{
        document.getElementById('icone7' + iconOptions).style.border = '3px solid black'
        selectedOptions++
        SelectIcon7.value = true
        verifyOptionsNumber()
    }
}

function icone8() {
    if(document.getElementById('icone8' + iconOptions).style.border == '3px solid black'){
        document.getElementById('icone8' + iconOptions).style.border = '3px solid transparent'
        selectedOptions--
        SelectIcon8.value = false
    }else{
        document.getElementById('icone8' + iconOptions).style.border = '3px solid black'
        selectedOptions++
        SelectIcon8.value = true
        verifyOptionsNumber()
    }
}

function icone9() {
    if(document.getElementById('icone9' + iconOptions).style.border == '3px solid black'){
        document.getElementById('icone9' + iconOptions).style.border = '3px solid transparent'
        selectedOptions--
        SelectIcon9.value = false
    }else{
        document.getElementById('icone9' + iconOptions).style.border = '3px solid black'
        selectedOptions++
        SelectIcon9.value = true
        verifyOptionsNumber()
    }
}

function verifyOptionsNumber () {
    if(selectedOptions >= 3){
        verifyAnwers()
        selectedOptions = 0
        resetOptions()
        SelectIcon1.value = false
        SelectIcon2.value = false
        SelectIcon3.value = false
        SelectIcon4.value = false
        SelectIcon5.value = false
        SelectIcon6.value = false
        SelectIcon7.value = false
        SelectIcon8.value = false
        SelectIcon9.value = false
        nextQuestion()
    }
}

function resetOptions () {
    for(i=1; i<10; i++){
        document.getElementById('icone' + i + 'imagens').style.border = '3px solid white'
        document.getElementById('icone' + i + 'numeros').style.border = '3px solid white'
    }
}

function repeatSound() {
    audios[0].audio.play()
}

function verifyAnwers () {
    var erros = 0
    for(i=0;i<9;i++){
        for(x=0;x<3;x++){
            var id = audios[0].opcoes[x]
            if(SelectIcons[i].id == id){
                if(SelectIcons[i].value == true){
                    acertos++
                    console.log(acertos)
                }else{
                    erros++
                    errosTotal++
                    console.log(erros)
                }
            }
        }
    }
    console.log(errosEmSequencia)
    if(erros == 3){
        errosEmSequencia++
    }else{
        errosEmSequencia = 0
    }
    if(errosEmSequencia == 2){
        console.log('1teste')
        errosEmSequencia = 0
        while(audios.length % 5 != 0){
            audios.shift()
            console.log(audios.length)
        }
        acertos = acertos/2
    }
    audios.shift()
    etapa = 20 - audios.length
    console.log(etapa)

    var relacaoAcertosQuantidade = acertos/(acertos + errosTotal)
    console.log('AQUI: ' + relacaoAcertosQuantidade)
}

function nextQuestion () {
    console.log(audios)
    repeatSound()
    console.log(etapa)
    if(etapa != 1){
        if((etapa - 1) % 5 == 0){
            console.log('etapa')
            switchIcons()
        }
    }
    if(audios.length == 0){
        if(relacaoAcertosQuantidade < 0.34){
            window.location.href = '/Teste/resultadoVermelho.html'
        }else if(relacaoAcertosQuantidade < 0.67){
            window.location.href = '/Teste/resultadoAmarelo.html'
        }else{
            window.location.href = '/Teste/resultadoVerde.html'
        }
    }
}

function switchIcons () {
    if(document.getElementById('numeros').style.display == 'none'){
        document.getElementById('imagens').style.display = 'none'
        document.getElementById('numeros').style.display = 'table-cell'
        iconOptions = 'numeros'
    }else{
        document.getElementById('numeros').style.display = 'none'
        document.getElementById('imagens').style.display = 'table-cell'
        iconOptions = 'imagens'
    }    
}
