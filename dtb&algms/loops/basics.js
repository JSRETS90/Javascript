let list = [
    {text: 'milk', cost: 4, need: false },
    {text: 'eggs', cost: 10, need: true },
    {text: 'butter', cost: 5, need: false },
    {text: 'bread', cost: 3, need: true },
    {text: 'bacon', cost: 12, need: true }
];

/*for (init; con; incre) {
    //code
}*/

let html = '';
let total = 0;

for (let index = 0; index < list.length; index++) {
    let item = list[index];

        if (item.need) {
        html += `<li>${item.text}</li>`;
        total += item.cost;
     }      
    }


document.getElementById('list').innerHTML = html;
document.getElementById('cost').innerHTML = `$${total}`;