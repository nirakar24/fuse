// var tl = gsap.timeline()

function loading(){
    var i = 0
    setInterval(function(){
        i = i + Math.floor(Math.random()*10)

        if(i<100){
            document.querySelector(".overlay h2").innerHTML = i + "%"
        }else{
            i = 100
            document.querySelector(".overlay h2").innerHTML = i + "%"
        }
    },100)

}

gsap.to(".overlay",{
    top:"-100vh",
    opacity:0,
    delay:3,
    duration:2
})

gsap.from(".overlay .bg-img img",{
    // y:100,
    opacity:0,
    duration:1,  
})

gsap.from(".overlay h1",{
    // y:100,
    opacity:0,
    duration:1,  
})

gsap.from(".overlay h2",{
    // y:100,
    opacity:0,
    delay:1,
    duration:1,
    onStart:loading()
})

gsap.from(".intro-text",{
    opacity:0,
    delay:5
})

