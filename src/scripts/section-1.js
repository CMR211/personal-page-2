const anim1a = document.querySelectorAll(".anim1a")
const timeline1 = gsap.timeline()
timeline1
    .from(anim1a, {
        y: -10,
        opacity: 0,
        stagger: 0.3,
        duration: 0.5,
        ease: "easeIn",
    })
    .from(".anim1b", {
        opacity: 0,
        duration: 0.5,
        ease: "easeInOut",
    }, "<")

const heroButton = document.getElementById("hero4")
heroButton.addEventListener("click", () => {
    const section2 = document
        .getElementById("section-2")
        .getBoundingClientRect()
    timeline1.reverse()
    setTimeout(() => window.scrollTo({ top: section2.top, behavior: "smooth" }), 1000)
    setTimeout(() => timeline1.restart(), 2000)
})

gsap.registerPlugin(ScrollTrigger)
gsap.to("#section-1", {
    scrollTrigger: {
        trigger: "#section-2",
        start: "-20% 40%",
        end: "top 80%",
        toggleActions: "play restart reverse",
        markers: true,
    },
    duration: 0.5,
    opacity: 0
})