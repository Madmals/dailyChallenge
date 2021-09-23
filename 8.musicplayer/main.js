


const audio = document.getElementById('aud')
const play = document.querySelector('.play')
const pause = document.querySelectorAll('.pause1')

play.addEventListener('click', () => {
    aud.play()
    play.style.display = "none"
    pause.forEach((pause) => { pause.style.display = "block" })
})




pause.forEach((pauseevey, idx) => {
    pauseevey.addEventListener('click', () => {
        aud.pause()
        play.style.display = "block"
        pauseevey.style.display = "none"
    })
})




