export function initAllWoodPicker()
{
    document.querySelectorAll('parallax').forEach((each)=>
    {
        initWoodPicker(each)
    })
}


export function initWoodPicker(element) {
    let target = element
    let scrollTarget = window;
    let isRolling = 'stopped'
    let history = []
   
    let baseBottom = target.style.marginBottom ?? getComputedStyle(target).marginBottom ?? 0
    
    scrollTarget.addEventListener('scroll', (e) => {
       
    
        let marginToAdd = target.offsetTop + (baseBottom - scrollTarget.scrollY * 1)
        let limit = (target.offsetTop + target.offsetHeight)+ marginToAdd
        let coef = target.offsetHeight - marginToAdd;
        let screenHeight = window.visualViewport.height
        let scrollB = scrollTarget.scrollY + screenHeight
        let isInScreen = false
        //HTMLDivElement.prototype.style.transition
        isInScreen = false
        if(limit > scrollTarget.scrollY && target.offsetTop < scrollB)
        {
            target.style.marginBottom = marginToAdd * .75 + 'px'
            target.style.marginTop = -marginToAdd * .75 + 'px'
            isInScreen = true
           
           
        }
        
    })
    target.style.position = 'relative'
    target.style.display = 'block'
    target.style.transition = "margin .25s cubic-bezier(0.165, 0.84, 0.44, 1)"
    scrollTarget.dispatchEvent(new Event('scroll'))
}

function debugCreate(color,name)
{
    let test = document.createElement('a')
    test.style.position = 'absolute'
    test.style.color = color??'red'
    test.innerHTML = ("#".repeat(150))
    document.body.appendChild(test)
    return test
}