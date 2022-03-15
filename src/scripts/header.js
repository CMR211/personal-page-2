// Header change of bg with site scroll
gsap.registerPlugin(ScrollTrigger)
gsap.to("#header", {
    scrollTrigger: {
        trigger: "#section-2",
        start: "top 40%",
        end: "top 80%",
        toggleActions: "play restart reverse",
    },
    duration: 0.5,
    backgroundColor: "rgb(60, 50, 50)",
    color: "white",
})

// Header initial animation
gsap.from("#header", {
    opacity: 0,
    y: -60,
    duration: 1,
})

// Bind scroll to target section to links in header
for (let i = 1; i <= 4; i++) {
    document.getElementById(`nav-item-${i}`).addEventListener("click", () => {
        disableScrollSnap = true
        document.querySelector(`#section-${i}`).scrollIntoView()
        setTimeout(() => (disableScrollSnap = false), 1000)
    })
}
