$(document).on('ready', function() {

	var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
	var l = animals.length;

	// Print all but last
	console.log("PROBLEM 1:");
	for (var i = 0; i < l-1; i++) {
		console.log(animals[i]);
	}

	// Problem 2 - Print EVEN array contents
	console.log("PROBLEM 2:");
	for (var i = 0; i < l; i++) {
		if (i%2 === 0)
			console.log(animals[i]);
	}

	// Problem 3 - Print backwards
	console.log("PROBLEM 3:");
	for (var i = l-1; i >= 0; i--) {
		console.log(animals[i]);
	}

	// Problem 4 - Print 1x of first and last, 2x of inner's
	console.log("PROBLEM 4:");
	for (var i = 0; i < l; i++) {
		if (i > 0 && i < 4) {
			console.log(animals[i]);
			console.log(animals[i]);
		}
		else
			console.log(animals[i]);
	};
  
});