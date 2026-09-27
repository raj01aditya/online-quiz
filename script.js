// ===================================================
// 1. Master Question Bank (Array of Question Objects)
// ===================================================
const questions = [
    // ==========================================
    // Questions: HTML (12 Questions)
    // ==========================================
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyper Transfer Machine Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language",
        category: "HTML",
        difficulty: "Easy"
    },

    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: [
            "<a>",
            "<link>",
            "<href>",
            "<url>"
        ],
        answer: "<a>",
        category: "HTML",
        difficulty: "Medium"
    },

    {
        question: "Which HTML element is used to define the largest heading?",
        options: [
            "<h1>",
            "<h6>",
            "<heading>",
            "<head>"
        ],
        answer: "<h1>",
        category: "HTML",
        difficulty: "Easy"
    },

    {
        question: "Which HTML tag is used to insert an image into a webpage?",
        options: [
            "<img>",
            "<image>",
            "<picture>",
            "<src>"
        ],
        answer: "<img>",
        category: "HTML",
        difficulty: "Easy"
    },

    {
        question: "Which HTML tag is used to create an unordered bulleted list?",
        options: [
            "<ul>",
            "<ol>",
            "<li>",
            "<list>"
        ],
        answer: "<ul>",
        category: "HTML",
        difficulty: "Easy"
    },

    {
        question: "Which attribute specifies an alternative text for an image if it cannot be displayed?",
        options: [
            "alt",
            "title",
            "src",
            "description"
        ],
        answer: "alt",
        category: "HTML",
        difficulty: "Easy"
    },

    {
        question: "Which semantic HTML element represents standalone, self-contained content?",
        options: [
            "<article>",
            "<section>",
            "<div>",
            "<aside>"
        ],
        answer: "<article>",
        category: "HTML",
        difficulty: "Medium"
    },

    {
        question: "Which HTML element is used to group table header cells in an HTML table?",
        options: [
            "<thead>",
            "<th>",
            "<header>",
            "<top>"
        ],
        answer: "<thead>",
        category: "HTML",
        difficulty: "Medium"
    },

    {
        question: "Which input type in HTML5 allows the user to select a color via a color picker?",
        options: [
            "color",
            "picker",
            "palette",
            "rgb"
        ],
        answer: "color",
        category: "HTML",
        difficulty: "Medium"
    },

    {
        question: "Which attribute is used to associate a <label> element with an <input> element?",
        options: [
            "for",
            "id",
            "name",
            "target"
        ],
        answer: "for",
        category: "HTML",
        difficulty: "Medium"
    },

    {
        question: "What is the primary difference between the 'async' and 'defer' attributes on external script tags?",
        options: [
            "defer executes scripts in document order after parsing, while async executes as soon as downloaded",
            "async guarantees execution order, while defer executes scripts randomly",
            "defer blocks HTML parsing completely, while async does not",
            "async works only for inline scripts, while defer works only for external scripts"
        ],
        answer: "defer executes scripts in document order after parsing, while async executes as soon as downloaded",
        category: "HTML",
        difficulty: "Hard"
    },

    {
        question: "Which HTML attribute specifies the relationship between the current document and the linked document?",
        options: [
            "rel",
            "type",
            "href",
            "media"
        ],
        answer: "rel",
        category: "HTML",
        difficulty: "Hard"
    },

    // ==========================================
    // Questions: CSS (12 Questions)
    // ==========================================
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Creative Style System",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets",
        category: "CSS",
        difficulty: "Easy"
    },

    {
        question: "Which CSS property is used to change text color?",
        options: [
            "color",
            "text-color",
            "font-color",
            "style-color"
        ],
        answer: "color",
        category: "CSS",
        difficulty: "Medium"
    },

    {
        question: "Which CSS property is used to change the background color of an element?",
        options: [
            "background-color",
            "color",
            "bgcolor",
            "canvas-color"
        ],
        answer: "background-color",
        category: "CSS",
        difficulty: "Easy"
    },

    {
        question: "Which CSS property controls the size of text?",
        options: [
            "font-size",
            "text-size",
            "font-style",
            "size"
        ],
        answer: "font-size",
        category: "CSS",
        difficulty: "Easy"
    },

    {
        question: "Which CSS property is used to create space INSIDE an element's border?",
        options: [
            "padding",
            "margin",
            "spacing",
            "gap"
        ],
        answer: "padding",
        category: "CSS",
        difficulty: "Easy"
    },

    {
        question: "How do you select an element with the id 'header' in CSS?",
        options: [
            "#header",
            ".header",
            "header",
            "*header"
        ],
        answer: "#header",
        category: "CSS",
        difficulty: "Easy"
    },

    {
        question: "In the CSS box model, which layer lies directly between padding and margin?",
        options: [
            "border",
            "content",
            "outline",
            "background"
        ],
        answer: "border",
        category: "CSS",
        difficulty: "Medium"
    },

    {
        question: "Which Flexbox property aligns items along the main axis?",
        options: [
            "justify-content",
            "align-items",
            "align-content",
            "flex-direction"
        ],
        answer: "justify-content",
        category: "CSS",
        difficulty: "Medium"
    },

    {
        question: "Which CSS position value positions an element relative to the browser viewport, staying in place on scroll?",
        options: [
            "fixed",
            "absolute",
            "relative",
            "sticky"
        ],
        answer: "fixed",
        category: "CSS",
        difficulty: "Medium"
    },

    {
        question: "Which CSS pseudo-class styles a link when the mouse cursor hovers over it?",
        options: [
            ":hover",
            ":active",
            ":visited",
            ":focus"
        ],
        answer: ":hover",
        category: "CSS",
        difficulty: "Medium"
    },

    {
        question: "Which of the following CSS selectors has the highest specificity score?",
        options: [
            "#nav-menu",
            ".nav .menu a",
            "nav ul li a",
            "nav.header-nav"
        ],
        answer: "#nav-menu",
        category: "CSS",
        difficulty: "Hard"
    },

    {
        question: "In CSS Grid, which property is shorthand for defining grid-template-rows and grid-template-columns?",
        options: [
            "grid-template",
            "grid-area",
            "grid-auto-flow",
            "grid-gap"
        ],
        answer: "grid-template",
        category: "CSS",
        difficulty: "Hard"
    },

    // ==========================================
    // Questions: JavaScript (12 Questions)
    // ==========================================
    {
        question: "Which keyword is used to declare a variable that cannot be reassigned?",
        options: [
            "const",
            "let",
            "var",
            "static"
        ],
        answer: "const",
        category: "JavaScript",
        difficulty: "Easy"
    },

    {
        question: "Which method outputs messages to the browser console for debugging?",
        options: [
            "console.log()",
            "print()",
            "document.write()",
            "window.alert()"
        ],
        answer: "console.log()",
        category: "JavaScript",
        difficulty: "Medium"
    },

    {
        question: "Which data type is used to represent true or false values in JavaScript?",
        options: [
            "Boolean",
            "String",
            "Number",
            "Undefined"
        ],
        answer: "Boolean",
        category: "JavaScript",
        difficulty: "Easy"
    },

    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: [
            "//",
            "/*",
            "<!--",
            "#"
        ],
        answer: "//",
        category: "JavaScript",
        difficulty: "Easy"
    },

    {
        question: "Which built-in property returns the number of elements in a JavaScript array?",
        options: [
            "length",
            "size",
            "count",
            "index"
        ],
        answer: "length",
        category: "JavaScript",
        difficulty: "Easy"
    },

    {
        question: "What operator is used in JavaScript to check for strict equality in both value and type?",
        options: [
            "===",
            "==",
            "=",
            "!="
        ],
        answer: "===",
        category: "JavaScript",
        difficulty: "Easy"
    },

    {
        question: "Which array method creates a new array populated with the results of calling a function on every element?",
        options: [
            "map()",
            "filter()",
            "forEach()",
            "reduce()"
        ],
        answer: "map()",
        category: "JavaScript",
        difficulty: "Medium"
    },

    {
        question: "Which method attaches an event handler function to an HTML element without overwriting existing handlers?",
        options: [
            "addEventListener()",
            "attachEvent()",
            "onClick()",
            "bindEvent()"
        ],
        answer: "addEventListener()",
        category: "JavaScript",
        difficulty: "Medium"
    },

    {
        question: "Which built-in JavaScript method converts a JSON string into a JavaScript object?",
        options: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.toObject()",
            "JSON.convert()"
        ],
        answer: "JSON.parse()",
        category: "JavaScript",
        difficulty: "Medium"
    },

    {
        question: "What will 'typeof null' return in JavaScript?",
        options: [
            "object",
            "null",
            "undefined",
            "number"
        ],
        answer: "object",
        category: "JavaScript",
        difficulty: "Medium"
    },

    {
        question: "What concept describes a function bundled together with references to its surrounding lexical environment?",
        options: [
            "Closure",
            "Recursion",
            "Hoisting",
            "Prototype chain"
        ],
        answer: "Closure",
        category: "JavaScript",
        difficulty: "Hard"
    },

    {
        question: "Which phase of DOM event propagation occurs first when an event is triggered on an element?",
        options: [
            "Capturing phase",
            "Target phase",
            "Bubbling phase",
            "Execution phase"
        ],
        answer: "Capturing phase",
        category: "JavaScript",
        difficulty: "Hard"
    },

    // ==========================================
    // Questions: Science (12 Questions)
    // ==========================================
    {
        question: "What planet is known as the Red Planet?",
        options: [
            "Mars",
            "Venus",
            "Jupiter",
            "Saturn"
        ],
        answer: "Mars",
        category: "Science",
        difficulty: "Easy"
    },

    {
        question: "What gas do plants absorb from the atmosphere during photosynthesis?",
        options: [
            "Carbon Dioxide",
            "Oxygen",
            "Nitrogen",
            "Hydrogen"
        ],
        answer: "Carbon Dioxide",
        category: "Science",
        difficulty: "Hard"
    },

    {
        question: "What chemical formula represents water?",
        options: [
            "H2O",
            "CO2",
            "NaCl",
            "O2"
        ],
        answer: "H2O",
        category: "Science",
        difficulty: "Easy"
    },

    {
        question: "Which part of a plant cell is known as the powerhouse of the cell?",
        options: [
            "Mitochondria",
            "Nucleus",
            "Ribosome",
            "Chloroplast"
        ],
        answer: "Mitochondria",
        category: "Science",
        difficulty: "Easy"
    },

    {
        question: "What is the hardest naturally occurring mineral on Earth?",
        options: [
            "Diamond",
            "Quartz",
            "Topaz",
            "Granite"
        ],
        answer: "Diamond",
        category: "Science",
        difficulty: "Easy"
    },

    {
        question: "What force pulls objects toward the center of the Earth?",
        options: [
            "Gravity",
            "Magnetism",
            "Friction",
            "Tension"
        ],
        answer: "Gravity",
        category: "Science",
        difficulty: "Easy"
    },

    {
        question: "What is the chemical symbol for gold on the periodic table?",
        options: [
            "Au",
            "Ag",
            "Fe",
            "Gd"
        ],
        answer: "Au",
        category: "Science",
        difficulty: "Medium"
    },

    {
        question: "What type of blood cells are primarily responsible for transporting oxygen throughout the body?",
        options: [
            "Red blood cells",
            "White blood cells",
            "Platelets",
            "Plasma cells"
        ],
        answer: "Red blood cells",
        category: "Science",
        difficulty: "Medium"
    },

    {
        question: "What layer of Earth's atmosphere absorbs most of the Sun's harmful ultraviolet radiation?",
        options: [
            "Ozone layer",
            "Troposphere",
            "Mesosphere",
            "Thermosphere"
        ],
        answer: "Ozone layer",
        category: "Science",
        difficulty: "Medium"
    },

    {
        question: "In physics, what term defines the rate of change of velocity over time?",
        options: [
            "Acceleration",
            "Speed",
            "Momentum",
            "Inertia"
        ],
        answer: "Acceleration",
        category: "Science",
        difficulty: "Medium"
    },

    {
        question: "What subatomic particles make up protons and neutrons?",
        options: [
            "Quarks",
            "Leptons",
            "Bosons",
            "Muons"
        ],
        answer: "Quarks",
        category: "Science",
        difficulty: "Hard"
    },

    {
        question: "Which law of thermodynamics states that the entropy of an isolated system always increases over time?",
        options: [
            "Second Law of Thermodynamics",
            "First Law of Thermodynamics",
            "Third Law of Thermodynamics",
            "Zeroth Law of Thermodynamics"
        ],
        answer: "Second Law of Thermodynamics",
        category: "Science",
        difficulty: "Hard"
    },

    // ==========================================
    // Questions: General Knowledge (12 Questions)
    // ==========================================
    {
        question: "Which is the largest ocean on Earth?",
        options: [
            "Pacific Ocean",
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean"
        ],
        answer: "Pacific Ocean",
        category: "General Knowledge",
        difficulty: "Easy"
    },

    {
        question: "How many days are in a standard leap year?",
        options: [
            "366",
            "365",
            "364",
            "368"
        ],
        answer: "366",
        category: "General Knowledge",
        difficulty: "Medium"
    },

    {
        question: "What is the capital city of France?",
        options: [
            "Paris",
            "Rome",
            "Berlin",
            "Madrid"
        ],
        answer: "Paris",
        category: "General Knowledge",
        difficulty: "Easy"
    },

    {
        question: "How many continents are there on Earth?",
        options: [
            "7",
            "5",
            "6",
            "8"
        ],
        answer: "7",
        category: "General Knowledge",
        difficulty: "Easy"
    },

    {
        question: "Who painted the Mona Lisa?",
        options: [
            "Leonardo da Vinci",
            "Pablo Picasso",
            "Vincent van Gogh",
            "Michelangelo"
        ],
        answer: "Leonardo da Vinci",
        category: "General Knowledge",
        difficulty: "Easy"
    },

    {
        question: "What is the tallest land animal in the world?",
        options: [
            "Giraffe",
            "African Elephant",
            "Ostrich",
            "Camel"
        ],
        answer: "Giraffe",
        category: "General Knowledge",
        difficulty: "Easy"
    },

    {
        question: "Which ancient civilization constructed the Machu Picchu citadel in the Andes Mountains?",
        options: [
            "Inca",
            "Maya",
            "Aztec",
            "Olmec"
        ],
        answer: "Inca",
        category: "General Knowledge",
        difficulty: "Medium"
    },

    {
        question: "What is the longest river in the world?",
        options: [
            "Nile River",
            "Amazon River",
            "Yangtze River",
            "Mississippi River"
        ],
        answer: "Nile River",
        category: "General Knowledge",
        difficulty: "Medium"
    },

    {
        question: "In which year did the Apollo 11 mission successfully land astronauts on the Moon?",
        options: [
            "1969",
            "1965",
            "1972",
            "1975"
        ],
        answer: "1969",
        category: "General Knowledge",
        difficulty: "Medium"
    },

    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: [
            "William Shakespeare",
            "Charles Dickens",
            "Jane Austen",
            "Mark Twain"
        ],
        answer: "William Shakespeare",
        category: "General Knowledge",
        difficulty: "Medium"
    },

    {
        question: "What is the rarest blood type among human populations worldwide?",
        options: [
            "AB negative",
            "O negative",
            "B negative",
            "A negative"
        ],
        answer: "AB negative",
        category: "General Knowledge",
        difficulty: "Hard"
    },

    {
        question: "Which country has the most natural lakes in the world?",
        options: [
            "Canada",
            "Russia",
            "United States",
            "Sweden"
        ],
        answer: "Canada",
        category: "General Knowledge",
        difficulty: "Hard"
    }
];

// ===================================================
// 2. High Score Storage (LocalStorage Initialization)
// ===================================================
// Persistent dictionary mapping "Category_Difficulty" to best percentage achieved
let highScores = {};

// Safely load saved high scores from browser LocalStorage at application startup
try {
    const savedHighScores = localStorage.getItem("quizHighScores");
    if (savedHighScores) {
        highScores = JSON.parse(savedHighScores);
    }
} catch (error) {
    console.error("Could not load high scores from LocalStorage:", error);
    highScores = {};
}

// ===================================================
// 3. DOM Elements (Selecting HTML elements)
// ===================================================
const welcomeScreen = document.getElementById("welcome-screen");
const categoryScreen = document.getElementById("category-screen");
const difficultyScreen = document.getElementById("difficulty-screen");
const emptyScreen = document.getElementById("empty-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const backToCategoryBtn = document.getElementById("back-to-category-btn");
const backToDifficultyBtn = document.getElementById("back-to-difficulty-btn");

const categoryButtons = document.querySelectorAll(".category-btn");
const difficultyButtons = document.querySelectorAll(".difficulty-btn");

const categoryDisplay = document.getElementById("category-display");
const difficultyDisplay = document.getElementById("difficulty-display");
const questionCounter = document.getElementById("question-counter");
const timer = document.getElementById("timer");
const scoreDisplay = document.getElementById("score-display");
const progressBar = document.getElementById("progress-bar");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Results elements
const finalScore = document.getElementById("final-score");
const correctAnswers = document.getElementById("correct-answers");
const incorrectAnswers = document.getElementById("incorrect-answers");
const unansweredQuestions = document.getElementById("unanswered-questions");
const percentage = document.getElementById("percentage");
const bestScore = document.getElementById("best-score");
const highScoreMessage = document.getElementById("high-score-message");

// Variables to track selections, active questions, progress, and timer
let selectedCategory = "";
let selectedDifficulty = "";
let quizQuestions = []; // Active questions matching BOTH category and difficulty
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];   // Stores user's selected answer or null (if expired) for each question index
let timeLeft = 30;       // Seconds remaining on current question
let timerInterval;      // Reference to active setInterval timer

// ===================================================
// 4. High Score Helper Functions
// ===================================================

/**
 * Returns a unique key representing the active Category + Difficulty combination
 */
function getScoreKey() {
    return `${selectedCategory}_${selectedDifficulty}`;
}

/**
 * Compares current score with saved high score, updates LocalStorage if higher, and returns results
 */
function saveHighScore(scorePercentage) {
    const key = getScoreKey();
    const previousBest = highScores[key] !== undefined ? highScores[key] : null;

    // A new high score is achieved if no previous best existed, or if current score beats previous best
    const isNewHighScore = previousBest === null || scorePercentage > previousBest;

    if (isNewHighScore) {
        highScores[key] = scorePercentage;
        try {
            localStorage.setItem("quizHighScores", JSON.stringify(highScores));
        } catch (error) {
            console.error("Could not save high score to LocalStorage:", error);
        }
    }

    return {
        bestScore: highScores[key],
        isNewHighScore: isNewHighScore
    };
}

// ===================================================
// 5. Shuffle Utility (Fisher-Yates Algorithm)
// ===================================================

/**
 * Shuffles an array in place using the Fisher-Yates algorithm
 */
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
}

// ===================================================
// 6. Timer Functions
// ===================================================

/**
 * Updates the timer element's text and applies warning/danger colors
 */
function updateTimerDisplay() {
    timer.textContent = "Time: " + timeLeft;

    if (timeLeft <= 5) {
        timer.className = "danger";
    } else if (timeLeft <= 10) {
        timer.className = "warning";
    } else {
        timer.className = "";
    }
}

/**
 * Starts a 30-second countdown for the current question
 */
function startTimer() {
    // 1. Always stop any existing timer to prevent multiple concurrent timers
    stopTimer();

    // 2. Reset time to 30 and update display
    timeLeft = 30;
    updateTimerDisplay();

    // 3. Start interval ticking every 1,000 milliseconds (1 second)
    timerInterval = setInterval(function() {
        timeLeft--;
        updateTimerDisplay();

        // 4. When time expires, handle time up
        if (timeLeft <= 0) {
            handleTimeUp();
        }
    }, 1000);
}

/**
 * Stops the active timer interval
 */
function stopTimer() {
    clearInterval(timerInterval);
}

/**
 * Executes when the countdown reaches 0 without an answer
 */
function handleTimeUp() {
    // 1. Stop the timer
    stopTimer();

    // 2. Mark this question as unanswered (null)
    userAnswers[currentQuestionIndex] = null;

    const currentQuestion = quizQuestions[currentQuestionIndex];

    // 3. Disable all option buttons and reveal the correct answer
    const buttons = answerButtons.querySelectorAll(".option-btn");
    buttons.forEach(function(button) {
        button.disabled = true;

        if (button.textContent === currentQuestion.answer) {
            button.classList.add("correct");
            button.textContent = button.textContent + " — ✓ Correct";
        }
    });

    // 4. Set Next or Finish Quiz button text
    if (currentQuestionIndex === quizQuestions.length - 1) {
        nextBtn.textContent = "Finish Quiz";
    } else {
        nextBtn.textContent = "Next Question";
    }

    // 5. Show Next / Finish button to allow moving forward
    nextBtn.classList.remove("hidden");
}

// ===================================================
// 7. Screen Transition & Selection Functions
// ===================================================

/**
 * Navigates from Welcome Screen to Category Screen
 */
function showCategoryScreen() {
    welcomeScreen.classList.add("hidden");
    categoryScreen.classList.remove("hidden");
}

/**
 * Selects a category and advances to the Difficulty Screen
 */
function selectCategory(category) {
    selectedCategory = category;

    // Transition from Category Screen to Difficulty Screen
    categoryScreen.classList.add("hidden");
    difficultyScreen.classList.remove("hidden");
}

/**
 * Navigates backward from Difficulty Screen to Category Screen
 */
function backToCategorySelection() {
    stopTimer();
    difficultyScreen.classList.add("hidden");
    categoryScreen.classList.remove("hidden");
}

/**
 * Selects difficulty, filters questions by category AND difficulty, shuffles them once, and launches quiz
 */
function selectDifficulty(difficulty) {
    selectedDifficulty = difficulty;

    // Filter questions matching BOTH selected category and selected difficulty
    quizQuestions = questions.filter(function(question) {
        return (
            question.category === selectedCategory &&
            question.difficulty === selectedDifficulty
        );
    });

    // Handle empty combination gracefully without crashing
    if (quizQuestions.length === 0) {
        difficultyScreen.classList.add("hidden");
        emptyScreen.classList.remove("hidden");
    } else {
        // Level 1: Shuffle the active filtered questions once for this quiz attempt
        shuffleQuestions(quizQuestions);

        // Level 2: Create a quiz-specific copy of each question and shuffle its options
        quizQuestions = quizQuestions.map(function(question) {
            const questionCopy = {
                ...question,
                options: [...question.options]
            };
            shuffleQuestions(questionCopy.options);
            return questionCopy;
        });

        difficultyScreen.classList.add("hidden");
        startQuiz();
    }
}

/**
 * Returns from Empty State Screen back to Difficulty Screen
 */
function backToDifficultySelection() {
    emptyScreen.classList.add("hidden");
    difficultyScreen.classList.remove("hidden");
}

/**
 * Returns from Results Screen to Category Screen with clean state (preserves saved high scores)
 */
function restartToCategorySelection() {
    stopTimer();

    // Reset temporary quiz variables only; do NOT clear persistent highScores
    score = 0;
    currentQuestionIndex = 0;
    userAnswers = [];
    quizQuestions = [];
    selectedCategory = "";
    selectedDifficulty = "";

    // Switch screens
    resultsScreen.classList.add("hidden");
    emptyScreen.classList.add("hidden");
    categoryScreen.classList.remove("hidden");
}

// ===================================================
// 8. Quiz Flow & Results Functions
// ===================================================

/**
 * Starts the quiz by resetting state, updating header info, and rendering Question 1
 */
function startQuiz() {
    // 1. Stop any running timer
    stopTimer();

    // 2. Reset tracking variables for this attempt
    score = 0;
    currentQuestionIndex = 0;
    userAnswers = [];
    timeLeft = 30;

    // 3. Reset displays
    scoreDisplay.textContent = "Score: " + score;
    categoryDisplay.textContent = `Category: ${selectedCategory}`;
    difficultyDisplay.textContent = `Difficulty: ${selectedDifficulty}`;

    // 4. Switch screens: hide all pre-quiz screens and reveal quiz screen
    welcomeScreen.classList.add("hidden");
    categoryScreen.classList.add("hidden");
    difficultyScreen.classList.add("hidden");
    emptyScreen.classList.add("hidden");
    resultsScreen.classList.add("hidden");

    quizScreen.classList.remove("hidden");
    prevBtn.classList.remove("hidden");

    // 5. Render Question 1 fresh
    showQuestion();
}

/**
 * Displays the current question from quizQuestions, updates progress, and starts/stops timer
 */
function showQuestion() {
    // 1. Stop any currently active timer
    stopTimer();

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const currentNumber = currentQuestionIndex + 1;
    const totalQuestions = quizQuestions.length;

    // 2. Update Question Counter text
    questionCounter.textContent = `Question ${currentNumber} of ${totalQuestions}`;

    // 3. Update Progress Bar width
    const progressPercentage = (currentNumber / totalQuestions) * 100;
    progressBar.style.width = progressPercentage + "%";

    // 4. Set question text
    questionText.textContent = currentQuestion.question;

    // 5. Clear old buttons
    answerButtons.innerHTML = "";

    // 6. Set Previous button state (disabled on Question 1)
    if (currentQuestionIndex === 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    // 7. Check if this question was already answered or expired
    const savedAnswer = userAnswers[currentQuestionIndex];

    if (savedAnswer !== undefined) {
        // Question is already completed: do NOT restart timer
        timer.textContent = "Time: Completed";
        timer.className = "";

        currentQuestion.options.forEach(function(option) {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("option-btn");
            button.disabled = true;

            // Highlight the correct answer
            if (option === currentQuestion.answer) {
                button.classList.add("correct");
                button.textContent = option + " — ✓ Correct";
            }
            // Highlight the user's incorrect choice (if not null)
            else if (savedAnswer !== null && option === savedAnswer) {
                button.classList.add("incorrect");
                button.textContent = option + " — ✗ Incorrect";
            }

            answerButtons.appendChild(button);
        });

        // Show Next or Finish Quiz button
        if (currentQuestionIndex === quizQuestions.length - 1) {
            nextBtn.textContent = "Finish Quiz";
        } else {
            nextBtn.textContent = "Next Question";
        }
        nextBtn.classList.remove("hidden");

    } else {
        // Question is new and unanswered:
        currentQuestion.options.forEach(function(option) {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("option-btn");

            button.addEventListener("click", function() {
                selectAnswer(option);
            });

            answerButtons.appendChild(button);
        });

        // Hide Next button until an answer is picked or time expires
        nextBtn.classList.add("hidden");

        // Start the 30-second countdown timer for this new question
        startTimer();
    }
}

/**
 * Checks the selected answer, stops timer, saves to userAnswers, and shows feedback
 */
function selectAnswer(selectedAnswer) {
    // 1. Immediately stop the countdown timer
    stopTimer();

    const currentQuestion = quizQuestions[currentQuestionIndex];

    // 2. Save user's answer
    userAnswers[currentQuestionIndex] = selectedAnswer;

    // 3. Update score if correct
    if (selectedAnswer === currentQuestion.answer) {
        score += 1;
        scoreDisplay.textContent = "Score: " + score;
    }

    // 4. Disable all option buttons and display visual feedback
    const buttons = answerButtons.querySelectorAll(".option-btn");
    buttons.forEach(function(button) {
        button.disabled = true;

        if (button.textContent === currentQuestion.answer) {
            button.classList.add("correct");
            button.textContent = button.textContent + " — ✓ Correct";
        } else if (button.textContent === selectedAnswer) {
            button.classList.add("incorrect");
            button.textContent = button.textContent + " — ✗ Incorrect";
        }
    });

    // 5. Update Next / Finish button text
    if (currentQuestionIndex === quizQuestions.length - 1) {
        nextBtn.textContent = "Finish Quiz";
    } else {
        nextBtn.textContent = "Next Question";
    }

    // 6. Reveal Next / Finish button
    nextBtn.classList.remove("hidden");
}

/**
 * Moves backward to the previous question
 */
function handlePreviousButton() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

/**
 * Advances to the next question or shows the final results screen
 */
function handleNextButton() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

/**
 * Calculates final statistics, saves/evaluates high score, and displays Results Screen
 */
function showResults() {
    // 1. Ensure timer is completely stopped
    stopTimer();

    // 2. Count statistics from userAnswers and quizQuestions
    let correctCount = 0;
    let unansweredCount = 0;

    quizQuestions.forEach(function(question, index) {
        const answer = userAnswers[index];
        if (answer === question.answer) {
            correctCount++;
        } else if (answer === null || answer === undefined) {
            unansweredCount++;
        }
    });

    const totalQuestions = quizQuestions.length;
    const incorrectCount = totalQuestions - correctCount - unansweredCount;
    const scorePercentage = Math.round((correctCount / totalQuestions) * 100);

    // 3. Process and persist high score for this Category + Difficulty
    const scoreResult = saveHighScore(scorePercentage);

    // 4. Update Results Screen DOM elements
    finalScore.textContent = `${correctCount} / ${totalQuestions}`;
    correctAnswers.textContent = correctCount;
    incorrectAnswers.textContent = incorrectCount;
    unansweredQuestions.textContent = unansweredCount;
    percentage.textContent = `${scorePercentage}%`;
    bestScore.textContent = `${scoreResult.bestScore}%`;

    // 5. Show celebratory message if new high score was set
    if (scoreResult.isNewHighScore) {
        highScoreMessage.textContent = "🎉 New High Score!";
    } else {
        highScoreMessage.textContent = "";
    }

    // 6. Switch screens: hide quiz screen and reveal results screen
    quizScreen.classList.add("hidden");
    resultsScreen.classList.remove("hidden");
}

// ===================================================
// 9. Event Listeners
// ===================================================
// Start Quiz button takes user to Choose a Category screen
startBtn.addEventListener("click", showCategoryScreen);

// Category buttons advance user to Difficulty selection
categoryButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        selectCategory(button.dataset.category);
    });
});

// Difficulty buttons filter questions, shuffle, and launch quiz
difficultyButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        selectDifficulty(button.dataset.difficulty);
    });
});

// Back navigation buttons
backToCategoryBtn.addEventListener("click", backToCategorySelection);
backToDifficultyBtn.addEventListener("click", backToDifficultySelection);

// Restart Quiz button returns to category selection
restartBtn.addEventListener("click", restartToCategorySelection);

// Navigation buttons
prevBtn.addEventListener("click", handlePreviousButton);
nextBtn.addEventListener("click", handleNextButton);
