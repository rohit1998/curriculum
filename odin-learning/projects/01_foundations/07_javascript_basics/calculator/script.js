DEFAULT_MAIN_STRING="0";
DEFAULT_INFO_STRING="";
ADD="+";
SUB="-";
MUL="x";
DIV="÷";
DOT=".";
OPS = [ADD,SUB,MUL,DIV]

let mainScreenString=DEFAULT_MAIN_STRING;
let infoScreenString=DEFAULT_INFO_STRING;

function getOpSymbol(clickId){
    switch(clickId){
        case "add":
            return ADD;
        case "sub":
            return SUB;
        case "mul":
            return MUL;
        case "div":
            return DIV;
        default:
            return null;
    }
}

function removeTrailingZeros(str) {
    return str.replace(/(\.\d*?[1-9])0+$/,'$1').replace(/\.0+$/,'').replace(/(\.\d*?)0+$/, '$1');
}

function doOp(leftNumberString, opSymbol, rightNumberString){
    const leftNumber = Number(leftNumberString);
    const rightNumber = Number(rightNumberString);
    switch(opSymbol){
        case ADD:
            return removeTrailingZeros((leftNumber+rightNumber).toFixed(3));
        case SUB:
            return removeTrailingZeros((leftNumber-rightNumber).toFixed(3));
        case MUL:
            return removeTrailingZeros((leftNumber*rightNumber).toFixed(3));
        case DIV:
            return removeTrailingZeros((leftNumber/rightNumber).toFixed(3));
        default:
            return null;
    }
}

function handleClear(){
    mainScreenString=DEFAULT_MAIN_STRING;
    infoScreenString=DEFAULT_INFO_STRING;
}

function handleDelete(){
    mainScreenString = mainScreenString.slice(0, -1);
    if (mainScreenString.length===0){
        mainScreenString=DEFAULT_MAIN_STRING;
    }
}

function handleOp(clickId){
    handleEq();
    const opSymbol = getOpSymbol(clickId);
    infoScreenString=`${mainScreenString} ${opSymbol}`;
    mainScreenString=DEFAULT_MAIN_STRING;
}


function handleDot(){
    if (!mainScreenString.includes(DOT)){
        mainScreenString+=DOT;
    }
}

function handleEq(){
    if (infoScreenString===DEFAULT_INFO_STRING){
        return;
    } else {
        const [leftNumberString, opSymbol] = infoScreenString.split(' ');
        const rightNumberString = mainScreenString;
        const result = doOp(leftNumberString, opSymbol, rightNumberString);
        infoScreenString=DEFAULT_INFO_STRING;
        mainScreenString=result;
    }
}

function handleDigit(clickId){
    if (mainScreenString===DEFAULT_MAIN_STRING){
        mainScreenString=clickId;
    } else{
        mainScreenString+=clickId;
    }
}

function handleClick(clickId){
    switch(clickId){
        case "clear":
            return handleClear();
        case "delete":
            return handleDelete();
        case "add":
        case "sub":
        case "mul":
        case "div":
            return handleOp(clickId);
        case "dot":
            return handleDot();        
        case "eq":
            return handleEq();   
        default:
            return handleDigit(clickId);
    }
}

function handleClickWrapper(event){
    
    if ((event) && (event.target.tagName==="BUTTON")){
        handleClick(event.target.id);
    }
    
    const mainScreenElement = document.querySelector("#main")
    const infoScreenElement = document.querySelector("#info")
    mainScreenElement.textContent=mainScreenString;
    infoScreenElement.textContent=infoScreenString;
}

function getClickIdFromKey(key) {
    const keyMap = {
        '0': '0', '1': '1', '2': '2', '3': '3', '4': '4',
        '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
        '+': 'add',
        '-': 'sub', 
        '*': 'mul',
        '/': 'div',
        '.': 'dot',
        'Enter': 'eq',
        '=': 'eq',
        'Escape': 'clear',
        'Backspace': 'delete',
        'Delete': 'delete'
    };
    return keyMap[key] || null;
}

function handleKeydown(event) {
    const clickId = getClickIdFromKey(event.key);
    if (clickId) {
        event.preventDefault();
        handleClick(clickId);
        
        const mainScreenElement = document.querySelector("#main");
        const infoScreenElement = document.querySelector("#info");
        mainScreenElement.textContent = mainScreenString;
        infoScreenElement.textContent = infoScreenString;
    }
}

document.addEventListener("keydown", handleKeydown);
document.querySelector("#calculator-buttons").addEventListener("click", handleClickWrapper);
handleClickWrapper();