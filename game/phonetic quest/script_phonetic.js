const words = [
    { word: "mata", phonetic: "ma.ta" },
    { word: "rumah", phonetic: "ru.mah" },
    { word: "pohon", phonetic: "po.hon" },
    { word: "kucing", phonetic: "ku.cing" },
    { word: "mobil", phonetic: "mo.bil" }
];

let currentWordIndex = 0;

const wordDisplay = document.getElementById("word-display");
const optionsContainer = document.getElementById("options-container");
const resultDisplay = document.getElementById("result");
const nextButton = document.getElementById("next-button");

// Function to display a new word and options
function displayWord() {
    const currentWord = words[currentWordIndex];
    wordDisplay.textContent = currentWord.word;

    optionsContainer.innerHTML = ""; // Clear previous options

    // Generate related options based on phonetics of other words
    const relatedOptions = generateRelatedOptions(currentWord);
    relatedOptions.push(currentWord.phonetic); // Add correct option
    const shuffledOptions = shuffleOptions(relatedOptions);

    shuffledOptions.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option === currentWord.phonetic));
        optionsContainer.appendChild(button);
    });
}

// Function to generate related options based on phonetics of other words
function generateRelatedOptions(currentWord) {
    const relatedOptions = [];
    words.forEach(word => {
        if (word.word !== currentWord.word) {
            relatedOptions.push(word.phonetic);
            const splitPhonetic = word.phonetic.split('.');
            relatedOptions.push(splitPhonetic[1] + '.' + splitPhonetic[0]);
        }
    });
    return relatedOptions;
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
    currentWordIndex = (currentWordIndex + 1) % words.length;
    displayWord();
    resultDisplay.textContent = "";
});

// Display the first word when the page loads
displayWord();
