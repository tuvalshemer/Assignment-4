function HandleOptionChange() {
    let bagrutPsychometric = document.getElementById("optionBP");
    let bagrutMechina = document.getElementById("optionBM");
    let psychometricGrade = document.getElementById("psychometricGrade");
    let mechinaGrade = document.getElementById("mechinaGrade");
    
    if (bagrutPsychometric.checked === true) {
        mechinaGrade.disabled = true;
        psychometricGrade.disabled = false;
    }
    else if (bagrutMechina.checked === true) {
        psychometricGrade.disabled = true;
        mechinaGrade.disabled = false;
    }
}

function Validate() {
    let bagrutGrade = document.getElementById("bagrutGrade");
    let age = document.getElementById("age");
    let resultMessage = document.getElementById("resultMessage");
    
    if (bagrutGrade.value === "") {
        window.alert("You should enter a bagrut grade");
        bagrutGrade.focus();
        return false;
    }
    
    if (age.value !== "" && parseInt(age.value) > 30) {
        resultMessage.className = "green";
        resultMessage.textContent = "You are eligible for admission to any faculty you choose";
    }
    else {
        resultMessage.className = "";
        resultMessage.textContent = "";
    }
    
    return true;
}