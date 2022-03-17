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
        trigger: "#section-1",
        start: "top 80%",
        end: "20% 10%",
        toggleActions: "play reset play reset",
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

const section3scroll = gsap.timeline({
    defaults: { duration: 0.3, ease: Power0.easeInOut },
    scrollTrigger: {
        trigger: "#section-3",
        start: "top 80%",
        end: "bottom 2%",
        toggleActions: "play reset play reset",
    },
})

section3scroll
    .from("#section-3", {
        "--opacity-rule": 0,
        duration: 2,
    })
    .from(document.getElementById("section-3-container").children, {
        delay: 0.1,
        y: -10,
        opacity: 0,
        stagger: 0.2,
    }, "<")
    .from(document.getElementById("section-3-grid").children, {
        x: -10,
        opacity: 0,
        stagger: 0.3,
    }, "<")

gsap.to(document.querySelector(".white-animation"), {
    scrollTrigger: {
        trigger: "#section-4",
        start: "top 80%",
        end: "bottom 10%",
        toggleActions: "play reset play reset",
        scrub: true,
    },

    height: 400,
})
