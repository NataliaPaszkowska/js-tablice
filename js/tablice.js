'use strict'

var imiona = ['Monika', 'Krystian', 'Lukasz'];

imiona[3] = 'Tania';
imiona[2] = 'Ela';
/* console.log(imiona); */

imiona.push('Geralt');
/*console.log(imiona);*/

imiona.pop();
imiona.pop();
/* console.log(imiona); */

console.log(imiona.unshift('Robert'));
/* console.log(imiona) */

console.log(imiona.shift('Robert'));
/*console.log(imiona);*/

console.log(imiona);
console.log(imiona.length);

/*for (var i = 0; i < imiona.length ; i++) {
	console.log( imiona[i] );
}*/

imiona.forEach(function (element, i ) {
			   console.log('Element nr ' + i + ' = ' + element);
			   });

/* metoda join */

/*
console.log( imiona.join(" - ") );
*/

/*imiona.sort(); 
console.log(imiona);*/
/*

imiona.reverse();
console.log(imiona);
*/


var imionaMeskie = ['Hubert', 'Mariusz', 'Andrzej'];
var zbiorImion = imionaMeskie.concat(imiona);
/*console.log(zbiorImion);*/

/*console.log( Array.isArray(zbiorImion) );*/

zbiorImion.splice(2, 3, "Julek", "Krzysiek");

console.log(zbiorImion);

























