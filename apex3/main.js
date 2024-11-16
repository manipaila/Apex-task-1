
// JavaScript to handle navigation and interactive functionality

// Select all navigation links and sections
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

// Add click event listener to each link
links.forEach(link => {
    link.addEventListener('click', function(event) {
        // Remove 'active' class from all links and sections
        links.forEach(link => link.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        // Add 'active' class to clicked link
        this.classList.add('active');

        // Get the target section based on the clicked link's href
        const targetId = this.getAttribute('href').substring(1); // Remove '#'
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.classList.add('active');
        }
    });
});

// Initial setup: display the home section by default when the page loads
document.getElementById('home').classList.add('active');
document.querySelector('a[href="#home"]').classList.add('active');

// Quiz Data
const quizQuestions = [
    {
        question: "What is the fastest land animal?",
        options: ["Cheetah", "Lion", "Horse", "Greyhound"],
        answer: "Cheetah",
        image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA3L3JvYl9yYXdwaXhlbF9hX3Bob3RvX29mX2FfY2hlZXRhaF9ydW5uaW5nX2FmdGVyX2FfZ2F6ZWxsZV9zaWRlX183Mjk5Y2E5My01ZWI0LTQ2NDAtOTgzNy00NWVlMDI0ZGU0ZTctNXgtaHEtc2NhbGUtNV8wMHguanBn.jpg" // Cheetah image
    },
    {
        question: "Which bird is known for its exceptional memory and ability to hide food for later?",
        options: ["Crow", "Eagle", "Hummingbird", "Owl"],
        answer: "Crow",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU66XuWb3V1jfobz-viU9we9kYZYakibJcVw&s" // Crow image
    },
    {
        question: "What is the only mammal capable of true flight?",
        options: ["Bat", "Flying Squirrel", "Sugar Glider", "Possum"],
        answer: "Bat",
        image: "https://cdn.britannica.com/21/75121-050-8CF5E1DB/Bats-structures-organs-sound-frequencies-signals-contexts.jpg" // Bat image
    },
    {
        question: "Which marine animal is known as the 'sea cow'?",
        options: ["Manatee", "Dolphin", "Sea Lion", "Walrus"],
        answer: "Manatee",
        image: "https://t3.ftcdn.net/jpg/03/81/15/98/360_F_381159836_BJXeOs222Me3VUqfX0HsUD5su67GCenD.jpg" // Manatee image
    },
    {
        question: "What is the tallest species of bird in the world?",
        options: ["Ostrich", "Emu", "Albatross", "Flamingo"],
        answer: "Ostrich",
        image: "https://cdn.hswstatic.com/gif/ostrich.jpg" // Ostrich image
    },
    {
        question: "Which animal is known for its black-and-white stripes?",
        options: ["Zebra", "Tiger", "Panda", "Skunk"],
        answer: "Zebra",
        image: "https://wallpapers.com/images/featured/zebra-pictures-y703q3fbii2nopj6.jpg" // Zebra image
    },
    {
        question: "What type of animal is a Komodo dragon?",
        options: ["Lizard", "Snake", "Crocodile", "Turtle"],
        answer: "Lizard",
        image: "https://cdn.pixabay.com/photo/2022/05/14/12/38/oriental-garden-lizard-7195594_1280.jpg" // Komodo dragon image
    },
    {
        question: "What is the largest fish in the ocean?",
        options: ["Whale Shark", "Great White Shark", "Manta Ray", "Blue Marlin"],
        answer: "Whale Shark",
        image: "https://cdn.britannica.com/66/5166-050-F5B799F1/White-shark.jpg" // Whale Shark image
    },
    {

        question: "What is the largest land animal in the world?",
        options: ["African Elephant", "Rhino", "Hippo", "Bison"],
        answer: "African Elephant",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7yIxHLHLPl2x9_aHnUHDxXtG1JWuZkYqTw&s"
    },
    {
        question: "What is the collective noun for a group of lions?",
        options: ["Pride", "Pack", "Herd", "Flock"],
        answer: "Pride",
        image: "https://media.istockphoto.com/id/166281680/photo/pride-of-lions-serengeti-tanzania.jpg?s=612x612&w=0&k=20&c=JN7VQbtfNAgyqJzFC8GqgSeZ0FJkB5u9JcxgNnCj-Mw=" // Lions image
    }
];

let currentQuestion = 0;
let score = 0;

// Function to load the current quiz question
function loadQuiz() {
    const quiz = quizQuestions[currentQuestion];
    const quizContainer = document.getElementById("quizContainer");
    const quizImage = document.getElementById("quizImage");
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    // Set quiz question and options
    quizImage.src = quiz.image;
    questionElement.innerText = quiz.question;
    optionsElement.innerHTML = '';
    quiz.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

// Function to check the answer and move to the next question
// Function to check the answer and move to the next question
function checkAnswer(answer) {
    const quizResult = document.getElementById("quizResult");
    const quiz = quizQuestions[currentQuestion];

    if (answer === quiz.answer) {
        score++; // Increase score for correct answer
        quizResult.innerText = "Correct!";
    } else {
        quizResult.innerText = `Wrong! The correct answer was: ${quiz.answer}`;
    }

    // Move to the next question after a short delay
    setTimeout(() => {
        currentQuestion++;
        
        if (currentQuestion < quizQuestions.length) {
            loadQuiz(); // Load next question
        } else {
            displayScore(); // If all questions are completed, display the score
        }
    }, 1000);
}

// Function to display the final score after all questions are answered
function displayScore() {
    const quizContainer = document.getElementById("quizContainer");
    quizContainer.innerHTML = `<h3>Your final score is: ${score} / ${quizQuestions.length}</h3>`;
    const restartButton = document.createElement("button");
    restartButton.innerText = "Restart Quiz";
    restartButton.addEventListener("click", restartQuiz);
    quizContainer.appendChild(restartButton);
}

// Function to restart the quiz
function restartQuiz() {
    score = 0;
    currentQuestion = 0;
    loadQuiz(); // Load the first question
    const quizContainer = document.getElementById("quizContainer");
    quizContainer.innerHTML = ''; // Clear the score and restart button
}

// Load the first quiz question
loadQuiz();
// Joke Functionality
async function fetchJoke() {
    const jokes = [
        {
            setup: "Why don't elephants use computers?",
            punchline: "Because they're afraid of the mouse!"
        },
        {
            setup: "Why do fish always know how much they weigh?",
            punchline: "Because they have their own scales!"
        },
        {
            setup: "What do you call a sleeping bull?",
            punchline: "A bulldozer!"
        },
        {
            setup: "Why don’t lions play cards?",
            punchline: "Because they’re afraid of cheetahs!"
        },
        {
            setup: "What do you call a bear with no teeth?",
            punchline: "A gummy bear!"
        },
        {
            setup: "Why did the bird go to the hospital?",
            punchline: "It needed tweetment!"
        },
        {
            setup: "What’s a crocodile’s favorite game?",
            punchline: "Snap!"
        },
        {
            setup: "Why did the owl invite his friends over?",
            punchline: "He didn’t want to be owl by himself!"
        },
        {
            setup: "What do you get if you cross a kangaroo with a sheep?",
            punchline: "A woolly jumper!"
        },
        {
            setup: "Why do bees have sticky hair?",
            punchline: "Because they use honeycombs!"
        },
        {
            setup: "What do you call an alligator in a vest?",
            punchline: "An investigator!"
        },
        {
            setup: "Why don’t penguins get into fights?",
            punchline: "Because they don’t like breaking the ice!"
        },
        {
            setup: "What do you call a fly without wings?",
            punchline: "A walk!"
        },
        {
            setup: "Why are frogs so happy?",
            punchline: "Because they eat whatever bugs them!"
        },
        {
            setup: "How do pandas cook their food?",
            punchline: "They use a pan-duh!"
        }
    ];

    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    // Display the joke
    document.getElementById("joke").innerText = randomJoke.setup + " " + randomJoke.punchline;
    document.getElementById("jokeEmoji").innerText = "😂";
}




// Weather Functionality
async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = '0b55a5b427cd5245783af0009db7b1fb'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherInfo = `${data.weather[0].description} in ${data.name}. Temperature: ${data.main.temp}°C`;
            document.getElementById("weather").innerText = weatherInfo;
        } else {
            document.getElementById("weather").innerText = "City not found. Please try again.";
        }
    } catch (error) {
        document.getElementById("weather").innerText = "Error fetching weather data.";
    }
}
let currentIndex = 0;

// Function to move the carousel images
function moveCarousel(direction) {
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;

    // Update currentIndex with the direction and loop back
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}
