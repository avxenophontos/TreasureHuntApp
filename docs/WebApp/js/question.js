/*
Question
 */

function getCookie(cookieName) {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();

        if (cookie.startsWith(cookieName + "=")) {
            return cookie.substring(cookieName.length + 1)
        }
    }
    return ""
}

const sessionUUID = getCookie("session");
function submitAnswer(answer) {

    fetch("https://codecyprus.org/th/api/answer?session=" + sessionUUID + "&answer=" + answer)
        .then(res => res.json())
        .then(json => {
            console.log(json);
        });

}

function mcqQuestion(){
    console.log("MCQ Question");

    let questionArea = document.getElementById("answerArea");

    let optionA = document.createElement("button");
    optionA.textContent = "A";
    questionArea.appendChild(optionA);
    optionA.addEventListener("click", function() {
        submitAnswer("A");
    });

    let optionB = document.createElement("button");
    optionB.textContent = "B";
    questionArea.appendChild(optionB);
    optionB.addEventListener("click", function() {
        submitAnswer("B");
    });

    let optionC = document.createElement("button");
    optionC.textContent = "C";
    questionArea.appendChild(optionC);
    optionC.addEventListener("click", function() {
        submitAnswer("C");
    });

    let optionD = document.createElement("button");
    optionD.textContent = "D";
    questionArea.appendChild(optionD);
    optionD.addEventListener("click", function() {
        submitAnswer("D");
    });

}
function textQuestion(){
    console.log("Text Question");
    let answerArea = document.getElementById("answerArea");

    let text = document.createElement("textarea");
    text.placeholder = "Enter answer here: "
    answerArea.appendChild(text);

    let submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    answerArea.appendChild(submitButton);

    submitButton.addEventListener("click", function() {
        submitAnswer(text.value);
    });
}
function booleanQuestion(){

    console.log("Boolean Question");
    let answerArea = document.getElementById("answerArea");

    let optionA = document.createElement("button");
    optionA.textContent = "TRUE";
    answerArea.appendChild(optionA);
    optionA.addEventListener("click", function() {
        submitAnswer("TRUE");
    });

    let optionB = document.createElement("button");
    optionB.textContent = "FALSE";
    answerArea.appendChild(optionB);
    optionB.addEventListener("click", function() {
        submitAnswer("FALSE");
    });
}
function integerQuestion(){
    console.log("Integer Question");

    let answerArea = document.getElementById("answerArea");

    let integer = document.createElement("input");
    integer.placeholder = "Enter a number:";
    integer.type = "number"
    integer.step = "1"
    answerArea.appendChild(integer);


    let submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    answerArea.appendChild(submitButton);

    submitButton.addEventListener("click", function() {
        submitAnswer(integer.value);
    });
}

fetch("https://codecyprus.org/th/api/question?session=" + sessionUUID)
    .then(res => res.json())
    .then(json => {
        console.log(json);
        document.getElementById("questionArea").innerHTML = json.questionText;
        switch (json.questionType) {
            case "MCQ":
                console.log("MCQ");
                mcqQuestion();
                break;
            case "TEXT":
                console.log("TEXT");
                textQuestion();
                break;
            case "NUMERIC":
                numericQuestion();
                break;
            case "BOOLEAN":
                console.log("Boolean");
                booleanQuestion();
                break;
            case "INTEGER":
                console.log("INTEGER");
                integerQuestion();
                break;
        }
    }
    )
