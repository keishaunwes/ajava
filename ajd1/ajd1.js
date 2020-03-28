

let fruits = ['apple', 'pen', 'pine'];
//let favFruit;

function printFruits() {
    let favFruit = fruits[2];
    let leasFav = fruits[0];
    let item = fruits[1]
    console.log(fruits[1]);
    printFavFruit();
    
    function printFavFruit() {
        console.log(favFruit,leasFav);
        console.log(leasFav,item)
    }



}

pikotaro()
someFunc();
printFruits();
function someFunc() {
    console.log(`hello`)
}
function pikotaro(){
    alert(`Pen Pineapple Apple Pen!!!`)
}
