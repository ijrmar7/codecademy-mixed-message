const mixedMessage = {
    messages: {
        jokes: [
            "Why do we tell actors to “break a leg? Because every play has a cast.",
            'Helvetica and Times New Roman walk into a bar. ""Get out of here!" shouts the bartender. "We don\'t serve your type."',
            "Hear about the new restaurant called Karma? There's no menu: You get what you deserve.",
            "Did you hear about the claustrophobic astronaut? He just needed a little space.",
            "Why don't scientists trust atoms? Because they make up everything.",
            "Where are average things manufactured? The satisfactory.",
            "How do you drown a hipster? Throw him in the mainstream.",
            "What does a nosy pepper do? Gets jalapeño business!",
            "How does Moses make tea? He brews.",
            "Why can't you explain puns to kleptomaniacs? They always take things literally."
        ],
        trivias: [
            "A reservoir in space holds 140 trillion times the amount of water in Earth's oceans.",
            'The word "muscle" comes from a Latin term meaning "little mouse."',
            "Tic Tac mints are named after the sound their container makes.",
            "Dr. Seuss wrote Green Eggs and Ham as part of a bet.",
            "Peanuts can be used to make dynamite.",
            "The largest volcano in the solar system is three times taller than Mount Everest.",
            "An 11-year-old is responsible for naming  Pluto.",
            "Armadillos swallow air to become buoyant when they swim.",
            "People write love letters to trees in Australia via email.",
            "On Mars, sunsets are blue."
        ],
        advices: [
            "If you stare at something you dropped on the ground, eventually someone will pick it up for you.",
            "Never take decisions when you are angry and don't make promises when you are happy.",
            "Don't set your goals around people, because people change.",
            "Never be afraid of rejection.",
            "Floss. Its more important than you think.",
            "Happiness is a choice rest all is a matter of perspective.",
            "Life is short, don't waste it living someone else's life.",
            "Love is like a fart. If you have to force it, it's probably sh*t.",
            "If you accidentally closed a browser tab, CTRL + SHIFT + T will reopen it.",
            "Make great efforts to be a man you want your daughter to marry."
        ]
    },
    genRandNum: function(x) {
        return Math.floor(Math.random() * x);
    },
    getMessage: function(name) {
        const rand = this.genRandNum;
        const mixedArr = [];
        if(name) {
            console.log("Hello " + name + '!');
        } else {
            console.log("Hello!");
        }
        for(const message in this.messages) {
            const randNum = rand(this.messages[message].length);
            switch(message) {
                case 'jokes':
                    mixedArr.push("Your today's joke is: " + this.messages[message][randNum]);
                    break;
                case 'trivias':
                    mixedArr.push("Your today's trivia is: " + this.messages[message][randNum]);
                    break;
                case 'advices':
                    mixedArr.push("Your today's advice is: " + this.messages[message][randNum]);
                    break;
            }
        }
        return mixedArr.join('\n');
    }
}
const username = process.argv[2] || 'User';
console.log(mixedMessage.getMessage(username));