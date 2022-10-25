
export function initWoodPicker() {
    let target = document.querySelector('parallax');
    let scrollTarget = window;
    let isRolling = 'stopped'
    let history = []
    let baseBottom = target.style.marginBottom ?? getComputedStyle(target).marginBottom ?? 0
    scrollTarget.addEventListener('scroll', (e) => {
        let coef = (baseBottom - scrollTarget.scrollY * 1)
        let limit = (window.visualViewport.height - target.offsetHeight/1.5) < target.offsetHeight + coef
        console.log(coef,target.offsetHeight* 0.75)
        if(limit)
        {
            target.style.marginBottom = coef + 'px'
        }
       
        target.style.position = 'relative'
        target.style.display = 'block'
        
        
    })
}