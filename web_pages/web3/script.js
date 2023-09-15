console.log(`
<footer>
<div class="footer-section">
    
    <p>I'm a puzzle, a mystery to untangle,
        Among these letters, you must find the angle.
        Bold they stand, unique and true,
        But the order's amiss, a task for you.</p>
    <p>In the alphabet's realm, your mission takes flight,
        Arrange them rightly, like day turns to night.
        Each bold letter stands, a hint to portray,
        Solve the puzzle, and the path will lay.</p>
</div>
<div class="footer-section">
    
    <p>You've journeyed far, with letters in a line,
        But now, a challenge awaits, a shift in time.
        To progress, you must take a step quite rare,
        Not forward, my friend, but back with care.</p>
        <p>six steps back in the alphabet's embrace,
            A move in reverse, at a slower pace.
            Though it may seem strange, it's the way to proceed,
            To uncover the secrets that lie ahead, indeed.</p>
</div>
</footer>

code --> 1209

`);

// function redirect(){
//     window.location.replace("./../../game/level3.html");
// }

function checkCode() {
    console.log(codeInput.value);
if (codeInput.value === '1209') { 
    window.location.replace("./../../target_website/index.html");

} else {
alert('Incorrect code. Try again.');
}
}
