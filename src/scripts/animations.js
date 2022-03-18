gsap.registerPlugin(ScrollTrigger)

section1animation()
whiteAnimation()
simpleAnimation()
dividersAnimation()

function dividersAnimation() {
    const dividers = document.querySelectorAll(".divider")
    dividers.forEach((divider, index) => {
        gsap.to(divider, {
            scrollTrigger: {
                id: index+1,
                trigger: divider,
                start: "top 90%",
                end: "bottom 10%",
                // toggleActions: ACTION_TYPE,
                scrub: 1,
                markers: true,
            },
            transform: "scaleX(1)",
        })
    })
}

function section1animation() {
    const section1scroll = gsap.timeline({
        defaults: { duration: 0.3, ease: Power0.easeInOut },
        scrollTrigger: {
            trigger: "#section-1",
            start: "top 80%",
            end: "20% 10%",
            toggleActions: ACTION_TYPE,
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
}

function whiteAnimation() {
    gsap.to(document.querySelector(".white-animation"), {
        scrollTrigger: {
            trigger: "#section-4",
            start: "top 80%",
            end: "bottom 10%",
            toggleActions: ACTION_TYPE,
            scrub: true,
        },
    
        height: 400,
    })
}

function simpleAnimation() {
    const elements = document.querySelectorAll(".anim-simple")
    elements.forEach((element, i) => {
        const className = `anim-simple-${i}`
        element.classList.remove(`anim-simple`)
        element.classList.add(className)
        gsap.timeline({
            scrollTrigger: {
                trigger: `.${className}`,
                start: "top 90%",
                end: "bottom 20%",
                toggleActions: ACTION_TYPE,
            },
        }).from(`.${className}`, {
            delay: 0.15,
            opacity: 0,
            y: -10,
            duration: 0.4,
        })
    })
}

function element(el) {
    return document.getElementById(el)
}

function elements(els) {
    return document.getElementsByClassName(els)
}
