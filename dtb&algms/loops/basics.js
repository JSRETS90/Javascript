let list = [
    'milk',
    'eggs',
    'butter',
    'bacon',
    'juice'
];

/*for (init; con; incre) {
    //code
}*/

let html = '';

for (let index = 0; index < list.length; index++) {
    html += `<li>${list[index]}</li>`;
}


document.getElementById('list').innerHTML = html;