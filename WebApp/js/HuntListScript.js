const appName = "CursedGold";
const userName = "test";

const challengeList = document.getElementById("challengeList");

//Hunt Table Function
function declareHunt(hunt) {

    let huntTable = document.createElement("table");
    huntTable.className = "huntTable";

    let hRow = document.createElement("tr");
    let heading = document.createElement("th");
    heading.textContent = hunt.name;
    heading.colSpan = 2;

    hRow.appendChild(heading);
    huntTable.appendChild(hRow);
    return huntTable;
}

// Description Row Function
function declareDRow(huntTable, hunt) {
    let dRow = document.createElement("tr");
    let dHeading = document.createElement("th");
    dHeading.textContent = "Description";

    let dValue = document.createElement("td");
    dValue.textContent = hunt.description;

    dRow.appendChild(dHeading);
    dRow.appendChild(dValue);
    huntTable.appendChild(dRow);

}
function huntArray(translatedJson) {
    const HuntArray = translatedJson.treasureHunts;
    for (let i= 0; i < HuntArray.length ; i++) {

        //Declare Hunt Table
        const hunt = HuntArray[i];
        let huntTable = declareHunt(HuntArray[i]);

        //Description ROw
        declareDRow(huntTable, hunt);

        //Join Row
        let jRow = document.createElement("tr");
        let jCell = document.createElement("td");
        jCell.innerHTML = "<a href='https://codecyprus.org/th/api/start?player=" + userName + "&app="+ appName +"&treasure-hunt-id=" + HuntArray[i].uuid + "'>Join Hunt</a>";
        jCell.colSpan = 2;
        jCell.style.textAlign = "center";
        jRow.appendChild(jCell);
        huntTable.appendChild(jRow);

        challengeList.appendChild(huntTable);


    }
}

//Active Hunts
fetch("https://codecyprus.org/th/api/list?include-active")
    .then(response => response.json())
    .then(translatedJson => {
        console.log(translatedJson);
        huntArray(translatedJson);
    })

