// Exercice n°12 - Algorithme et structure de données

// Les élèves peuvent utiliser ces deux sites Web pour s'entraîner aux problèmes d'algorithme et de 
// structures de données.
// 1. https://leetcode.com/
// 2. https://www.codewars.com/
// 1. FizzBuzz

// Écrivez un programme court qui imprime chaque nombre de 1 à 100 sur une nouvelle ligne.
// Pour chaque multiple de 3, imprimez "Fizz" à la place du nombre.
// Pour chaque multiple de 5, imprimez "Buzz" à la place du nombre.
// Pour les nombres qui sont des multiples de 3 et de 5, imprimez "FizzBuzz" à la place du nombre.

function algorithme() {
    for (let i = 1; i < 101; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else { console.log(i); }
    }
}

algorithme();