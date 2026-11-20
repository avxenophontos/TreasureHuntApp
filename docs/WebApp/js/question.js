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

fetch("https://codecyprus.org/th/api/question?session=" + sessionUUID)
    .then(res => res.json())
    .then(json => {
        console.log(json);
        document.getElementById("questionArea").innerHTML = json.questionText;
    })