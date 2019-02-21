let audioA = document.getElementById('audio-A')

let audioS = document.getElementById('audio-S')

let audioD = document.getElementById('audio-D')

let audioF = document.getElementById('audio-F')

let audioG = document.getElementById('audio-G')

let audioH = document.getElementById('audio-H')

let audioJ = document.getElementById('audio-J')

let audioK = document.getElementById('audio-K')

let audioL = document.getElementById('audio-L')

let audioO = document.getElementById('audio-O')

let audioN = document.getElementById('audio-N')


let playSound = (event) => {
    if (event.key == 'a'){
        audioA.currentTime = 0
        audioA.play()
        console.log('a')
    }
    else if (event.key == 's'){
        audioS.currentTime = 0
        audioS.play()
        console.log('s')
    }
    else if (event.key == 'd'){
        audioD.currentTime = 0
        audioD.play()
        console.log('d')
    }
    else if (event.key == 'f'){
        audioF.currentTime = 0
        audioF.play()
        console.log('f')
    }
    else if (event.key == 'g'){
        audioG.currentTime = 0
        audioG.play()
        console.log('g')
    }
    else if (event.key == 'h'){
        audioH.currentTime = 0
        audioH.play()
        console.log('h')
    }
    else if (event.key == 'j'){
        audioJ.currentTime = 0
        audioJ.play()
        console.log('j')
    }
    else if (event.key == 'k'){
        audioK.currentTime = 0
        audioK.play()
        console.log('k')
    }
    else if (event.key == 'l'){
        audioL.currentTime = 0
        audioL.play()
        console.log('l')
    }
    else if (event.key == 'o'){
        audioO.currentTime = 0.54
        audioO.play()
    }
    else if (event.key =='n'){
        audioN.currentTime = 0
        audioN.play()
    }
}

//setTimeout(playSound, 10000)

let keyA = document.getElementById('key-A')

window.addEventListener('keydown', playSound)
