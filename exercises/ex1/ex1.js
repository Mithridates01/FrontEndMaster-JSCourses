(function() {

A();

function C() {
	console.log("OOPS!");
	C();
}

function E(f) {
	console.log("E");
	// var f = F;
	f();
}

function A() {
	console.log("A");
	B();
};

var C;

function G() {
	console.log("G");
	H();

	function H() {
		console.log("H");
		I();
	};
}

// var D = d();

function D() {
	console.log("D");
	E(F);
}

function I() {
	console.log("I");
	J();
	K();
}

function B() {
	console.log("B");
	C();
};

function F() {
	console.log("F");
	G();
};

function K() { 
	var rest = "KLMNOPQRSTUVWXYZ".split("");

	for (var i=0; i<rest.length; i++) {
		(function(i){
			// define the current function
			window[rest[i]] = function() {
				console.log(rest[i]);
				if (i < (rest.length-1)) {
					// TODO: call the next function
				}
			};
		})(i);
	}
}


function J() {
	J = function() {
		console.log("J");
		K();
	};
};

function C() {
	console.log("C");
	D();
};

})()
