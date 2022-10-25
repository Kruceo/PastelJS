
export function initWoodPicker() {
    let target = document.querySelector('parallax');
    let scrollTarget = window;
    let isRolling = 'stopped'
    let history = []
    let baseBottom = target.style.marginBottom ?? getComputedStyle(target).marginBottom ?? 0
    let debug = debugCreate('blue')
    let debu = debugCreate()
    scrollTarget.addEventListener('scroll', (e) => {
       
      


        let marginToAdd = target.offsetTop + (baseBottom - scrollTarget.scrollY * 1)
        let limit = (target.offsetTop + target.offsetHeight)+ marginToAdd
        let coef = target.offsetHeight - marginToAdd;
        let screenHeight = window.visualViewport.height
        let scrollB = scrollTarget.scrollY + scrollTarget.visualViewport.height;
        let isInScreen = false
        HTMLDivElement.prototype
        isInScreen = false
        if(limit > scrollTarget.scrollY && target.offsetTop < scrollB)
        {
            target.style.marginBottom = marginToAdd + 'px'
            isInScreen = true
        }
        console.log(' \nmar:'+marginToAdd.toFixed(0).padEnd(6,' ')
        +' |\n top :',target.offsetTop 
        +' |\n scrT :',scrollTarget.scrollY
        +' |\n scrB:',scrollB
        +' |\n coe :',coef.toFixed(0)
        +' |\n lim :',limit
        +' |\n ini :',target.offsetTop 
        +' |\n show :',isInScreen)
       
       
        debu.style.top = limit+ 'px';
        debug.style.top = target.offsetTop + marginToAdd+ 'px';
        target.style.position = 'relative'
        target.style.display = 'block'
        
        
    })
    document.body.appendChild(test)
    
}

function debugCreate(color,name)
{
    let test = document.createElement('a')
    test.style.position = 'absolute'
    test.style.color = color??'red'
    test.innerHTML = name??'debug'+("=".repeat(100))
    document.body.appendChild(test)
    return test
}