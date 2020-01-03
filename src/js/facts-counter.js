// Facts counter
let numbers = document.querySelectorAll('.some-facts .number');
let facts = document.querySelector('.some-facts');
facts.addEventListener('mouseover', factsCount);
function factsCount() {
    let start = 0;
    let time = 2500;
    count(start, time, 3200, numbers[0], 50);
    count(start, time, 120, numbers[1], 10);
    count(start, time, 360, numbers[2], 20);
    count(start, time, 42, numbers[3], 1);

    function count(count, time, max, elem, iterator) {
        let interval = time/(max/iterator);
        let timer = setInterval(function () {
            elem.innerHTML = count;
            count += iterator;
            if (count > max) clearInterval(timer);
        }, interval);
    }
    facts.removeEventListener('mouseover', factsCount);
}