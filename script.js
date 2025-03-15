const display = document.getElementById("display")

function inpChar(input){
    const lastchar = display.value.slice(-1);
    const operator = "-=/*%"
    if(operator.includes(lastchar) && operator.includes(input)){
        return;
    }
    display.value +=input;
}
function clearDisplay(){
    display.value = "";
}
function deleteLast(){
    if(display.value.length === 0){
        return;
    }else{
        display.value = display.value.slice(0,-1);
    }
}
function calculate(){
    display.value = eval(display.value);
}
