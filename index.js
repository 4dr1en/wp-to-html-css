


/*header*/

let scroll= (function() {
    let oldScroll= 0;
    return function(){
        if(window.scrollY && !oldScroll){
            const EltHeader= document.getElementsByTagName('header')[0];
            const EltLogo= document.getElementById('mainLogo');
            EltHeader.style.transition= "all 300ms ease-in-out";
            EltHeader.classList.add('deployed');
            EltLogo.src='img/header/logo-2.png';

        }
        else if(!window.scrollY){
            const EltHeader= document.getElementsByTagName('header')[0];
            const EltLogo= document.getElementById('mainLogo');
            EltHeader.style.transition= "all 300ms ease-in-out";
            EltHeader.classList.remove('deployed');
            EltLogo.src='img/header/logo.png';
        } 
        oldScroll= window.scrollY;
    };
})();
window.addEventListener("scroll", scroll);

/*diaporama*/

let EltDiapo1= document.getElementById('diapo__slide1');
let EltDiapo2= document.getElementById('diapo__slide2');

setInterval(flip, 5000);

function flip(){
    let elem1, elem2;
    if(EltDiapo1.classList.item('out')){
        elem1= EltDiapo1; 
        elem2= EltDiapo2;
    }
    else{
        elem1= EltDiapo2; 
        elem2= EltDiapo1;
    }
    elem2.style.transition= "left 0ms 2s";
    elem1.style.transition= "left 800ms ease-in-out";
    elem1.classList.remove('out');
    elem2.classList.add('out');
    
}