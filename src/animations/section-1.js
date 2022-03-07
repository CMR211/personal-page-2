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

gsap.to(".ballon", {
    y: -20,
    duration: 2,
    rotate: "2deg",
    repeat: -1,
    ease: "sine.inOut",
    yoyo: "true",
})
