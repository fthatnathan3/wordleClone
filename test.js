let answerWord = ['a','p','p','l','e'];
let userAnswer = [];
let textboxColor = [];
let colIndex = 1;
let rowIndex = 0;
let isUsrWin = false;
window.addEventListener("keydown", takeInput);
let tbox = document.getElementById("test1");


function takeInput (event,index){
    let textbox = document.querySelectorAll(`#col${colIndex} .textbox`)
    let pressedKey = event.key;
    let keycode = event.keyCode;

    if (pressedKey == "Enter"){
        isEnter(textbox);
    }

    else if ((keycode >= 65) && (keycode <= 90)) {
        //only accepting alphabet input
        textbox[rowIndex].textContent=`${pressedKey}`;
        userAnswer[rowIndex] = pressedKey;
        //printOnTextbox(key, event,textbox);
        console.log(userAnswer);
        rowIndex++; 
    }
   
    else if ((pressedKey == "Backspace") && (rowIndex >0)){
        isBackspace(textbox);
    }
    
}

function printOnTextbox(key, event, textbox){
    //textbox[rowIndex].innerHTML = (`${key}`);
}

function isEnter(textbox){
    if (userAnswer.length < 5){
        //notLongEnough();
        console.log("fill the empty box");
    }
    else{
        userAnswer.forEach(checkAnswer); 
        console.log(textboxColor);
        tBoxColorChange(textbox);
        colIndex++;
        userAnswer = [];
        rowIndex = 0;
        answerWord = ['a','p','p','l','e'];
        isWin;
    }
    console.log("isEnter");
    
}

function isBackspace(textbox){
    rowIndex--;
    textbox[rowIndex].textContent=``;
    userAnswer.splice(rowIndex,1);

    console.log("isBackspace");
}
function tBoxColorChange(textbox){
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

function isWin() {
    greenCount;
    textboxColor.forEach((e) =>{
        if(e=="green"){
            greenCount++
        }  
    })
    if (greenCount = 5){
        isUsrWin = true;
        console.log("You Win")
    }
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
        else if (answerWord.includes(usrAnswer[index])) {
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
    }
    else if (isYellow){
        console.log("yellow");
        textboxColor[answerIndex] = 'yellow';
    }
    else if (isRed){
        console.log("red");
        textboxColor[answerIndex] = 'red';
    }
}