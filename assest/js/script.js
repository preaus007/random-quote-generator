const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
nextBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
tweetBtn = document.querySelector(".twitter");

function randomQuote(){
    nextBtn.classList.add("loading");
    nextBtn.innerText = "Loading new quote...";
    // Fetching random quotes from the API
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        nextBtn.classList.remove("loading");
        nextBtn.innerText = "Next Quote";
    });
}

soundBtn.addEventListener("click", ()=>{
    // The SpeechSynthesisUtterance is a web speech API that repersents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} said by ${authorName.innerText}`);
    speechSynthesis.speak(utterance); // Speak method of speechSynthesis speaks the utterance
});

copyBtn.addEventListener("click", ()=>{
    // Copy the quote text on copyBtn click
    // writeText() property writes the specified text string to the system clipborad
    navigator.clipboard.writeText(quoteText.innerText);
});

tweetBtn.addEventListener("click", ()=>{
    let tweet = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(fb,"_blank");
});

nextBtn.addEventListener("click", randomQuote);