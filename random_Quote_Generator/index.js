const quotes = [
"You have to believe in yourself when no one else does.",
"When you have a dream, you’ve got to grab it and never let go.",
"The most important thing is to enjoy your life—to be happy—it’s all that matters.",
"Spread love everywhere you go. Let no one ever come without leaving happier.",
"Be yourself; everyone else is already taken.",
"The biggest adventure you can take is to live the life of your dreams.",
"The only thing we have to fear is fear itself.",
"I can accept failure, everyone fails at something. But I can’t accept not trying.",
"You’ve got to be in it to win it.",
"It does not matter how slowly you go, as long as you do not stop.",
"Find out who you are and do it on purpose.",
"Confident people have a way of carrying themselves that makes others attracted to them.",
"If you can do what you do best and be happy, you are further along in life than most people.",
"You can be everything. You can be the infinite amount of things that people are.",
"Always go with your passions. Never ask yourself if it’s realistic or not.",
"When you change your thoughts, remember to also change your world.",
"The more you know who you are, and what you want, the less you let things upset you.",
"By being yourself, you put something wonderful in the world that was not there before.",
"Do one thing every day that scares you.",
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
if (usedIndexes.size >= quotes.length){
    usedIndexes.clear()
}

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}