// Lista della spesa con ciclo while


// data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo for (da commentare)

// fare lo stesso con il while (da lasciare attivo)


// creare lista spesa
const foodList = ['pane', 'yogurt', 'pasta', 'uova', 'latte'];

// for (let i = 0; i < foodList.length; i++){
    // console.log(foodList[i]);
// }

let ul = document.querySelector('ul.food-list');
let li = document.createElement('li');

let i = 0;
while (i < foodList.length){
    li.append(foodList[i]); 
    ul.append(li);
    
    console.log(foodList[i]);
    i++;
}



