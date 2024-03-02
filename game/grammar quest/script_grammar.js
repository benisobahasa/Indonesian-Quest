const sentences = [
    { sentence: "Dia bermain sepak bola.", correct: "bermain" },
    { sentence: "Saya membaca buku.", correct: "membaca" },
    { sentence: "Mereka bekerja di kantor hari ini.", correct: "bekerja" },
    { sentence: "Saya akan berkunjung ke rumah nenek.", correct: "berkunjung" },
    { sentence: "Mereka memancing di sungai.", correct: "memancing" }
];

let currentSentenceIndex = 0;

const sentenceDisplay = document.getElementById("sentence-display");
const optionsContainer = document.getElementById("options-container");
const resultDisplay = document.getElementById("result");
const nextButton = document.getElementById("next-button");

// Function to display a new sentence and options
function displaySentence() {
    const currentSentence = sentences[currentSentenceIndex];
    sentenceDisplay.textContent = currentSentence.sentence;

    optionsContainer.innerHTML = ""; // Clear previous options

    // Create options for verb choices
    const options = shuffleOptions([
        currentSentence.correct,
        getIncorrectVerb(currentSentence.correct),
        getIncorrectVerb(currentSentence.correct),
        getIncorrectVerb(currentSentence.correct)
    ]);
    options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option === currentSentence.correct));
        optionsContainer.appendChild(button);
    });
}

// Function to get an incorrect verb choice
function getIncorrectVerb(correctVerb) {
    const incorrectVerbs = [
        "memainkan", "dikerjakan", "dikunjungi", "dibaca", "mengerjakan", "melihat", "menatap"
    ];
    const randomIncorrectVerb = incorrectVerbs[Math.floor(Math.random() * incorrectVerbs.length)];
    return randomIncorrectVerb === correctVerb ? getIncorrectVerb(correctVerb) : randomIncorrectVerb;
}

// Function to check the answer
function checkAnswer(isCorrect) {
    if (isCorrect) {
        resultDisplay.textContent = "Correct!";
    } else {
        resultDisplay.textContent = "Incorrect. Try again!";
    }
}

// Function to shuffle options array
function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
}

// Event listener for next button
nextButton.addEventListener("click", () => {
    currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
    displaySentence();
    resultDisplay.textContent = "";
});

// Display the first sentence when the page loads
displaySentence();
