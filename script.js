




document.addEventListener("DOMContentLoaded", function () {
    const quoteText = document.querySelector(".quote");
    const authorName = document.querySelector(".author .name");
    const quoteBtn = document.querySelector("button");
    const soundBtn = document.querySelector(".sound");
    const copyBtn = document.querySelector(".copy");
    const twitterBtn = document.querySelector(".twitter");

    function randomQuote() {
        quoteBtn.classList.add("loading");
        quoteBtn.innerText = "Loading Quote...";
        fetch("https://api.quotable.io/random")
            .then(res => res.json())
            .then(result => {

                quoteText.innerText = result.content;
                authorName.innerText = result.author;
                quoteBtn.innerText = "New Quote";
                quoteBtn.classList.remove("loading");
            })
            .catch(error => console.error('Error fetching random quote:', error));
    }



    
    soundBtn.addEventListener("click", () => {
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
        speechSynthesis.speak(utterance);
    });



    copyBtn.addEventListener("click", () => {
        const quoteToCopy = `${quoteText.innerText} - ${authorName.innerText}`;
        navigator.clipboard.writeText(quoteToCopy)
            .then(() => {
                console.log(quoteToCopy);

            })
            .catch(error => {
                console.error('Error copying quote to clipboard:', error);

            });
    });



    twitterBtn.addEventListener("click", () => {
        let tweetUrl = `https://www.linkedin.com/article/new/${quoteText.innerText}`
        window.open(tweetUrl, "_blank"); // opening a new linkedin tab with passing quote in the url
    });
















    quoteBtn.addEventListener("click", randomQuote);
});
