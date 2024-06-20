const textbox = document.querySelectorAll(".textbox");
addEventListener("keydown", keyEvent);
console.log(textbox.length);
textbox[12].style.color="blue";
let indexNum = 0;

function keyEvent(event){
    const key = event.key;
    if (key == "Enter"){
        checkFunction(indexNum);
    }
    else if ((event.keyCode > 64) && (event.keyCode < 91)) {
        textbox[indexNum].innerHTML = `${key}`;
        indexNum++;
        console.log(`${event.keyCode}`);
    }
    else{
        return;
    }
}

function checkFunction(indexNum){
    if((indexNum%5) != 0){
        console.log("check again");
    }
    else {
        indexNum++;
    }
}

