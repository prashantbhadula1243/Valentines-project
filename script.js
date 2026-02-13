const messages = [
    "pakka?",
    "dekhle abhi bhi time hai??",
    "Ab nahi dabna chahiye no?",
    "acha sorry please...",
    "sochle momos khilaunga!",
    "agar na bola toh fir rounga",
    "I will be very sad...",
    "I will be very very very sad...",
    "last time hai han boldo mere jaisa nahi milega",
    "Just say yes my pooku love you ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
