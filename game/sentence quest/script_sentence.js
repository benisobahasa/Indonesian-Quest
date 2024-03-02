const sentences = [
    { sentence: "Anak-anak sedang ___ bola di lapangan.", correct: "bermain" },
    { sentence: "Dia akan ___ ke pasar besok.", correct: "pergi" },
    { sentence: "Ibu ___ di dapur.", correct: "memasak" },
    { sentence: "Saya suka ___ buku di waktu luang.", correct: "membaca" },
    { sentence: "Mereka sedang ___ siang di kantin.", correct: "makan" }
];

let currentSentenceIndex = 0;

const sentenceDisplay = document.getElementById("sentence-display");
const answerInput = document.getElementById("answer-input");
const checkButton = document.getElementById("check-button");
const resultDisplay = document.getElementById("result");
const nextButton = document.getElementById("next-button");


function displaySentence() {
    const currentSentence = sentences[currentSentenceIndex];
    sentenceDisplay.textContent = currentSentence.sentence;
    answerInput.value = ""; // Clear previous answer
    resultDisplay.textContent = ""; // Clear previous result
}

// Function to check the answer
function checkAnswer() {
    const currentSentence = sentences[currentSentenceIndex];
    const userAnswer = answerInput.value.trim().toLowerCase();
    if (userAnswer === currentSentence.correct) {
        resultDisplay.textContent = "Correct!";
    } else {
        resultDisplay.textContent = "Wrong. Try again!";
    }
}

// Event listeners
checkButton.addEventListener("click", checkAnswer);
nextButton.addEventListener("click", () => {
    currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
    displaySentence();
});

// Display the first sentence when the page loads
displaySentence();
