
let yourScore = 85;  // Change this value to test different inputs

// Friend's score
let friendScore = 75;  // Change this value to test different inputs

// Calculate your grade based on your score
if (yourScore >= 90 && yourScore <= 100) {
    console.log("Your grade is: A");
} else if (yourScore >= 80 && yourScore < 90) {
    console.log("Your grade is: B");
} else if (yourScore >= 70 && yourScore < 80) {
    console.log("Your grade is: C");
} else if (yourScore >= 60 && yourScore < 70) {
    console.log("Your grade is: D");
} else if (yourScore >= 0 && yourScore < 60) {
    console.log("Your grade is: F");
} else {
    console.log("Invalid score");
}

// Nested conditions based on your score and your friend's score
if (yourScore >= 80) {
    // Check friend's score
    if (friendScore > 80) {
        console.log("Your friend scored more than 80. Go for a lunch!");
    } else if (friendScore >= 60 && friendScore <= 80) {
        console.log("Your friend scored between 60 and 80. Good luck next time!");
    } else if (friendScore >= 40 && friendScore < 60) {
        console.log("Your friend scored between 40 and 60. Keep your friend's message unseen.");
    } else if (friendScore < 40) {
        console.log("Your friend scored less than 40. Block your friend!");
    }
} else {
    // If you score less than 80
    console.log("You scored less than 80. Go home and sleep, act sad.");
}
