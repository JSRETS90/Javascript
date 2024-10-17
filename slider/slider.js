(function () {
    const sliders = [...document.querySelectorAll('.slider_body')];
    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#before');
    let value;

    arrowNext.addEventListener('click', () => changePosition(1));
    arrowBefore.addEventListener('click', () => changePosition(-1));

    function changePosition(change) {
        const currentElement = Number(document.querySelector('.slider_body--show').dataset.id);

        value = currentElement;
        value += change;

        if (value === 0 || value === sliders.length + 1) {
            value = value === 0 ? sliders.length : 1;
        }

        // Remove the current slider's active class
        sliders[currentElement - 1].classList.remove('slider_body--show');
        
        // Add the active class to the new slider
        sliders[value - 1].classList.add('slider_body--show');
    }
})();
