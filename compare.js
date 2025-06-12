//3.Comparision Operator

//Comparision Operators
let a=10;
let b="10";
let c=20;

//Equal(loose)
console.log(a==b); //true->value is same,type is ignored

//Equal(strict)
console.log(a===b); //false->value is same,but the type is different

//not equal(loose)
console.log(a!=b); //false->values are equal ,so not equal is false

// Not Equal (strict)
console.log(a !== b);  // true → values are equal, but types are different

// Greater than
console.log(c > a);    // true → 20 > 10

// Less than
console.log(a < c);    // true → 10 < 20

// Greater than or equal to
console.log(a >= 10);  // true

// Less than or equal to
console.log(a <= 5);   // false


//4. Logical Operators
//Used in conditions (if, while, etc.) to combine or invert boolean values.


let x = true;
let y = false;

// Logical AND
console.log(x && y);  // false → both must be true

// Logical OR
console.log(x || y);  // true → at least one must be true

// Logical NOT
console.log(!x);      // false → inverts true to false
/*Operator	Name	Description	Example	Result
&&	Logical AND	True if both are true	true && false	false
`		`	Logical OR	True if any one is true
!	Logical NOT	Inverts true/false	!true	false*/

//5. Bitwise Operators
//Work at binary (bit) level. Numbers are converted to 32-bit binary first.


let a = 5;   // binary: 0101
let b = 3;   // binary: 0011

console.log(a & b);  // 1 → 0101 & 0011 = 0001
console.log(a | b);  // 7 → 0101 | 0011 = 0111
console.log(a ^ b);  // 6 → 0101 ^ 0011 = 0110
console.log(~a);     // -6 → NOT 0101 = 1010 (2's complement)
console.log(a << 1); // 10 → 0101 becomes 1010
console.log(a >> 1); // 2 → 0101 becomes 0010
/*Operator	Name	Description
&	Bitwise AND	1 only if both bits are 1
`	`	Bitwise OR
^	Bitwise XOR	1 if bits are different
~	Bitwise NOT	Inverts each bit
<<	Left Shift	Shifts bits to the left
>>	Right Shift	Shifts bits to the right
>>>	Zero-fill Right Shift	Fills left bits with 0 (unsigned) */