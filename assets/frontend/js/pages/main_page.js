
// NOTE: typed.js init
var typed = new Typed("#headerTyped", {
    strings: ["Mobile Apps.", "Apps Design.", "Web Frontend.", "Web Backend.", "Web Design."],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    startDelay: 0,
    loop: true
  });

AOS.init({
  offset: -350,
  duration:700,
  easing:"ease-out-quad",
  once: false,
  startEvent:"load"
});