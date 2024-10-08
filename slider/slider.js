(function() {
    const sliders = [...document.querySelectorAll('.slider_body')];
    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#before');
    let value;

    arrowNext.addEventListener('click', ()=>changePosition(1));
    arrowBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change) {
        const currentElement = Number(document.querySelector('.slider_body--show').dataset.id);

        value = currentElement;
        value+= change;

        console.log (value)
    }
    
})()