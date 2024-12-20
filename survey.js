// new attempt
const questions = [
    {
        question: "What is your primary area of expertise in forestry?",
            answers: [
                { text: "Silviculture", value: 'D' },
                { text: "forest ecology", value: 'A' },
                { text: "Fire managment", value:'C' },
                { text: "Growing trees", value: 'B' },
                { text: "logging", value: 'E' }
                 
        ]
    },
    {
    question: "What technological tools or software are you most interested in learning about? And what softwares are you comfortable with using if any? ",
    answers: [
        { text: "coding", value: 'D' },
        { text: "Geographic Information Systems (GIS)", value: 'A' },
        { text: "Forest Management Software (e.g., Forest Pro, Trimble)", value: 'C' },
        { text: "Tree Growth and Yield Models (e.g., FVS, WoodPro)", value: 'B' },
        { text: "Climate Modeling and Carbon Accounting Tools", value: 'E' },
        
            ]
        },
     
    {
        question: "What best describes your approach to personal development?",
        answers: [
            { text: "Embracing the natural highs and lows.", value: 'A' },
            { text: "Focusing on consistent and rapid improvement.", value: 'D' },
            { text: "Striving to achieve an optimal balance in all areas.", value: 'B' },
            { text: "Recognizing that progress is often gradual.", value: 'C' },
            { text: "Valuing the overall journey regardless of the immediate challenges.", value: 'E' }
        ]
    },
    {
        question: "When making decisions, what is your primary consideration?",
        answers: [
            { text: "How it fits into the bigger picture of my life.", value: 'C' },
            { text: "The potential for significant benefits and growth.", value: 'B' },
            { text: "The possible outcomes and selecting the best one.", value: 'D' },
            { text: "The long-term impact and steady progress.", value: 'E' },
            { text: "The immediate effects and maintaining balance.", value: 'A' }
        ]
    },
    
     {
        question: "what do you do on your downtime?",
        answers: [
            { text: "baking sour dow", value: 'A' },
            { text: "sports", value: 'E' },
            { text: "creative hobbies", value: 'B' },
            { text: "Outdoor activies", value: 'C' },
            { text: "social and relaxatiopn", value: 'D' },
           
        ]
    },
    {
        question:"What motivates you the most in a professional setting?",
                 answers: [
                 { text: " Achievement and recognition for my work.", value: 'A' },
                    { text: "Building strong relationships and connections with others.", value: 'B' },
                    { text: "Learning and growing in my role.", value: 'D' },
                    { text: "Contributing to a cause or mission that aligns with my values.", value: 'E' },
                    { text: "Working in a dynamic and challenging environment.", value: 'C' },
                    
                    

        ]
    }
];

const results = {
    A: {
        title: "Engineer: oprah wimphry ",
        description: "-Expertise: Environmnetal Engineering.\n -Tech Interests: Geographic Information Systems (GIS).\n -Development Approach: Embracing the natural highs and lows.\n -Decision-Making: The immediate effects and maintaining balance.\n -Downtime: baking sour dow.\n -Motivation: Achievement and recognition for my work.",
        image: "/images/A.png"  // Path to the image for result A
    },
    B: {
        title: "Engineer: Jessica Alba  ",
        description: "-Expertise: Power Systems.\n -Tech Interests: Tree Growth and Yield Models (e.g., FVS, WoodPro).\n -Development Approach: Striving to achieve an optimal balance in all areas.\n -Decision-Making: The potential for significant benefits and growth.\n -Downtime: Enjoys creative hobbies.\n -Motivation: Building strong relationships and connections with others.",
        image: "/images/B.png"  // Path to the image for result B
    },
    C: {
        title: "Engineer: Leonardo DiCaprio",
        description: "-Expertise: Thermal Systems\n -Tech Interests: Forest Management Software (e.g., Forest Pro, Trimble).\n -Development Approach: Sees progress as gradual.\n -Decision-Making: How it fits into the bigger picture of my life.\n -Downtime: Enjoys outdoor activities.\n -Motivation:Working in a dynamic and challenging environment.",
        image: "/images/C.png"  // Path to the image for result C
    },
    D: {
        title: "Engineer: Chris Hemsworth",
        description: "-Expertise: Software Development\n -Tech Interests: Coding (e.g., Python, Java, C++).\n -Development Approach: Strives for rapid improvement.\n -Decision-Making: Chooses the best possible outcome\n -Downtime: Socializes and relaxes.\n -Motivation: Motivated by learning and personal growth",
        image: "/images/D.png"  // Path to the image for result D
    },
    E: {
        title: "Eningeer: Greta thunberg",
        description: "-Expertise: Sustainability and Environmental Impact\n -Tech Interests: Climate modeling, carbon accounting tools.\n -Development Approach: Values the journey and gradual progress.\n -Decision-Making: Focuses on long-term impact.\n -Downtime: Sports.\n -Motivation: Driven by environmental causes and sustainable change",
        image: "/images/E.png"  // Path to the image for result E
    }
};

const startButton = document.getElementById('start-button');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const resultImage = document.getElementById('result-image');

let currentQuestionIndex = 0;
let answers = [];

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setNextQuestion();
    } else {
        showResult();
    }
});

function startQuiz() {
    startButton.classList.add('hide');
    currentQuestionIndex = 0;
    answers = [];
    questionContainer.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer.value));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    nextButton.classList.add('hide');
}

function selectAnswer(value) {
    answers.push(value);
    nextButton.classList.remove('hide');
}

function showResult() {
    questionContainer.classList.add('hide');
    const result = calculateResult();
    resultText.innerHTML = `<h3>${result.title}</h3><p>${result.description}</p>`;
    resultImage.src = result.image;
    resultContainer.classList.remove('hide');
}

function calculateResult() {
    const counts = { A: 0, B: 0, C: 0, D: 0, E: 0 };// whichever has the highest number match it to the output of that letter
    answers.forEach(answer => counts[answer]++);
    const maxCount = Math.max(...Object.values(counts));
    const resultKey = Object.keys(counts).find(key => counts[key] === maxCount);
    return results[resultKey];
}
