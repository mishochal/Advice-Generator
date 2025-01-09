const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const button = document.querySelector(".dice");
const spinner = document.querySelector(".lds-dual-ring");

const updateAdvice = (advice) => {
    setTimeout(() => {
        adviceId.innerText = "ADVICE #" + advice.id;
        adviceText.innerText = advice.advice;
        spinner.style.display = "none";
    }, 250)
}

const getRandomAdvice = () => {
    adviceText.innerText = "";
    spinner.style.display = "inline-block";
    fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(advice => updateAdvice(advice.slip));
}

button.addEventListener("click", getRandomAdvice);

getRandomAdvice();