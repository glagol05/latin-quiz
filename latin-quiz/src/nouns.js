import { firstDeclensionNouns } from "../../word-base/1st-decl.js";
import { secondDeclensionNouns } from "../../word-base/2nd-decl.js";
import { thirdDeclensionNouns } from "../../word-base/3rd-decl.js";
import { fourthDeclensionNouns } from "../../word-base/4th-decl.js";
import { fifthDeclensionNouns } from "../../word-base/5th-decl.js";

let currentWordObject = [];

function generateNoun() {
    const getSelectedDeclension = document.getElementById("new-word-button");

    getSelectedDeclension.addEventListener("click", () => {

        const resultDiv = document.getElementById("result-container-div");
        resultDiv.innerHTML = "";

        document.querySelectorAll(".answer").forEach(input => {
            input.value = "";
        })

        let randomWord;
        let declension = document.getElementById("declension-dropdown").value;

        switch(declension) {
            case "1st-decl":
                currentWordObject = firstDeclensionNouns[Math.floor(Math.random() * firstDeclensionNouns.length)];
                randomWord = currentWordObject.forms.nom.sg;
                break;
            case "2nd-decl":
                currentWordObject = secondDeclensionNouns[Math.floor(Math.random() * secondDeclensionNouns.length)];
                randomWord = currentWordObject.forms.nom.sg;
                break;
            case "3rd-decl":
                currentWordObject = thirdDeclensionNouns[Math.floor(Math.random() * thirdDeclensionNouns.length)];
                randomWord = currentWordObject.forms.nom.sg;
                break;
            case "4th-decl":
                currentWordObject = fourthDeclensionNouns[Math.floor(Math.random() * fourthDeclensionNouns.length)];
                randomWord = currentWordObject.forms.nom.sg;
                break;
            case "5th-decl":
                currentWordObject = fifthDeclensionNouns[Math.floor(Math.random() * fifthDeclensionNouns.length)];
                randomWord = currentWordObject.forms.nom.sg;
                break;
        }

            document.getElementById("word-presenter").innerHTML = "Your word is: " + randomWord + ", " + currentWordObject.forms.gen.sg;
    })
}

generateNoun()

function ShowAnswers() {
    const answers = [
        document.getElementById("nom.sg").value,
        document.getElementById("nom.pl").value,
        document.getElementById("gen.sg").value,
        document.getElementById("gen.pl").value,
        document.getElementById("dat.sg").value,
        document.getElementById("dat.pl").value,
        document.getElementById("acc.sg").value,
        document.getElementById("acc.pl").value,
        document.getElementById("abl.sg").value,
        document.getElementById("abl.pl").value,
    ]

    const correctAnswers = [
        currentWordObject.forms.nom.sg,
        currentWordObject.forms.nom.pl,
        currentWordObject.forms.gen.sg,
        currentWordObject.forms.gen.pl,
        currentWordObject.forms.dat.sg,
        currentWordObject.forms.dat.pl,
        currentWordObject.forms.acc.sg,
        currentWordObject.forms.acc.pl,
        currentWordObject.forms.abl.sg,
        currentWordObject.forms.abl.pl
    ]

    const resultDiv = document.getElementById("result-container-div");
    resultDiv.innerHTML = "";

    for(let i = 0; i < answers.length; i++) {
        const answerText = document.createElement("p");
        const span = document.createElement("span");
        span.className = "cell";

        if(answers[i] != correctAnswers[i]) {
            span.classList.add("incorrect-answer");
        }

        span.innerText = correctAnswers[i];
        answerText.appendChild(span);
        resultDiv.appendChild(answerText);
    }

}

const AnswerButton = document.getElementById("answer-button");
AnswerButton.addEventListener("click", function() {
    ShowAnswers();
})