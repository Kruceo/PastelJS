initWoodPicker()
function initWoodPicker() {
    let target = document.querySelector('parallax');
    let scrollTarget = window;
    let isRolling = 'stopped'
    let history = []
    let baseBottom = target.style.marginBottom ?? getComputedStyle(target).marginBottom ?? 0
    scrollTarget.addEventListener('scroll', (e) => {
        let coef = (baseBottom - scrollTarget.scrollY * .75)
        console.log(target.offsetHeight+'  ==  '+(target.offsetHeight + coef).toFixed(0))
        if(target.offsetHeight/2 < target.offsetHeight + coef)
        {
            target.style.marginBottom = coef + 'px'
        }
       
        target.style.position = 'relative'
        target.style.display = 'block'
        
        
    })
}