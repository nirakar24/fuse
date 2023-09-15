var tl = gsap.timeline();

function loading(){
    var i=0
    setInterval(function(){
        i = i + Math.floor(Math.random()*2)
        if(i<100){
            document.querySelector(".overlay h2").innerHTML = i + "%"
        }
        else{
            i=100
            document.querySelector(".overlay h2").innerHTML = i + "%"
        }

    },20)
}
// loading()

tl.from(".overlay .level-img",{
    opacity:0,
    duration:2
})

tl.from(".overlay h1",{
    // delay:1,
    duration:2,
    opacity:0,
})

tl.from(".overlay h2",{
    // y:100,
    // delay:1,
    opacity:0,
    duration:1,
    onStart:loading()
},"-=1")

tl.to(".overlay",{
    top:"-100vh",
    delay:2,
    duration:2
})