let sum = 0;
let buff = "0";
let prevOp;

const display = document.querySelector('.display');

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
    display.innerText = buff;

}
function handleSymbol(symbol)
{
    switch(symbol)
    {
        case 'C':
            buff = "0";
            sum = 0;
            break;
        case '.':
            buff =buff+'.';
            break;
        case '%':
            buff = buff/100;
            break;
        case '=':
            if(prevOp === null)
            {
                return;
            }
            flushOperation(parseFloat(buff));
            prevOp=null;
            buff = sum;
            sum = 0;
            break;
        case '←':
            if(buff.length === 1){
                buff = "0";
            }
            else{
                buff = buff.substring(0,buff.length -1);

            }
            break;
        case '+':
        case '−':
        case '×':
        case'÷':
            handleMath(symbol);
            break;



    }
}
function handleMath(symbol){
    if(buff === "0")
    {
        return;
    }
    const intBuff = parseFloat(buff);
    if(sum === 0)
    {
        sum = intBuff;
    }
    else{
        flushOperation(intBuff);
    }
    prevOp = symbol;
    buff = "0";
}

function flushOperation(intBuff)
{
    if(prevOp === '+')
    {
        sum += intBuff;
    }
    else if(prevOp ==='−'){
        sum -= intBuff;
    }
    else if(prevOp === '×')
    {
        sum = sum * intBuff;
    }
    else if (prevOp === '÷')
    {
        sum = sum / intBuff;
    }
}

function handleNumber(numStr){
    if(buff === "0"){
        buff = numStr;
    }
    else{ buff += numStr;}
}

function init(){
    document.querySelector('.buttons').addEventListener('click',
    function(event){
        buttonClick(event.target.innerText);
    }
    )

}
init();