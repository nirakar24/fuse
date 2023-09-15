function checkCode() {
    console.log(codeInput.value);
if (codeInput.value === 'XQZJAC') { 
    window.location.replace("./final.html");

} else {
alert('Incorrect code. Try again.');
}
}

function redirect(){
    window.location.replace("./../../game/level3.html");
}