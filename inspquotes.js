const gogginsQuotes = ['Stay Hard!',"Who's Gonna Carry The Boats!","They Don't Know Me Son!","Poopy Pants Mentality"];

const listLength = gogginsQuotes.length;

const textArea = document.getElementById('quote');

const quoteButton = document.getElementById('quotebutton');

function generateQuote() {

    let index = Math.floor(Math.random() * listLength);

    textArea.value = gogginsQuotes[index];
}

quoteButton.onclick = generateQuote;