// funcion que suma los elementos de mi array 

let numbers = [1,2,3,4,5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
	sum += numbers[i];
}

function oddEven(sum) {
	if (sum % 2 == 0) {	
		console.log('El resultado de tu producto es par');
	} else {
		console.log('El resultado de tu producto es impar');
	}
}

oddEven(sum);