var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#home",
        start: "top top",
        markers: true,
        scrub: 1,
        pin: true,
    }
});

tl.
to("#circle", {
    scale: .2,
    ease: Power0,
}, "same")

.to("#smcircle", {
    scale: .7,
    ease: Power0,
}, "same")

.to("#circle #btm img", {
    rotate: "-180deg",
    ease: Power0,
    stagger: .03,
}, "same")