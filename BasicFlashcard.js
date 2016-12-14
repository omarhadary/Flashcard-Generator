var inquirer = require("inquirer");
var fs = require("fs");

function BasicFlashcard(front, back) {
    this.front = front;
    this.back = back;
};

var createBasicFlashcard = function() {
    inquirer.prompt([
        {
            name: "front",
            message: "What is the flashcard question?"
        }, {
            name: "back",
            message: "What is the answer?"
        }
    ]).then(function(answers) {
        var flashcard = new BasicFlashcard(answers.front, answers.back);
        fs.appendFile("flashcards.txt", "Flashcard question is: "+answers.front+"\nFlashcard answer is: "+answers.back+"\n#*#*#*#*#*", "utf8");
    });

};

createBasicFlashcard();