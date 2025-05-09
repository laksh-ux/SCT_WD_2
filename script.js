const display = document.getElementById('display');
function appendChar(char){
    display.value += char;
}
function clearDisplay(){
    display.value = ' ';
}
function deleteChar(){
    display.value = display.value.slice(0,-1);
}
function calculate(){
    try{
        display.value = eval(display.value);
    } catch (error){
        alert("Invalid Expression");
    }
    
}
document.addEventListener('keydown',function(event){
    const validKeys = '0123456789/*-+.%';
    if (validKeys.includes(event.key)){
        appendChar(event.key);
    } else if (event.key === 'Enter'){
        calculate();
    } else if (eventkey === 'Backspace'){
        deleteChar();
    } else if (event.key === 'Escape'){
        clearDisplay();
    }
});