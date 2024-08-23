const gogginsQuotes = ['Stay Hard!',"Who's Gonna Carry The Boats!","They Don't Know Me Son!","You Got Poopy Pants Mentality."];
const gogginsQuotes2 = ["YOU CAN'T CARE WHAT OTHERS THINK OF YOU","I'm not crazy! I'm just not like you!","The demons ain't ready for me baby!"]

const textArea = document.getElementById('quote');

const quoteButton = document.getElementById('quotebutton');

function generateQuote() {

    let index = Math.floor(Math.random() * gogginsQuotes.length);
    let indexTwo = Math.floor(Math.random() * gogginsQuotes2.length)

    textArea.value = gogginsQuotes[index] + ' ' + gogginsQuotes2[indexTwo];
}

quoteButton.onclick = generateQuote;