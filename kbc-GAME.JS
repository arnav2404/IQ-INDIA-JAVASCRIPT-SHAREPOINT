// KBC Game in JavaScript

function startGame() {
    document.write("<h1>Welcome to Kaun Banega Crorepati (KBC)!</h1>");
    const userInput = prompt("Would you like to start the game? (yes/no): ").trim().toLowerCase();

    if (userInput !== 'yes') {
        document.write("<p>Thank you! Come back soon!</p>");
        return;
    }

    // Questions, options, and answers
    const questions = [
        {
            question: "What is the capital of India?",
            options: ["A. Mumbai", "B. New Delhi", "C. Kolkata", "D. Chennai"],
            answer: "B"
        },
        {
            question: "Who is known as the father of the Indian Constitution?",
            options: ["A. Mahatma Gandhi", "B. B. R. Ambedkar", "C. Jawaharlal Nehru", "D. Subhash Chandra Bose"],
            answer: "B"
        },
        {
            question: "Which is the largest planet in our solar system?",
            options: ["A. Earth", "B. Jupiter", "C. Saturn", "D. Mars"],
            answer: "B"
        },
        {
            question: "Which Indian cricketer is known as the 'God of Cricket'?",
            options: ["A. Virat Kohli", "B. MS Dhoni", "C. Sachin Tendulkar", "D. Rahul Dravid"],
            answer: "C"
        },
        {
            question: "What is the national animal of India?",
            options: ["A. Lion", "B. Tiger", "C. Elephant", "D. Peacock"],
            answer: "B"
        }
    ];

    const scores = [1000, 2000, 3000, 5000, 10000];
    let totalScore = 0;
    let correctAnswers = 0;
    let skippedQuestions = 0;
    let wrongAnswers = 0;

    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        document.write(`<h2>Question ${i + 1}: ${q.question}</h2>`);
        q.options.forEach(option => document.write(`<p>${option}</p>`));

        const userAnswer = prompt("Enter your answer (A/B/C/D) or type 'skip' to skip: ").trim().toUpperCase();

        if (userAnswer === 'SKIP') {
            document.write("<p>You chose to skip this question.</p>");
            skippedQuestions++;
            continue;
        }

        if (userAnswer === q.answer) {
            document.write("<p>Correct Answer!</p>");
            totalScore += scores[i];
            correctAnswers++;
        } else {
            document.write("<p>Wrong Answer!</p>");
            wrongAnswers++;
        }
    }

    // Game summary
    document.write("<h2>--- Game Over ---</h2>");
    document.write(`<p>Total Score: ${totalScore}</p>`);
    document.write(`<p>Correct Answers: ${correctAnswers}</p>`);
    document.write(`<p>Skipped Questions: ${skippedQuestions}</p>`);
    document.write(`<p>Wrong Answers: ${wrongAnswers}</p>`);

    // Feedback
    const feedback = prompt("How would you rate the game? (1-5 stars): ").trim();
    const rating = parseInt(feedback, 10);

    if (!isNaN(rating) && rating >= 1 && rating <= 5) {
        document.write(`<p>Thank you for your ${rating}-star rating!</p>`);
    } else {
        document.write("<p>Invalid rating. Thank you for playing!</p>");
    }
}

// Start the KBC game
startGame();