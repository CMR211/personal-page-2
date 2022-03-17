function getMonthsSince(now, then) {
    return Math.floor(
        (now.getTime() - then.getTime()) / 1000 / 60 / 60 / 24 / (365 / 12)
    )
}

function date1() {
    const el = document.getElementById("date1")
    el.innerText = getMonthsSince(new Date(), new Date("2021-10-01"))
}

date1()
hamburger()

function hamburger() {
    let active = false
    const button = document.getElementById("hamburger")
    const navbar = document.getElementById("navbar")
    const close = document.getElementById("navbar-close")
    const navItems = document.querySelectorAll(".nav-item-mobile")
    const DURATION = 0.7

    const timeline = gsap.timeline()
    timeline.fromTo(
        ".navbar",
        { "--radius": "1vh" },
        { "--radius": "100vh", duration: DURATION }
    )

    button.addEventListener("click", () => toggleNavbar())
    close.addEventListener("click", () => toggleNavbar())
    navItems.forEach(el => el.addEventListener("click", () => toggleNavbar()))

    for (let i = 1; i <= 4; i++) {
        document
            .getElementById(`nav-item-${i}-mobile`)
            .addEventListener("click", () => {
                disableScrollSnap = true
                document.querySelector(`#section-${i}`).scrollIntoView()
                setTimeout(() => (disableScrollSnap = false), 1000)
            })
    }

    function toggleNavbar() {
        if (!active) {
            navbar.classList.remove("hidden")
            timeline.restart()
            active = true
            return
        }
        if (active) {
            setTimeout(() => navbar.classList.add("hidden"), DURATION * 1000)
            timeline.reverse()
            active = false
            return
        }
    }
}
