let answerWord = ['a','p','p','l','e'];
let userAnswer = [];
let textboxColor = [];
let colIndex = 1;
let rowIndex = -1;
window.addEventListener("keydown", takeInput);
let tbox = document.getElementById("test1");
let textbox = document.querySelectorAll(`#col${colIndex} .textbox`)
//console.log(tbox.innerText);

function takeInput (event,index){
    rowIndex++; 
    let pressedKey = event.key;
    let keycode = event.keyCode;

    if (pressedKey == "Enter"){
        isEnter();
    }

    else if ((keycode >= 65) && (keycode <= 90)) {
        textbox[rowIndex].textContent=`${pressedKey}`;
        userAnswer[rowIndex] = pressedKey;
        //printOnTextbox(key, event,textbox);
        console.log("isAlphabet");
    }
   
    else if (pressedKey === "Backspace"){
        isBackspace();
    }

}

function printOnTextbox(key, event, textbox){
    //textbox[rowIndex].innerHTML = (`${key}`);
}

function isEnter(){
    if (userAnswer.length < 5){
        //notLongEnough();
        console.log("fill the empty box");
    }
    else{
        userAnswer.forEach(checkAnswer); 
        console.log(textboxColor);
        tBoxColorChange();
    }
    console.log("isEnter");
    
}

function isBackspace(){
    console.log("isBackspace");
}
function tBoxColorChange(){
    textboxColor.forEach((color,index) =>{
        switch (color){
            case "green" :
                textbox[index].setAttribute("data-color", "green");
                break;
            
            case "yellow" :
                textbox[index].setAttribute("data-color", "yellow");
                break;

            case "red" :
                textbox[index].setAttribute("data-color", "red");
                break;

        }
    })

}
function checkAnswer(usrAnswer,index){
    answerIndex = index;
    console.log(usrAnswer);
    let isGreen = false;
    let isYellow = false;
    let isRed = false;
    answerWord.forEach((ansChar,index) => {
    
        if ((usrAnswer == ansChar) && (answerIndex == index) && (ansChar != 0))
        {
            isGreen = true;
        }
        else if ((usrAnswer == ansChar) && (ansChar != 0)) {
            isYellow = true;
        }
        else if ((ansChar != 0)){
            isRed = true;
        }
        else {
        }
    })
    if (isGreen){ 
        console.log("green");
        textboxColor[answerIndex] = 'green';
        answerWord[answerIndex] = 0;
    }
    else if (isYellow){
        console.log("yellow");
        textboxColor[answerIndex] = 'yellow';
        answerWord[answerIndex] = 0;
    }
    else if (isRed){
        console.log("red");
        textboxColor[answerIndex] = 'red';
    }
}