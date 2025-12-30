import { firstConjugationVerbs } from "../../verb-base/1st-conj.js";
import { secondConjugationVerbs } from "../../verb-base/2nd.conj.js";
import { thirdConjugationVerbs } from "../../verb-base/3rd.conj.js";
import { fourthConjugationVerbs } from "../../verb-base/4th-conj.js";

const state = {
    mood: "indicative",
    voice: "active",
    tense: "present",
    key: "indicative-active-present"
}

let currentWordObject;

function generateVerb() {
    const getSelectedDeclension = document.getElementById("new-verb-button");

    getSelectedDeclension.addEventListener("click", () => {

        const resultDiv = document.getElementById("result-verb-container-div");
        resultDiv.innerHTML = "";

        document.querySelectorAll(".answer").forEach(input => {
            input.value = "";
        })

        let randomWord;
        let conjugation = document.getElementById("conjugation-dropdown").value;

        switch(conjugation) {
            case "1st-conj":
                currentWordObject = firstConjugationVerbs[Math.floor(Math.random() * firstConjugationVerbs.length)];
                randomWord = currentWordObject.Infinitive.infinitive.inf;
                break;
            case "2nd-conj":
                currentWordObject = secondConjugationVerbs[Math.floor(Math.random() * secondConjugationVerbs.length)];
                randomWord = currentWordObject.Infinitive.infinitive.inf;
                break;
            case "3rd-conj":
                currentWordObject = thirdConjugationVerbs[Math.floor(Math.random() * thirdConjugationVerbs.length)];
                randomWord = currentWordObject.Infinitive.infinitive.inf;
                break;
            case "4th-conj":
                currentWordObject = fourthConjugationVerbs[Math.floor(Math.random() * fourthConjugationVerbs.length)];
                randomWord = currentWordObject.Infinitive.infinitive.inf;
                break;
        }

            document.getElementById("verb-presenter").innerHTML = "Your word is: " + randomWord;
            document.getElementById("principle-parts").innerHTML = "Principle parts: " + currentWordObject.PrincipleParts.Present + ", " +
            currentWordObject.PrincipleParts.Infinitive + ", " + currentWordObject.PrincipleParts.Perfect + ", " + currentWordObject.PrincipleParts.Supine;
    })
}

generateVerb()

document.querySelectorAll(".starting-form").forEach(form => {
    form.classList.add("active");
})

function updateOptions() {
    document.querySelectorAll(".verb-choice-button").forEach(button => {
        const shouldDisable =
            state.mood === "subjunctive" &&
            (button.dataset.tense === "future" ||
            button.dataset.tense === "futurePerfect");

        button.disabled = shouldDisable;
        
        if(state.mood === "subjunctive" &&
            (button.dataset.tense === "future" ||
            button.dataset.tense === "futurePerfect")) {
                button.classList.remove("active");
            }
    });
}

const combinations = {
    "indicative-active-present": { mood: "ActiveIndicative", tense: "present" },
    "indicative-active-imperfect": { mood: "ActiveIndicative", tense: "imperfect" },
    "indicative-active-future": { mood: "ActiveIndicative", tense: "future" },
    "indicative-active-perfect": { mood: "ActiveIndicative", tense: "perfect" },
    "indicative-active-pluperfect": { mood: "ActiveIndicative", tense: "pluperfect" },
    "indicative-active-futurePerfect": { mood: "ActiveIndicative", tense: "futurePerfect" },

    "indicative-passive-present":  { mood: "PassiveIndicative", tense: "present" },
    "indicative-passive-imperfect": { mood: "PassiveIndicative", tense: "imperfect" },
    "indicative-passive-future":  { mood: "PassiveIndicative", tense: "future" },
    "indicative-passive-perfect":  { mood: "PassiveIndicative", tense: "perfect" },
    "indicative-passive-pluperfect":  { mood: "PassiveIndicative", tense: "pluperfect" },
    "indicative-passive-futurePerfect":  { mood: "PassiveIndicative", tense: "futurePerfect" },

    "subjunctive-active-present":  { mood: "ActiveSubjunctive", tense: "present" },
    "subjunctive-active-imperfect":  { mood: "ActiveSubjunctive", tense: "imperfect" },
    "subjunctive-active-perfect":  { mood: "ActiveSubjunctive", tense: "perfect" },
    "subjunctive-active-pluperfect":  { mood: "ActiveSubjunctive", tense: "pluperfect" },

    "subjunctive-passive-present":  { mood: "PassiveSubjunctive", tense: "present" },
    "subjunctive-passive-imperfect":  { mood: "PassiveSubjunctive", tense: "imperfect" },
    "subjunctive-passive-perfect":  { mood: "PassiveSubjunctive", tense: "perfect" },
    "subjunctive-passive-pluperfect":  { mood: "PassiveSubjunctive", tense: "pluperfect" },
}

function updateActive(clickedButton, category) {
    const container = clickedButton.parentElement;

    container
        .querySelectorAll(`.verb-choice-button[data-${category}]`)
        .forEach(btn => btn.classList.remove("active"));

    clickedButton.classList.add("active");
}

document.querySelectorAll(".verb-choice-button").forEach(button => {
    button.addEventListener("click", () => {
        if(button.dataset.mood) {
            state.mood = button.dataset.mood;
            updateActive(button, "mood");
            updateOptions();
        }

        if(button.dataset.voice) {
            state.voice = button.dataset.voice;
            updateActive(button, "voice");
        }

        if(button.dataset.tense) {
            state.tense = button.dataset.tense;
            updateActive(button, "tense");
        }
        
        state.key = `${state.mood}-${state.voice}-${state.tense}`;
    });
});

function ShowAnswers() {
    const combo = combinations[state.key];

    if(!combo) {
        return;
    }

    const verbForm = currentWordObject[combo.mood][combo.tense];
    
    const answers = [
        document.getElementById("1st per.sg").value,
        document.getElementById("1st per.pl").value,
        document.getElementById("2nd per.sg").value,
        document.getElementById("2nd per.pl").value,
        document.getElementById("3rd per.sg").value,
        document.getElementById("3rd per.pl").value
    ]

    const correctAnswers = [
        verbForm.firstPerSg,
        verbForm.firstPerPl,
        verbForm.secondPerSg,
        verbForm.secondPerPl,
        verbForm.thirdPerSg,
        verbForm.thirdPerPl
    ]

    const resultDiv = document.getElementById("result-verb-container-div");
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

const AnswerButton = document.getElementById("verb-answer-button");
AnswerButton.addEventListener("click", function() {
    ShowAnswers();
})