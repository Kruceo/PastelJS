function initWoodPicker(){

let isRolling = 'stopped'
let history = []
let baseBottom = document.querySelector('parallax').style.marginBottom??getComputedStyle(document.querySelector('parallax')).marginBottom??0
window.addEventListener('scroll', (e) => {
    document.querySelector('parallax').style.marginBottom = baseBottom -  window.scrollY *  .75+ 'px'
    document.querySelector('parallax').style.position = 'relative'
    document.querySelector('parallax').style.display = 'block'
    if (document.querySelector('parallax').style.marginBottom < 100) {
        document.querySelector('parallax').style.marginBottom = '100px'
    }
    history.push(window.scrollY.toFixed(0))
    if (history.length > 10) {
        history = []
    }
    if (history[history.length - 1] > history[history.length - 2]) {
        
        isRolling = 'down'
    }
    if (history[history.length - 1] < history[history.length - 2]) {
        
        isRolling = 'up'
    }
    if (history[history.length - 1] == history[history.length - 2]) {
        isRolling = 'stopped'
    }
    console.log(isRolling)
})

    `
1000 = 100
333 = x

333 * 100
1000

`
}