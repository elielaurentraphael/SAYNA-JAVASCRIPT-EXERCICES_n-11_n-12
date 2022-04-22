// Destructuring
// # destructuration-1.js
// L'affectation par déstructuration est une syntaxe spéciale qui permet de "décomposer" des tableaux ou 
// des objets en un ensemble de variables, ce qui est parfois plus pratique.
// La déstructuration fonctionne également très bien avec les fonctions complexes qui ont beaucoup de 
// paramètres, de valeurs par défaut, etc.

// Objectif de l'exercice : Expression JavaScript qui permet de décomposer des valeurs de tableaux, 
// ou des propriétés d'objets, dans des variables distinctes.

// Énoncé : exécutez le code ci-dessous pour voir le résultat.

let a, b, rest;
[a, b] = [10, 20];
console.log(a);
// résultat attendu : 10
console.log(b);
// résultat attendu : 20
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);
// résultat attendu : Tableau [30,40,50]