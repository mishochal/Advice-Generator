const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const button = document.querySelector(".dice");

const updateAdvice = (advice) => {
    adviceId.innerText = "ADVICE #" + advice.id;
    adviceText.innerText = advice.advice;
}

const getRandomAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(advice => updateAdvice(advice.slip));
}

button.addEventListener("click", getRandomAdvice);

getRandomAdvice();