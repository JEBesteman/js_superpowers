const superheroes =
[
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
    ]
//alleen gebruik maken van .map, .fiter en .reduce methods

//1 Maak een array van alle superhelden namen

const superheroNames = superheroes.map(superhero => {
    return superhero.name;
});

console.log(superheroNames);

//2 Maak een array van alle "lichte" superhelden (< 190 pounds)

const lightSuperheros = superheroes.filter(superhero => {
    return superhero.weight < 190;
});

//of
const lightSuperheros = superheroes.filter(superhero => superhero.weight < 190);

console.log(lightSuperheros);
console.log(lightSuperheros.length); //4 aantal

//3 Maak een array met de namen van de superhelden die 200 pounds wegen ==> chaining eerst filter dan map methode

//Deze volgorde anders leeg array!! 
const superheroNamesWeight200Pounds = superheroes
    .filter(superhero => superhero.weight == 200) //gewicht is string en geen number daarom == 
    .map(superhero => superhero.name);

console.log(superheroNamesWeight200Pounds);

//4 Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad "first_appearance"

const superheroFirstAppearances = superheroes.map(superhero => superhero.first_appearance);

console.log(superheroFirstAppearances);      

//5 Maak een array met alle superhelden van DC Comics. Is dat gelukt? 

const superheroDCComics = superheroes.filter(superhero => superhero.publisher === "DC Comics");

console.log(superheroDCComics);
// console.log(superheroDCComics.length);

// Herhaal de bovenstaande functie dan en maak ook een array met alle superhelden van Marvel Comics.
const superheroMarvelComics = superheroes.filter(superhero => superhero.publisher === "Marvel Comics");

console.log(superheroMarvelComics);
// console.log(superheroMarvelComics.length);


//6 Tel het gewicht van alle superhelden van DC Comics bij elkaar op. Let op! Conditionals to the rescue! Het gewicht dat je hier ziet, van welk datatype is dat? Een nummer? Of een string? Oh ja, en hebben alle superhelden wel een gewicht?
//1 array alle DC Comics superhelden
const superheroDCComicsTotalWeight =  superheroDCComics.map(superhero => {
    return superhero.weight !== "unknown" ? parseInt(superhero.weight, 10) : 0;
}).reduce((accumulator, weight) => accumulator + weight);

console.log(superheroDCComicsTotalWeight);

//of
const superheroWeights = superheroDCComics.map(superhero => {
    if (superhero.weight !== "unknown") {
        return parseInt(superhero.weight, 10);
    } else {
        return 0;
    }
});

const addedSuperheroWeights = superheroWeights.reduce((accumulator, weight) => accumulator + weight);

console.log(addedSuperheroWeights);

//7 Doe hetzelfde met alle superhelden van Marvel Comics
const superheroMarvelTotalWeight =  superheroMarvelComics.map(superhero => {
    return superhero.weight !== "unknown" ? parseInt(superhero.weight, 10) : 0;
    }).reduce((accumulator, weight) => accumulator + weight);

console.log(superheroMarvelTotalWeight);


//Bonus: zoek de zwaarste superheld!
//eerst alle waarde weight in numbers zetten en unknown in 0
const allSuperheroes = superheroes.map(superhero => {
    const weight = superhero.weight !== "unknown" ? parseInt(superhero.weight, 10) : 0;
    superhero.weight = weight;
    return superhero;
});
//reduce gebruiken om hoogste waarde te vinden
const heaviestSuperhero = allSuperheroes.reduce(
    (currentHeaviestSuperhero, currentSuperhero) => {
        if (currentSuperhero.weight > currentHeaviestSuperhero.weight) {
            return currentSuperhero;
        } else {
            return currentHeaviestSuperhero
        }
    }, allSuperheroes[0] //dit is de initiele waarde van de functie
);

console.log(heaviestSuperhero);
