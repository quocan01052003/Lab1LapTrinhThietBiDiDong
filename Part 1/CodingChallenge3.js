// Function to calculate average score
function calculateAverage(scores) {
    const sum = scores.reduce((acc, score) => acc + score, 0);
    return sum / scores.length;
}

// Function to determine the winner based on given conditions
function determineWinner(dolphinsScores, koalasScores) {
    const dolphinsAverage = calculateAverage(dolphinsScores);
    const koalasAverage = calculateAverage(koalasScores);
    
    console.log(`Dolphins' average score: ${dolphinsAverage}`);
    console.log(`Koalas' average score: ${koalasAverage}`);
    
    // Task 2: Compare average scores
    if (dolphinsAverage > koalasAverage) {
        console.log("Dolphins win!");
    } else if (koalasAverage > dolphinsAverage) {
        console.log("Koalas win!");
    } else {
        console.log("It's a draw!");
    }
}

// Bonus 1: Include minimum score requirement of 100
function determineWinnerWithMinScore(dolphinsScores, koalasScores) {
    const dolphinsAverage = calculateAverage(dolphinsScores);
    const koalasAverage = calculateAverage(koalasScores);
    
    console.log(`Dolphins' average score: ${dolphinsAverage}`);
    console.log(`Koalas' average score: ${koalasAverage}`);
    
    // Check minimum score requirement
    if (dolphinsAverage >= 100 && koalasAverage >= 100) {
        if (dolphinsAverage > koalasAverage) {
            console.log("Dolphins win!");
        } else if (koalasAverage > dolphinsAverage) {
            console.log("Koalas win!");
        } else {
            console.log("It's a draw!");
        }
    } else {
        console.log("No team wins the trophy due to minimum score requirement.");
    }
}

// Bonus 2: Minimum score requirement also applies to a draw
function determineWinnerWithMinScoreForDraw(dolphinsScores, koalasScores) {
    const dolphinsAverage = calculateAverage(dolphinsScores);
    const koalasAverage = calculateAverage(koalasScores);
    
    console.log(`Dolphins' average score: ${dolphinsAverage}`);
    console.log(`Koalas' average score: ${koalasAverage}`);
    
    if (dolphinsAverage >= 100 && koalasAverage >= 100) {
        if (dolphinsAverage > koalasAverage) {
            console.log("Dolphins win!");
        } else if (koalasAverage > dolphinsAverage) {
            console.log("Koalas win!");
        } else if (dolphinsAverage === koalasAverage) {
            console.log("It's a draw!");
        }
    } else {
        console.log("No team wins the trophy due to minimum score requirement.");
    }
}

// Test Data 1
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];
determineWinner(dolphinsScores1, koalasScores1);

// Bonus 1 Test Data
const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];
determineWinnerWithMinScore(dolphinsScoresBonus1, koalasScoresBonus1);

// Bonus 2 Test Data
const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];
determineWinnerWithMinScoreForDraw(dolphinsScoresBonus2, koalasScoresBonus2);
