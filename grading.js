//  Labarotory 6 - Grade Assessor

function assessGrade(score) {
    // Reject invalid scores first
    if (score < 0 || score > 100) {
        return "Invalid score";
    }
        
    

    //College grading bands 
    if (score >= 90) {
      return "A";  
    } else if (score >= 80) {
      return "B"; 
    } else if (score >= 70) {
      return "C";  
    } else if (score >= 60) {
      return "D"; 
    } else {
        return "F";
    }
}
        
     
// Computing final grade
function computeFinalGrade(midterm, FinalTerm) {
    return (midterm * 0.40) + (FinalTerm * 0.60);
}

// Test examples
console.log("Grade:", assessGrade(95));
console.log("Grade:", assessGrade(85));
console.log("Grade:", assessGrade(75));
console.log("Grade;", assessGrade(65));
     
console.log("Final Grade:", computeFinalGrade(80,90));

