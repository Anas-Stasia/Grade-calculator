// Function to get scores with validation
function getScores() {
  const scores = [];
  for (let i = 1; i <= 5; i++) {
    try {
      let score = prompt(`Enter score for subject ${i} (0-100):`);
      score = parseFloat(score);
      if (isNaN(score) || score < 0 || score > 100) {
        throw new Error("Invalid input. Score must be a number between 0 and 100.");
      }
      scores.push(score);
    } catch (error) {
      console.error(error.message);
      // Fallback to hardcoded value if invalid
      scores.push(80); // Example hardcoded value
      console.log("Using hardcoded value of 80 due to invalid input.");
    }
  }
  return scores;
}

// Calculate total and average
const scores = getScores();
let total = 0;
for (let score of scores) {
  total += score;
}
const average = total / scores.length;

// Assign grade
let grade;
if (average >= 90) {
  grade = 'A';
} else if (average >= 80) {
  grade = 'B';
} else if (average >= 70) {
  grade = 'C';
} else if (average >= 60) {
  grade = 'D';
} else {
  grade = 'F';
}

// Output
console.log(`Scores: ${scores.join(', ')}`);
console.log(`Total: ${total}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Grade: ${grade}`);