const mixedMessage = {
    messages: {
        jokes: ['to be filled'],
        trivias: ['to be filled'],
        advices: ['to be filled']
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
        for(obj in this.messages) {
            const randNum = rand(this.messages[obj].length);
            switch(obj) {
                case 'jokes':
                    mixedArr.push("Your today's joke is: " + this.messages[obj][randNum]);
                    break;
                case 'trivias':
                    mixedArr.push("Your today's trivia is: " + this.messages[obj][randNum]);
                    break;
                case 'advices':
                    mixedArr.push("Your today's advice is: " + this.messages[obj][randNum]);
                    break;
            }
        }
        return mixedArr.join('\n');
    }
}
const username = process.argv[2] || 'User';
console.log(mixedMessage.getMessage(username));