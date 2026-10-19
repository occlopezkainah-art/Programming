
 // enrollment.js

const tuitionFee = 450;
const numberOfUnits = 3;
const VAT = 0.12;
const miscellaneousFee = 1200;

const studentName = "Kainah Jay R Lopez";
const studentCourse = "BSIT";
const studentYearLevel = 1;
const isEnrolled = true;

// Calculate tuition and miscellaneous fees
let totalFee = tuitionFee * numberOfUnits;
totalFee = totalFee + miscellaneousFee;

// Add 12% VAT
const totalWithVAT = totalFee + totalFee * VAT;

// Enrollment counter
let enrollmentCount = 0;
enrollmentCount = enrollmentCount + 1;

// Check enrollment status
let enrollmentStatus;

if (isEnrolled === true) {
    enrollmentStatus = "ENROLLED";
} else {
    enrollmentStatus = "NOT ENROLLED";
}

// Display results
console.log("===== STUDENT ENROLLMENT =====");
console.log("Student Name:", studentName);
console.log("Course:", studentCourse);
console.log("Year Level:", studentYearLevel);
console.log("Status:", enrollmentStatus);

console.log("Tuition and Miscellaneous Fees:", totalFee);
console.log("Total Fee with VAT:", totalWithVAT);
console.log("Enrollment Count:", enrollmentCount);
