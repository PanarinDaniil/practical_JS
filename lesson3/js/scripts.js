show();
if ((a === "") || (b === "") || (c === "") || (d === "") || (a == null) || (b == null) || (c == null) || (d == null)) {
	console.error("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
	console.warn("One or more variables were empty or null. So, they have been rewriten to the default!");
	console.error("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
	a = 10;
	b = 3;
	c = 40;
	d = 20;
	show();
	compare3(a, b, c);
	compare4(a, b, c, d);
} else {
	toDigit();
	compare3(a, b, c);
	compare4(a, b, c, d);
}
function show (){
	console.log("Variable a = " + a + ";");
	console.log("Variable b = " + b + ";");
	console.log("Variable c = " + c + ";");
	console.log("Variable d = " + d + ";");
}
function toDigit (){
	a = +a;
	b = +b;
	c = +c;
	d = +d;
}
function compare3 (a, b, c) {
	if ((a > b) && (b > c)) {
		a *= 20;
		b *= 10;
		c *= 5; 
		console.log("Order ABC: a = " + a + "; b = " + b + "; c = " + c + ";" );
	} else if ((a > c) && (c > b)) {
		a *= 20;
		c *= 10;
		b *= 5;
		console.log("Order ACB: a = " + a + "; c = " + c + "; b = " + b + ";" );
	} else if ((b > a) && (a > c)) {
		b *= 20;
		a *= 10;
		c *= 5;
		console.log("Order BAC: b = " + b + "; a = " + a + "; c = " + c + ";" );
	} else if ((b > c) && (c > a)) {
		b *= 20;
		c *= 10;
		a *= 5;
		console.log("Order BCA: b = " + b + "; c = " + c + "; a = " + a + ";" );
	} else if ((c > a) && (a > b)) {
		c *= 20;
		a *= 10;
		b *= 5;
		console.log("Order CAB: c = " + c + "; a = " + a + "; b = " + b + ";" );
	} else {
		c *= 20;
		b *= 10;
		a *= 5;
		console.log("Order CBA: c = " + c + "; b = " + b + "; a = " + a + ";" );
	}
}
function compare4 (a, b, c, d) {
	if ((a > b) && (b > c) && (c > d)) {
		a *= 20;
		b *= 10;
		c *= 5; 
		console.log("Order ABCD: a = " + a + "; b = " + b + "; c = " + c + "; d = " + d + ";" );
	} else if ((a > c) && (c > b) && (b > d)) {
		a *= 20;
		c *= 10;
		b *= 5;
		console.log("Order ACBD: a = " + a + "; c = " + c + "; b = " + b + "; d = " + d + ";" );
	} else if ((a > d) && (d > b) && (b > c)) {
		a *= 20;
		d *= 10;
		b *= 5;
		console.log("Order ADBC: a = " + a + "; d = " + d + "; b = " + b + "; c = " + c + ";" );
	} else if ((a > d) && (d > c) && (c > b)) {
		a *= 20;
		d *= 10;
		c *= 5;
		console.log("Order ADCB: a = " + a + "; d = " + d + "; c = " + c + "; b = " + b + ";" );
	} else if ((a > b) && (b > d) && (d > c)) {
		a *= 20;
		b *= 10;
		d *= 5;
		console.log("Order ABDC: a = " + a + "; b = " + b + "; d = " + d + "; c = " + c + ";" );
	} else if ((a > c) && (c > d) && (d > b)) {
		a *= 20;
		c *= 10;
		d *= 5;
		console.log("Order ACDB: a = " + a + "; c = " + c + "; d = " + d + "; b = " + b + ";" );
	} else if ((b > a) && (a > c) && (c > d)) {
		b *= 20;
		a *= 10;
		c *= 5;
		console.log("Order BACD: b = " + b + "; a = " + a + "; c = " + c + "; d = " + d + ";" );
	} else if ((b > c) && (c > a) && (a > d)) {
		b *= 20;
		c *= 10;
		a *= 5;
		console.log("Order BCAD: b = " + b + "; c = " + c + "; a = " + a + "; d = " + d + ";" );
	} else if ((b > d) && (d > a) && (a > c)) {
		b *= 20;
		d *= 10;
		a *= 5;
		console.log("Order BDAC: b = " + b + "; d = " + d + "; a = " + a + "; c = " + c + ";" );
	} else if ((b > d) && (d > c) && (c > a)) {
		b *= 20;
		d *= 10;
		c *= 5;
		console.log("Order BDCA: b = " + b + "; d = " + d + "; c = " + c + "; a = " + a + ";" );
	} else if ((b > a) && (a > d) && (d > c)) {
		b *= 20;
		a *= 10;
		d *= 5;
		console.log("Order BADC: b = " + b + "; a = " + a + "; d = " + d + "; c = " + c + ";" );
	} else if ((b > c) && (c > d) && (d > a)) {
		b *= 20;
		c *= 10;
		d *= 5;
		console.log("Order BCDA: b = " + b + "; c = " + c + "; d = " + d + "; a = " + a + ";" );
	} else if ((c > a) && (a > b) && (b > d)) {
		c *= 20;
		a *= 10;
		b *= 5;
		console.log("Order CABD: c = " + c + "; a = " + a + "; b = " + b + "; d = " + d + ";" );
	} else if ((c > a) && (a > d) && (d > b)) {
		c *= 20;
		a *= 10;
		d *= 5;
		console.log("Order CADB: c = " + c + "; a = " + a + "; d = " + d + "; b = " + b + ";" );
	} else if ((c > b) && (b > a) && (a > d)) {
		c *= 20;
		b *= 10;
		a *= 5;
		console.log("Order CBAD: c = " + c + "; b = " + b + "; a = " + a + "; d = " + d + ";" );
	} else if ((c > b) && (b > d) && (d > a)) {
		c *= 20;
		b *= 10;
		d *= 5;
		console.log("Order CBDA: c = " + c + "; b = " + b + "; d = " + d + "; a = " + a + ";" );
	} else if ((c > d) && (d > a) && (a > b)) {
		c *= 20;
		d *= 10;
		a *= 5;
		console.log("Order CDAB: c = " + c + "; d = " + d + "; a = " + a + "; b = " + b + ";" );
	} else if ((c > d) && (d > b) && (b > a)) {
		c *= 20;
		d *= 10;
		b *= 5;
		console.log("Order CDBA: c = " + c + "; d = " + d + "; b = " + b + "; a = " + a + ";" );
	} else if ((d > a) && (a > b) && (b > c)) {
		d *= 20;
		a *= 10;
		b *= 5;
		console.log("Order DABC: d = " + d + "; a = " + a + "; b = " + b + "; c = " + c + ";" );
	} else if ((d > a) && (a > c) && (c > b)) {
		d *= 20;
		a *= 10;
		c *= 5;
		console.log("Order DACB: d = " + d + "; a = " + a + "; c = " + c + "; b = " + b + ";" );
	} else if ((d > b) && (b > a) && (a > c)) {
		d *= 20;
		b *= 10;
		a *= 5;
		console.log("Order DBAC: d = " + d + "; b = " + b + "; a = " + a + "; c = " + c + ";" );
	} else if ((d > b) && (b > c) && (c > a)) {
		d *= 20;
		b *= 10;
		c *= 5;
		console.log("Order DBCA: d = " + d + "; b = " + b + "; c = " + c + "; a = " + a + ";" );
	} else if ((d > c) && (c > a) && (a > b)) {
		d *= 20;
		c *= 10;
		a *= 5;
		console.log("Order DCAB: d = " + d + "; c = " + c + "; a = " + a + "; b = " + b + ";" );
	} else {
		d *= 20;
		c *= 10;
		b *= 5;
		console.log("Order DCBA: d = " + d + "; c = " + c + "; b = " + b + "; a = " + a + ";" );
	}
}