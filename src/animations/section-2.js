const timelineSec1 = gsap.timeline({
    delay: 0.5,
    defaults: { ease: "power2.inOut" },
})

timelineSec1
    .from("#hero1, #hero2", {
        duration: 1,
        x: -100,
        opacity: 0,
    })
    .from(
        "#hero3",
        {
            duration: 1,
            x: 100,
            opacity: 0,
        },
        "<"
    )
    .from(
        "#hero4",
        {
            duration: 0.3,
            opacity: 0,
        },
        ">"
    )
