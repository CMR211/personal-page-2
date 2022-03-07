gsap.registerPlugin(ScrollTrigger);

gsap.to("#header", {
    scrollTrigger: {
        trigger: "#section-2",
        start: "top 40%",
        end: "top 80%",
        toggleActions: "play restart reverse",
        // markers: true,
    },
    duration: 0.5,
    backgroundColor: "rgb(60, 50, 50)",
    color: "white",
})

gsap.from("#header", {
    opacity: 0,
    y: -60,
    duration: 1,
})