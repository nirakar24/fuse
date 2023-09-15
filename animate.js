const tl = gsap.timeline();


tl.from("#logo2", {
  y: -100,
  opacity: 0,
  duration: 2,
});

tl.from(".count-down", {
  opacity: 0,
  duration: 1,
}, "-=1"); 

tl.from(".centered-button", {
  opacity: 0,
  duration: 3,
  stagger: 0.5,
}, "-=1"); 

tl.call(() => {
    document.querySelector(".button").addEventListener("click", function () {
      window.open("../../game/index.html", "_blank"); // Open the game link in a new tab
    })

});