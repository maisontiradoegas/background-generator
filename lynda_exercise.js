//Closures are an inner function that has 
//access to external variables. 
//by creating a function inside a function 
//we create a closure.

//global variable 
var warrior = "Ninja"; 

const screamWarrior = () => {
	let warrior 2 = 'Samurai'; 
	return {
		shootWarrior: () => {
			return console.log(warrior,warrior2);
		}
	}
}

const newWarrior = screamWarrior();

newWarrior.shootWarrior();


// console.log(warrior, warrior2)

