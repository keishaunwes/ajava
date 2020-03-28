

for (i = 1; i <= 100; i++) {
    $(`body`).append(`<h3 class = "${i}" >Accusation ${i}</h3>`);
    $(`.${i}`).click(clickHandler(i));
}

function clickHandler(i) {
    return function () {
        alert(`Accusation ${i}: I accuse ${killer[i % killer.length] }, 
        with the ${ weapons[i % weapons.length]} in the ${locations[i % locations.length]}!`);
    }
}

var locations = [ //15
    'Front split parlors',
    'living room',
    'dining room',
    'family room',
    'kitchen',
    'pantry',
    'mudroom',
    'butler pantry',
    'study',
    'security room',
    'conservatory',
    'bathrooms',
    'library',
    'great hall',
    'pool house'
]

var killer = [ //8
    'Ted Bundy',
    'Andrei Chikatilo',
    'Jeffrey Dahmer',
    'Albert Fish',
    'John Wayne Gacy',
    'Jack the Ripper',
    'Joachim Kroll',
    'Pedro López',
]

var weapons = [ //20
    'Dumbbell',
    'Belt',
    'Scissors',
    'Gym Equipment',
    'Pickle Jar',
    'Fireplace Poker',
    'Sock',
    'Dessert Spoon',
    'Crucifix',
    'Guitar String',
    'Crucifix',
    'Toilet Lid',
    'Sweatpants',
    'Pumpernickel Bread',
    'Jump Rope',
    'Microwave',
    'Banjo',
    'knife',
    'pistol',
    'safe',
]