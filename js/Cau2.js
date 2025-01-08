// Test Data 1
console.log("Test dữ liệu 1 \n");

var massMark = 78;
var massJohn = 92;
var heightMark = 1.69;
var heightJohn = 1.95;

var markBMI = (massMark/(heightMark*heightMark));
var johnBMI = (massJohn/(heightJohn*heightJohn));

if (markBMI > johnBMI) {
  console.log("Mark's BMI "+markBMI+ " is higher than John's "+johnBMI);
} else {
  console.log("John's BMI "+johnBMI+  " is higher than Mark's "+markBMI);
}

// Test Data 2
console.log("Test dữ liệu 2 \n");

var massMark2 = 95;
var massJohn2 = 85;
var heightMark2 = 1.88;
var heightJohn2 = 1.76;

var markBMI2 = (massMark2/(heightMark2*heightMark2));
var johnBMI2 = (massJohn2/(heightJohn2*heightJohn2));

if (markBMI2 > johnBMI2) {
    console.log("Mark's BMI "+markBMI2+ " is higher than John's "+johnBMI2);
} else {
    console.log("John's BMI "+johnBMI2+ " is higher than Mark's "+markBMI2);
}
