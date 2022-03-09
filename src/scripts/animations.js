gsap.registerPlugin(ScrollTrigger)

function element(el) {
    return document.getElementById(el)
}
function elements(els) {
    return document.getElementsByClassName(els)
}

const section1scroll = gsap.timeline({
    defaults: { duration: 0.3, ease: Power0.easeInOut },
    scrollTrigger: {
        scroller: "main",
        trigger: "#section-1",
        start: "top 80%",
        end: "20% 10%",
        toggleActions: "restart reverse restart pause",
    },
})
section1scroll
    .from(elements("anim1a"), {
        y: -10,
        opacity: 0,
        stagger: 0.4,
    })
    .from(elements("anim1b"), {
        opacity: 0,
    })

    