$(document).ready(function () {
	function compare3 (a, b, c) {			
    	if ((a > b) && (b > c)) {
			a *= 20;
			b *= 10;
			c *= 5; 
			console.log("Order ABC: a = " + a + "; b = " + b + "; c = " + c + ";" );
		} if ((a > c) && (c > b)) {
			a *= 20;
			c *= 10;
			b *= 5;
			console.log("Order ACB: a = " + a + "; c = " + c + "; b = " + b + ";" );
		} if ((b > a) && (a > c)) {
			b *= 20;
			a *= 10;
			c *= 5;
			console.log("Order BAC: b = " + b + "; a = " + a + "; c = " + c + ";" );
		} if ((b > c) && (c > a)) {
			b *= 20;
			c *= 10;
			a *= 5;
			console.log("Order BCA: b = " + b + "; c = " + c + "; a = " + a + ";" );
		} if ((c > a) && (a > b)) {
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
		} if ((a > c) && (c > b) && (b > d)) {
			a *= 20;
			c *= 10;
			b *= 5;
			console.log("Order ACBD: a = " + a + "; c = " + c + "; b = " + b + "; d = " + d + ";" );
		} if ((b > a) && (a > c) && (c > d)) {
			b *= 20;
			a *= 10;
			c *= 5;
			console.log("Order BACD: b = " + b + "; a = " + a + "; c = " + c + "; d = " + d + ";" );
		} if ((b > c) && (c > a) && (a > d)) {
			b *= 20;
			c *= 10;
			a *= 5;
			console.log("Order BCAD: b = " + b + "; c = " + c + "; a = " + a + "; d = " + d + ";" );
		} if ((c > a) && (a > b) && (b > d)) {
			c *= 20;
			a *= 10;
			b *= 5;
			console.log("Order CABD: c = " + c + "; a = " + a + "; b = " + b + "; d = " + d + ";" );
		} if ((c > b) && (b > a) && (a > d)) {
			c *= 20;
			b *= 10;
			a *= 5;
			console.log("Order CBAD: c = " + c + "; b = " + b + "; a = " + a + "; d = " + d + ";" );
		} if ((d > a) && (a > b) && (b > c)) {
			d *= 20;
			a *= 10;
			b *= 5;
			console.log("Order DABC: d = " + d + "; a = " + a + "; b = " + b + "; c = " + c + ";" );
		} if ((d > b) && (b > a) && (a > c)) {
			d *= 20;
			b *= 10;
			a *= 5;
			console.log("Order DBAC: d = " + d + "; b = " + b + "; a = " + a + "; c = " + c + ";" );
		} if ((d > c) && (c > a) && (a > b)) {
			d *= 20;
			c *= 10;
			a *= 5;
			console.log("Order DCAB: d = " + d + "; c = " + c + "; a = " + a + "; b = " + b + ";" );
		} if ((d > a) && (a > c) && (c > b)) {
			d *= 20;
			a *= 10;
			c *= 5;
			console.log("Order DACB: d = " + d + "; a = " + a + "; c = " + c + "; b = " + b + ";" );
		} if ((d > b) && (b > c) && (c > a)) {
			d *= 20;
			b *= 10;
			c *= 5;
			console.log("Order DBCA: d = " + d + "; b = " + b + "; c = " + c + "; a = " + a + ";" );
		} else {
			d *= 20;
			c *= 10;
			b *= 5;
			console.log("Order DCBA: d = " + d + "; c = " + c + "; b = " + b + "; a = " + a + ";" );
		} 
	}
});